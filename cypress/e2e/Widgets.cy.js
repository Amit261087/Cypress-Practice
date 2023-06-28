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
            .click()

        

        
    })
})