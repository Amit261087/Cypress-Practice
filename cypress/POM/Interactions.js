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

    verifyLandingAsListTab(){
        cy.get('#demo-tab-list')
            .should('be.visible')
            .and('have.text', 'List')
            .and('have.attr', 'aria-selected', 'true')

        cy.get('#demo-tab-grid')
            .should('be.visible')
            .and('have.text', 'Grid')
            .and('have.attr', 'aria-selected', 'false')
    }

    performSelectableOnList(){
        cy.get('.mt-2.list-group-item.list-group-item-action')
            .each(($el, index, $list)=>{
                const text = $el.text()
                if(text == 'Morbi leo risus'){
                    cy.get('.mt-2.list-group-item.list-group-item-action').eq(index).click()
                        .should('have.class', 'mt-2 list-group-item active list-group-item-action')
                }
        })
    }

    verifyLandingAsGridTab(){
        cy.get('#demo-tab-grid')
            .should('be.visible')
            .click()
            .should('have.text', 'Grid')
            .and('have.attr', 'aria-selected', 'true')

        cy.get('#demo-tab-list')
            .should('be.visible')
            .and('have.text', 'List')
            .and('have.attr', 'aria-selected', 'false')
    }

    performSelectableOnGrid(){
        cy.get('.list-group-item.list-group-item-action')
            .each(($el, index, $list)=>{
                const text = $el.text()
                if(text == 'Six'){
                    cy.get('.list-group-item.list-group-item-action').eq(index).click()
                        .should('have.class', 'list-group-item active list-group-item-action')
                }
        })
    }

    clickResizable(){
        cy.contains('Resizable')
            .should('be.visible')
            .click()
    }

    verifyResizableHeaderText(){
        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Resizable')
    }

    performResizable(){
        cy.get('#resizableBoxWithRestriction')
            .should('be.visible')

        cy.get('#resizableBoxWithRestriction')
            .invoke('css', 'width', '500px')
            .invoke('css', 'height', '300px')
            .should('have.css', 'width', '500px')
            .and('have.css', 'height', '300px')

        cy.get('#resizableBoxWithRestriction')
            .invoke('css', 'width', '2px')
            .invoke('css', 'height', '2px')
            .should('have.css', 'width', '2px')
            .and('have.css', 'height', '2px')

        cy.get('#resizableBoxWithRestriction')
            .invoke('css', 'width', '200px')
            .invoke('css', 'height', '200px')
            .should('have.css', 'width', '200px')
            .and('have.css', 'height', '200px')

        cy.get('#resizable')
            .should('be.visible')
            .invoke('css', 'width', '1000px')
            .invoke('css', 'height', '1000px')
            .should('have.css', 'width', '1000px')
            .and('have.css', 'height', '1000px')
    }


}

export default Interactions;