describe('Alerts Frames Windows', function(){

    it('New Window Message', function () {
        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com/browser-windows').then((win)=>{
            cy.spy(win, 'open').as('open')
        })

        cy.get('#messageWindowButton').click();
        cy.get('@open')
            .should('have.been.calledWith', '', 'MsgWindow')
            .its('firstCall.returnValue')
            .then((childwindow)=>{
                expect(childwindow.document.body.innerText).to.include('Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.')
            })
            .wait(1000)
            .invoke('close')
    })

    it('Alert', function(){
        cy.visit('https://demoqa.com/alerts')
        cy.get('#alertButton').click()
        cy.on('window:alert', (text)=>{
            expect(text).to.contains('You clicked a button')
        })

    })

    it('Alert with 5 seconds delay', function(){
        cy.visit('https://demoqa.com/alerts')
        cy.get('#timerAlertButton').click().wait(1000)
        cy.on('window:alert', (text)=>{
            expect(text).to.contains('This alert appeared after 5 seconds')
        })
    })

    it('Alert - Confirm => Ok', function(){
        cy.visit('https://demoqa.com/alerts')
        cy.get('#confirmButton').click()
        cy.on('window:confirm', (text)=>{
            expect(text).to.contains('Do you confirm action?')
        })
        cy.get('#confirmResult').should('have.text', 'You selected Ok')
    })

    it('Alert - Confirm => Cancel', function(){
        cy.visit('https://demoqa.com/alerts')
        cy.get('#confirmButton').click()
        cy.on('window:confirm', (text)=>{
            expect(text).to.contains('Do you confirm action?')
        })
        cy.on('window:confirm', ()=> false)
        cy.get('#confirmResult').should('have.text', 'You selected Cancel')
    })

    it('Prompt Window', function(){
        cy.visit('https://demoqa.com/alerts')
        cy.window().then((win) =>{
            cy.stub(win, 'prompt').returns('welcome')
        })
        cy.get('#promtButton').click()
        cy.get('#promptResult').should('have.text', 'You entered welcome')
        
    })

    it('Prompt Window - Cancel', function(){
        cy.visit('https://demoqa.com/alerts')
        cy.window().then((win) =>{
            cy.stub(win, 'prompt')
        })
        cy.get('#promtButton').click()
               
        cy.on('window:prompt', ()=> false)
    })

    it('Frames', function(){
        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com/')
        cy.contains("Alerts, Frame & Windows").click();
        cy.get('.main-header').should('be.visible').and('have.text', 'Alerts, Frame & Windows');
        cy.contains('Frames').click();
        cy.get('.main-header').should('be.visible').and('have.text','Frames');

        cy.frameLoaded('#frame1')
        cy.iframe('#frame1').should('have.text', 'This is a sample page')

        cy.frameLoaded('#frame2')
        cy.iframe('#frame2').should('have.text', 'This is a sample page')
    })

    it('Nested Frames', function(){
        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com/')
        cy.contains("Alerts, Frame & Windows").click();
        cy.get('.main-header').should('be.visible').and('have.text', 'Alerts, Frame & Windows');
        cy.contains('Nested Frames').click();
        cy.get('.main-header').should('be.visible').and('have.text','Nested Frames');

        cy.frameLoaded('#frame1')

        cy.get('#frame1')
            .its('0.contentDocument.body')
            .should('contain', 'Parent frame')

        cy.get('#frame1')
            .its('0.contentDocument')
            .its('body')
            .find('iframe')
            .then($iframe =>{
                const $body = $iframe.contents().find('body')
                cy.wrap($body).as('childFramebody')
            })

        cy.get('@childFramebody')
            .should('contain', 'Child Iframe')
    })
    
    it.only('Modal Dialogs', function(){
        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com')
        cy.contains("Alerts, Frame & Windows").click()
        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Alerts, Frame & Windows')
        cy.contains('Modal Dialogs')
            .click()
        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Modal Dialogs')

        cy.get("div[id='modalWrapper'] div div")
            .should('be.visible')
            .and('have.text', 'Click on button to see modal')

        cy.get('#showSmallModal')
            .should('be.visible')
            .click()

        cy.get('#example-modal-sizes-title-sm')
            .should('be.visible')
            .and('have.text', 'Small Modal')

        cy.get('.modal-body')
            .should('be.visible')
            .and('contain', 'has very less content')

        cy.get('#closeSmallModal')
            .should('be.visible')
            .click()


        cy.get('#showLargeModal')
            .should('be.visible')
            .click()

        cy.get('#example-modal-sizes-title-lg')
            .should('be.visible')
            .and('have.text', 'Large Modal')

        cy.get("div[class='modal-body'] p")
            .should('be.visible')
            .and('contain', 'Lorem Ipsum')

        cy.get('#closeLargeModal')
            .should('be.visible')
            .click()

    })
});
