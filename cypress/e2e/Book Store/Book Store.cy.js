describe('Book Store', function(){

    it.skip('Book Store', function(){
        cy.on('uncaught:exception',()=>false)
        cy.visit('https://demoqa.com/')

        cy.contains('Book Store Application')
            .should('be.visible')
            .click()

        cy.get('#login')
            .should('be.visible')
            .and('have.text', 'Login')
            .click()

        cy.get('#userName')
            .should('be.visible')
            .type('Amit261087')

        cy.get('#password')
            .should('be.visible')
            .type('June@2023');

        cy.get('#login')
            .should('be.visible')
            .click()

        cy.get('#userName-value')
            .should('be.visible')
            .and('have.text', 'Amit261087')

        cy.get('.mr-2').each(($el, index, $list)=>{
            const text = $el.text()
            if(text == 'Speaking JavaScript'){
                cy.get('.mr-2').eq(index).click()
            }
        })

        cy.wait(5000)

        cy.get("div[id='title-wrapper'] label[id='userName-value']")
                    .should('be.visible')
                    .and('have.text', 'Speaking JavaScript')

    })
})