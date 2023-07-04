class Interactions{

    visit(){
        cy.on('uncaught:exception', ()=>false);
        cy.visit('https://demoqa.com/');
    }

    verifyHomePageHeaderText(){
        cy.get("img[src='/images/Toolsqa.jpg']")
          .should('be.visible');
      }

    clickInteractions(){
        cy.contains('Interactions')
            .should('be.visible')
            .click();
    }

    verifyInteractionsHeaderText(){
        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Interactions');
    }

    clickSortableMenu(){
        cy.contains('Sortable')
            .should('be.visible')
            .click()
    }

    verifySortableMenuHeaderText(){
        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Sortable')
    }

    verifyDefaultLandingAsListTab(){
        cy.get('#demo-tab-list')
            .should('be.visible')
            .and('have.text', 'List')
            .and('have.attr', 'aria-selected', 'true')

        cy.get('#demo-tab-grid')
            .should('be.visible')
            .and('have.text', 'Grid')
            .and('have.attr', 'aria-selected', 'false')
    }

    performSortingOnListTab(){
        cy.get('.list-group-item.list-group-item-action').each(($el, index, $list)=>{
            
            const text = $el.text()
            if(text == 'One'){
                
                cy.get('.list-group-item.list-group-item-action').eq(index).as('lsitItemToDrag')
                    .trigger('mousedown', {force:true})

                cy.get('.list-group-item.list-group-item-action')
                    .eq(5)
                    .trigger('mousemove', {force:true})               
                    .trigger('mouseup',{force:true})
            }
        }) 
    }

    verifyLandingPageAsGrid(){
        cy.get('#demo-tab-grid')
            .should('be.visible')
            .and('have.text', 'Grid')
            .click()
            .should('have.attr', 'aria-selected', 'true')

        cy.get('#demo-tab-list')
            .should('be.visible')
            .and('have.text', 'List')
            .and('have.attr', 'aria-selected', 'false')
    }

    performSortingOnGridTab(){
        cy.get('.list-group-item.list-group-item-action').each(($el1, index1, $list1)=>{
            const text = $el1.text()
            if(text == 'Seven'){
                cy.get('.list-group-item.list-group-item-action').eq(index1).as('gridItemToDrag')
                    .trigger('mousedown', {force:true})
                    //.trigger('mousemove', {force:true})
                    cy.get('.list-group-item.list-group-item-action')
                    .eq(14)
                    .trigger('mousemove', {force: true})
                    .trigger('mouseup', {force:true})
            }
        })  
    }

    clickSelectable(){
        cy.contains('Selectable')
            .should('be.visible')
            .click();
    }

    verifySelectableMenuHeaderText(){
        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Selectable');
    }

    verify


}

export default Interactions;