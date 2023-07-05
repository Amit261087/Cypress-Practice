class Elements{

    visit(){
        cy.visit('https://demoqa.com/');
    }

    verifyHomePageHeaderText(){
        cy.get("img[src='/images/Toolsqa.jpg']")
          .should('be.visible');
      }

    clickElements(){
        cy.contains('Elements')
            .should('be.visible')
            .click();
    }

    verifyElementsHeaderText(){
        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Elements');
    }

    clickTextBox(){
        cy.contains('Text Box')
            .should('be.visible')
            .click();
    }

    verifyTextBoxHeaderText(){
        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Text Box');
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
            .and('contain', userName);
    }

    verifyBodyEmail(userEmail){
        cy.get('.border #email')
            .should('be.visible')
            .and('contain', userEmail);
    }

    verifyBodyCurrentAddress(currentAddress){
        cy.get('.border #currentAddress')
            .should('be.visible')
            .and('contain', currentAddress);
    }

    verifyBodyPermanentAddress(permanentAddress){
        cy.get('.border #permanentAddress')
            .should('be.visible')
            .and('contain', permanentAddress);
    }

    clickCheckBox(){
        cy.contains('Check Box')
            .should('be.visible')
            .click();
    }

    verifyCheckBoxHeaderText(){
        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Check Box');
    }

    checkHomeCheckBox(){
        cy.get("#tree-node-home")
            .check({force:true});
    }

    verifyHomeCheckBox(){
        cy.get('#result')
            .should('be.visible')
            .and('contain','You have selected :home');
    }

    selectChildInTree(){
        cy.get("button[class='rct-option rct-option-expand-all']")
            .click()
            cy.get('span.rct-text').each(($el, index, $list)=>{
            const text = $el.text()
            if(text == 'React'){
                cy.get('span.rct-text').eq(index).click()
                cy.get('#result').should('contain', 'react')
            }

        })
    }

    clickRadioButton(){
        cy.contains('Radio Button')
            .should('be.visible')
            .click();
    }

    veryfyRadioButtonHeaderText(){
        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Radio Button')
    }

    selectYesRadioButton(){
        cy.get('.mb-3').should('have.text', 'Do you like the site?')
        cy.get("label[for='yesRadio']")
            .should('be.visible')
            .click();
    }

    verifyYesRadioButtonSelected(){
        cy.get('.mt-3')
            .should('contain', 'Yes')
    }

    selectImpressiveRadioButton(){
        cy.get("label[for='impressiveRadio']")
            .should('be.visible')
            .click();
    }

    verifyImpressiveRadioButtonSelected(){
        cy.get('.mt-3').should('contain', 'Impressive')
    }

    selectNoRadioButton(){
        cy.get("#noRadio")
            .then(($el) => {
                $el.css('opacity', '1'); // Modify the CSS property to make the element visible
                    return $el;
                })
                .should('be.visible')
                .and('have.css', 'opacity', '1')
                .click({force:true});

                // Reset the CSS property to its original value
                cy.get("#noRadio").then(($el) => {
                    $el.css('opacity', '0');
                });
        cy.get('#noRadio')
                .should('have.css', 'opacity', '0')
    }

    clickWebTables(){
        cy.contains('Web Tables')
            .should('be.visible')
            .click();
    }

    verifyWebTablesHeaderText(){
        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Web Tables')
    }

    clickAddNewRecord(){
        cy.get('#addNewRecordButton')
            .should('be.visible')
            .click()
    }

    verifyRegistrationFormModel(){
        cy.get('#registration-form-modal')
            .should('be.visible')
        cy.get('#firstName')
            .should('be.visible')
        cy.get('#lastName')
            .should('be.visible')
        cy.get('#userEmail')
            .should('be.visible')
        cy.get('#age')
            .should('be.visible')
        cy.get('#salary')
            .should('be.visible')
        cy.get('#department')
            .should('be.visible')
        cy.get('#submit')
            .should('be.visible')
            .and('have.text', 'Submit')
    }

    fillRegistrationForm(){
        cy.get('#firstName').type('Amit')                        
        cy.get('#lastName').type('Sharma')                        
        cy.get('#userEmail').type('amit.sharma@gmail.com')
        cy.get('#age').type(30)
        cy.get('#salary').type(15000)
        cy.get('#department').type('IT')
    }

    submitRegistrationForm(){
        cy.get('#submit')
            .click()
    }

    verifyNewRecord(){
        cy.get('.rt-td').each(($el, index, $list)=>{
            const cellText = $el.text()
            if(cellText == 'Amit'){
                const $row = $el.closest("div[class='rt-tr-group']")

                const rowData = $row.find("div[class='rt-td']").map((_, cell)=> Cypress.$(cell).text())
                

                cy.log(rowData.get().join(' | '))
            }
        })

        cy.get('.mb-3.input-group').type('Amit');
    }

    clickButtons(){
        cy.contains('Buttons')
            .should('be.visible')
            .click()
    }

    verifyButtonsHeaderText(){
        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Buttons')
    }

    clickDoubleClickButton(){
        cy.get('#doubleClickBtn')
            .should('be.visible')
            .dblclick()
    }

    verifyDoubleClick(){
        cy.get('#doubleClickMessage')
            .should('contain', 'double')
    }

    clickRightClickButton(){
        cy.get('#rightClickBtn')
            .should('be.visible')
            .rightclick()
    }

    verifyRightClick(){
        cy.get('#rightClickMessage')
            .should('contain', 'right')
    }

    clickClickMeButton(){
        cy.get("[class='btn btn-primary']").each(($el, index, $list)=>{
            const text = $el.text()                            
            if(text == 'Click Me'){

                cy.get("[class='btn btn-primary']").eq(index)
                    .should('be.visible')
                    .click()
            }
        })
    }

    verifyClickMeClicked(){
        cy.get('#dynamicClickMessage')
            .should('contain', 'dynamic') 
    }

    
}

export default Elements;