describe('Widgets', function(){

    it('Accordian', function(){
        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com/')
        cy.contains('Widgets')
            .should('be.visible')
            .click();

        cy.url()
            .should('include', 'widgets')

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Widgets')

        cy.contains('Accordian').click()

        cy.get('#section2Heading')
            .should('be.visible')
            .and('have.text', 'Where does it come from?')
            .click({force:true})
        cy.get('#section2Content').should('contain','comes from')

        cy.get('#section3Heading')
            .should('be.visible')
            .and('have.text', 'Why do we use it?')
            .click({force:true})
        cy.get('#section3Content').should('contain', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout')

        cy.get('#section1Heading')
            .should('be.visible')
            .and('have.text', 'What is Lorem Ipsum?')
            .click({force:true})
        cy.get('#section1Content').should('contain', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry')
        
    })

    it('Auto Complete', function(){
        cy.on('uncaught:exception', ()=> false)
        cy.visit('https://demoqa.com/')
        cy.contains('Widgets')
            .should('be.visible')
            .click()

        cy.contains('Auto Complete')
            .should('be.be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Auto Complete')

        cy.get('.auto-complete__value-container.auto-complete__value-container--is-multi.css-1hwfws3')
            .should('be.visible')
            .type('Red{enter}')
            .type('Green{enter}')
            .type('Black{enter}')
            .should('have.text', 'RedGreenBlack')

        cy.get('#autoCompleteSingleContainer > .auto-complete__control > .auto-complete__value-container')
            .should('be.visible')
            .type('Yellow{enter}')
            .should('have.text', 'Yellow')

    })


    it('Date Picker', function () {
        cy.on('uncaught:exception', () => false);
        cy.visit('https://demoqa.com');
        cy.contains('Widgets')
          .should('be.visible')
          .click();
      
        cy.contains('Date Picker')
          .should('be.visible')
          .click();
      
        cy.get('.main-header')
          .should('be.visible')
          .and('have.text', 'Date Picker');
      
        cy.get('#datePickerMonthYearInput')
          .click();
      
        cy.get('.react-datepicker__year-select')
          .select('2020');
      
        cy.get('.react-datepicker__month-select')
          .select('October');
      
        cy.get('.react-datepicker__day')
          .contains(14)
          .click();
      
        cy.get('#datePickerMonthYearInput')
          .invoke('val')
          .then(selectedValue => {
            const expectedValue = '10/14/2020';
            expect(selectedValue).to.equal(expectedValue);
          });
      
        cy.get('#dateAndTimePickerInput')
          .click();
      
        cy.get('.react-datepicker__year-read-view--selected-year')
          .click();
        cy.get('.react-datepicker__year-option')
          .contains('2018')
          .click();
        cy.get('.react-datepicker__month-read-view--selected-month')
          .click();
      
        cy.get('.react-datepicker__month-option')
          .contains('August')
          .click();
      
        cy.get('.react-datepicker__day')
          .contains('15')
          .click();
      
        cy.get('.react-datepicker__time-list-item ')
          .contains('20:00')
          .click();
      
        cy.get('#dateAndTimePickerInput')
          .invoke('val')
          .then(selectedValue => {
            const expectedValue = 'August 15, 2018 8:00 PM';
            expect(selectedValue).to.equal(expectedValue);
          });
      });      
      
      it('Slider', function(){
        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com')
        cy.contains('Widgets')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Widgets')

        cy.contains('Slider')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Slider')
            
      })

      it('Progress Bar', function(){
        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com')

        cy.contains('Widgets')
          .should('be.visible')
          .click()

        cy.get('.main-header')
          .should('be.visible')
          .and('have.text', 'Widgets')

        cy.contains('Progress Bar')
          .should('be.visible')
          .click()

        cy.get('.main-header')
          .should('be.visible')
          .and('have.text', 'Progress Bar')

          cy.get('#startStopButton')
          .should('be.visible')
          .and('have.text', 'Start')
          .click()
          .should('have.text', 'Stop')
          .click()
          .should('have.text', 'Start')
          .click()
          .then(() => {
            cy.wait(10000)
            cy.get("div[role='progressbar']")
              .should('have.attr', 'aria-valuenow', '100')
              .then(() => {
                
                cy.get('#resetButton')
                  .should('be.visible')
                  .and('have.text', 'Reset')
                  .click()
                 
              })
              .then(()=>{
                cy.get("div[role='progressbar']")
                  .should('have.attr', 'aria-valuenow', '0')
              })
          });
      })

      it('Tabs', function(){
        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com')

        cy.contains('Widgets')
          .click()

        cy.url().should('include', 'widgets')

        cy.get('.main-header')
          .should('be.visible')
          .and('have.text', 'Widgets')

        cy.contains('Tabs')
          .should('be.visible')
          .click()

        cy.get('.main-header')
          .should('be.visible')
          .and('have.text', 'Tabs')

        cy.get('.mb-3')
          .should('be.visible')
          .and('have.text', 'Details about Lorem Ipsum')

        cy.get('#demo-tab-what')
          .should('be.visible')
          .and('have.text', 'What')
        cy.get('#demo-tabpane-what')
          .should('be.visible')
          .and('have.attr', 'aria-hidden', 'false')
          .and('contain', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry')

        cy.get('#demo-tabpane-origin')
          .should('have.attr', 'aria-hidden', 'true')
          .and('not.be.visible')

        cy.get('#demo-tabpane-use')
          .should('have.attr', 'aria-hidden', 'true')
          .and('not.be.visible')

        cy.get('#demo-tab-origin')
          .should('be.visible')
          .and('have.text', 'Origin')
          .click()

        cy.get('#demo-tabpane-origin')
          .should('be.visible')
          .and('have.attr', 'aria-hidden', 'false')
          .and('contain', 'Contrary to popular belief, Lorem Ipsum is not simply random text')

        cy.get('#demo-tab-use')
          .should('be.visible')
          .and('have.text', 'Use')
          .click()

        cy.get('#demo-tabpane-use')
          .should('be.visible')
          .and('have.attr', 'aria-hidden', 'false')
          .and('contain', 'It is a long established fact that a reader will be distracted by the readable content of a page')
        
        cy.get('#demo-tab-more')
          .should('be.visible')
          .and('have.text', 'More')
          .click({force:true})

        cy.get('#demo-tabpane-more')
          .should('have.attr', 'aria-hidden', 'true')
      
      })

      it('Tool Tips', function(){
        cy.on('uncaught:exception', ()=> false)
        cy.visit('https://demoqa.com/')

        cy.contains('Widgets')
          .click()

        cy.get('.main-header')
          .should('be.visible')
          .and('have.text', 'Widgets')

        cy.contains('Tool Tips')
          .should('be.visible')
          .click()

        cy.get('.main-header')
          .should('be.visible')
          .and('have.text', 'Tool Tips')

        cy.get('#toolTipButton')
          .should('be.visible')
          .and('have.text', 'Hover me to see')
          .trigger('mouseover')
          .then(()=>{
            cy.get('.tooltip-inner')
              .should('be.visible')
              .and('have.text', 'You hovered over the Button')
          })

        cy.get('#toolTipTextField')
          .should('be.visible')
          .and('have.attr', 'placeholder', 'Hover me to see')
          .trigger('mouseover')
          .then(()=>{
            
            cy.contains('.tooltip-inner', 'You hovered over the text field')
              .should('be.visible')
              
          })

        cy.xpath("//a[normalize-space()='Contrary']")
          .should('be.visible')
          .trigger('mouseover')
          .then(()=>{
            cy.contains('.tooltip-inner', 'You hovered over the Contrary')
              .should('be.visible')
          })

        cy.xpath("//a[normalize-space()='1.10.32']")
          .should('be.visible')
          .trigger('mouseover')
          .then(()=>{
            cy.contains('.tooltip-inner', 'You hovered over the 1.10.32')
              .should('be.visible')
          })
      })

      it('Menu', function(){
        cy.on('uncaught:exception', ()=> false)
        cy.visit('https://demoqa.com/')

        cy.contains('Widgets')
          .should('be.visible')
          .click()

        cy.get('.main-header')
          .should('be.visible')
          .and('have.text', 'Widgets')

        cy.contains('Menu')
          .should('be.visible')
          .click()

        cy.get('.main-header')
          .should('be.visible')
          .and('have.text', 'Menu')

        cy.xpath('//a[contains(text(), "Main Item 1")]')
          .should('be.visible')
          .and('have.text', 'Main Item 1')
          

        // Hover over the "Main Item 2" menu
        cy.get('li:contains("Main Item 2")')
          .trigger('mouseover')
          .then(() => {
            // Verify the parent <ul> element is visible
            cy.get('li:contains("Main Item 2") > ul')
              .invoke('show')
              .should('be.visible');

              // Verify the "Sub Item" submenu
              cy.get('li:contains("Main Item 2") ul li:contains("Sub Item")')
                .should('be.visible');

              // Verify the "SUB SUB LIST" submenu
              cy.get('li:contains("Main Item 2") ul li:contains("SUB SUB LIST")')
                .trigger('mouseover')
                .then(() => {
              // Verify the parent <ul> element is visible
              cy.get('li:contains("SUB SUB LIST") > ul')
                .invoke('show')
                .should('be.visible');

              // Verify "Sub Sub Item 1" submenu
              cy.get('li:contains("SUB SUB LIST") ul li:contains("Sub Sub Item 1")')
                .should('be.visible');

              // Verify "Sub Sub Item 2" submenu
              cy.get('li:contains("SUB SUB LIST") ul li:contains("Sub Sub Item 2")')
                .should('be.visible');
          })

        })        
    })

    it('Select Menu', function(){
      cy.on('uncaught:exception', ()=>false)
      cy.visit('https://demoqa.com/')

      cy.contains('Widgets')
        .click()
        .url()
        .should('include', 'widgets')

      cy.get('.main-header')
        .should('be.visible')
        .and('have.text', 'Widgets')

      cy.contains('Select Menu')
        .should('be.visible')
        .click()

      cy.get('.main-header')
        .should('be.visible')
        .and('have.text', 'Select Menu')

      cy.get('#withOptGroup')
        .should('be.visible')
        .click()
        .then(()=>{
          
          cy.contains('A root option')
            .should('be.visible')
            .click({force:true})          
        })

      cy.get("div[id='selectOne'] div[class=' css-1hwfws3']")
        .should('be.visible')
        .click()
        .then(()=>{
          cy.contains('Mr.')
            .click()
        })

      cy.get('#oldSelectMenu')
        .should('be.visible')
        .and('have.value', 'red')
        .select('Black')
        .should('have.value', '5')

      cy.get("div[id='selectMenuContainer'] div[class='row'] div[class=' css-1hwfws3']")
        .should('be.visible')
        .type('{enter}')
        

      cy.get('#cars')
        .should('be.visible')
        .select(['Volvo', 'Saab', 'Opel', 'Audi'], {force:true})
          
    })
})