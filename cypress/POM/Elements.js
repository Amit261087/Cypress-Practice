class Elements{

    visit(){
        cy.visit('https://demoqa.com/')
    }

    clickElements(){
        cy.contains('Elements')
            .should('be.visible')
            .click()
    }

    verifyElementsHeaderText(){
        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Elements')
    }

    clickTextBox(){
        cy.contains('Text Box')
            .should('be.visible')
            .click()
    }

    verifyTextBoxHeaderText(){
        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Text Box')
    }

    enterFullName(userName){
        cy.get('#userName')
            .should('be.visible')
            .type(userName);
    }

    enterEmail(userEmail){
        cy.get('#userEmail')
            .should('be.visible')
            .type(userEmail);
    }

    enterCurrentAddress(currentAddress){
        cy.get('#currentAddress')
            .should('be.visible')
            .type(currentAddress);
    }

    enterPermanentAddress(permanentAddress){
        cy.get('#permanentAddress')
            .should('be.visible')
            .type(permanentAddress);
    }

    clickSubmit(){
        cy.get('#submit')
            .should('be.visible')
            .click();
    }

    verifyBodyName(userName){
        cy.get('.border #name')
            .should('be.visible')
            .and('contain', userName)
    }

    verifyBodyEmail(userEmail){
        cy.get('.border #email')
            .should('be.visible')
            .and('contain', userEmail)
    }

    verifyBodyCurrentAddress(currentAddress){
        cy.get('.border #currentAddress')
            .should('be.visible')
            .and('contain', currentAddress)
    }

    verifyBodyPermanentAddress(permanentAddress){
        cy.get('.border #permanentAddress')
            .should('be.visible')
            .and('contain', permanentAddress)
    }
}

export default Elements;