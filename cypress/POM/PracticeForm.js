class Forms{

    demoqaurl = 'https://demoqa.com/';
    toolsQAImage = "img[src='/images/Toolsqa.jpg']";
    header = '.main-header';
    practiceFormMenu = "li[class='btn btn-light ']"

    visit(){
        cy.visit(this.demoqaurl)
    }

    verifyHomePageHeaderText(){
      cy.get(this.toolsQAImage)
        .should('be.visible');
    }

    clickFormsLink(){
        cy.contains('Forms').click()
    }

    verifyFormsHeaderText(){
        cy.get(this.header)
            .should('be.visible')
            .should('have.text', 'Forms')
    }

    clickPracticeFormLink(){
        cy.get(this.practiceFormMenu)
            .contains('Practice Form')
            .should('be.visible')
            .click()
    }

    fillFirstName(firstName){
        cy.get('#firstName')
            .should('be.visible')
            .type(firstName)
    }

    fillLastName(lastName){
        cy.get('#lastName')
            .should('be.visible')
            .type(lastName)
    }

    fillEmail(email){
        cy.get('#userEmail')
            .should('be.visible')
            .type(email)
    }

    selectGender(){
        cy.get("label[for='gender-radio-1']")
            .should('be.visible')
            .click()
    }

    fillPhoneNumber(phoneNumber) {
        cy.get('#userNumber').should('be.visible').type(phoneNumber);
      }
    
      selectDateOfBirth(date) {
        cy.get('#dateOfBirthInput').type(`{selectAll}${date}`);
      }
    
      selectSubject(subject) {
        cy.get('.subjects-auto-complete__value-container.subjects-auto-complete__value-container--is-multi.css-1hwfws3')
          .click({force:true})
          .type(`${subject}{enter}`);
      }
    
      selectHobby() {
        cy.get('#hobbies-checkbox-1').check({ force: true });
      }
    
      uploadPicture(fileName) {
        cy.get('#uploadPicture').attachFile(fileName);
      }
    
      fillCurrentAddress(address) {
        cy.get('#currentAddress').type(address);
      }
    
      selectState(state) {
        cy.get("div[class=' css-yk16xz-control']").click({ force: true }).type(`${state}{enter}`);
      }
    
      selectCity(city) {
        cy.get("div[class=' css-yk16xz-control'] div[class=' css-1wa3eu0-placeholder']")
          .click({ force: true })
          .type(`${city}{enter}`);
      }
    
      clickSubmitButton() {
        cy.contains('Submit').click({ force: true });
      }
    
      verifyConfirmationMessage() {
        cy.get('#example-modal-sizes-title-lg').should('have.text', 'Thanks for submitting the form');
      }
    
      clickCloseButton() {
        cy.contains('Close').click({ force: true });
      }
}

export default Forms;