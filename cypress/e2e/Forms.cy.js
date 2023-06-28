describe('Forms', function(){

    beforeEach(()=>{
        cy.visit('https://demoqa.com/')        
    })

    it('Practice Form', function(){
        cy.contains('Forms').click()
        cy.get('.main-header').should('have.text', 'Forms')
        cy.get("li[class='btn btn-light ']").contains('Practice Form')
            .should('be.visible')
            .click()

        cy.get('#firstName')
            .should('be.visible')
            .type('Amit')

        cy.get('#lastName')
            .should('be.visible')
            .type('Sharma')

        cy.get('#userEmail')
            .should('be.visible')
            .type('abc@gmail.com')

        cy.get("label[for='gender-radio-1']")
            .should('be.visible')
            .click()

        cy.get('#userNumber')
            .should('be.visible')
            .type('8600995961')

        
        cy.get('#dateOfBirthInput')
            .type("{selectAll}26 Oct 1987")

        cy.get('.subjects-auto-complete__value-container.subjects-auto-complete__value-container--is-multi.css-1hwfws3', {force:true})
            .click({force:true})
            .type('Commerce{enter}')
        
        cy.get('#hobbies-checkbox-1').check({force:true})

        cy.get('#uploadPicture').attachFile('Amit.jpg')

        cy.get('#currentAddress').type('Canada')

        cy.get("div[class=' css-yk16xz-control']").click({force:true})
            .type('Uttar Pradesh{enter}')
            //.type('{downarrow}{enter}')

        cy.get("div[class=' css-yk16xz-control'] div[class=' css-1wa3eu0-placeholder']").click({force:true})
            .type('Agra{enter}')
            //.type('{downarrow}{enter}')

        cy.contains('Submit').click({force:true})

        cy.get('#example-modal-sizes-title-lg').should('have.text', 'Thanks for submitting the form')
        cy.contains('Close')
            .click({force:true})
    })
})