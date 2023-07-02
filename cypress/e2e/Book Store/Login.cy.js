describe('Login', function(){

    it('Login', function(){
        cy.on('uncaught:exception',()=>false)
        cy.visit('https://demoqa.com/')

        cy.contains('Book Store Application')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Book Store')

        cy.get('#login')
            .should('be.visible')
            .and('have.text', 'Login')
            .click()

        cy.get('#userForm h5')
            .should('be.visible')
            .and('have.text', 'Login in Book Store')

        cy.get('#userName')
            .should('be.visible')
            .type('Amit261087')
            .should('have.value', 'Amit261087')

        cy.get('#password')
            .should('be.visible')
            .type('June@2023')
            .should('have.value', 'June@2023')

        cy.get('#login')
            .should('be.visible')
            .and('have.text', 'Login')
            .click()

        cy.get('#userName-value')
            .should('be.visible')
            .and('have.text', 'Amit261087')

        cy.get('#submit')
            .should('be.visible')
            .and('have.text', 'Log out')

    })
})