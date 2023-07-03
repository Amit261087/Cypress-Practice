describe('Add Book in Collection', function(){

    it('Add Book', function(){

        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com/')

        cy.contains('Book Store Application')
            .should('be.visible')
            .click()

        cy.get("div[class='element-list collapse show'] li[id='item-0'] span[class='text']")
            .should('be.visible')
            .click()

        cy.get('#userName')
            .should('be.visible')
            .type('Amit261087')

        cy.get('#password')
            .should('be.visible')
            .type('June@2023')

        cy.get('#login')
            .should('be.visible')
            .click()

        cy.get("div[class='element-list collapse show'] li[id='item-2'] span[class='text']")
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Book Store')

        cy.get('.mr-2').each(($el, index, $list)=>{
            const text = $el.text()

            if(text == 'Speaking JavaScript'){

                cy.get('.mr-2').eq(index).click()

            }
        })
    })
})