import Interactions from "../POM/Interactions";

describe('Interactions', function(){

    const Interaction = new Interactions();

    beforeEach(()=>{
        Interaction.visit();
    })

    it('Sortable - List Tab', function(){
        
        Interaction.verifyHomePageHeaderText();
        Interaction.clickInteractions();
        Interaction.verifyInteractionsHeaderText();
        Interaction.clickSortableMenu();
        Interaction.verifySortableMenuHeaderText();
        Interaction.verifyDefaultLandingAsListTab();
        Interaction.performSortingOnListTab();
    })


    it('Sortable - Grid Tab', function(){

        Interaction.verifyHomePageHeaderText();
        Interaction.clickInteractions();
        Interaction.verifyInteractionsHeaderText();
        Interaction.clickSortableMenu();
        Interaction.verifySortableMenuHeaderText();
        Interaction.verifyLandingPageAsGrid();
        Interaction.performSortingOnGridTab();            
    
    })

    it('Selectable - List', function(){

        Interaction.verifyHomePageHeaderText();
        Interaction.clickInteractions();
        Interaction.verifyInteractionsHeaderText();
        Interaction.clickSelectable();
        Interaction.verifySelectableMenuHeaderText();
        Interaction.verifyDefaultLandingAsListTab();
        Interaction.performSelectableOnList();

    })

    it('Selectable - Grid', function(){

        Interaction.verifyHomePageHeaderText();
        Interaction.clickInteractions();
        Interaction.verifyInteractionsHeaderText();
        Interaction.clickSelectable();
        Interaction.verifySelectableMenuHeaderText();
        Interaction.verifyLandingAsGridTab();
        Interaction.performSelectableOnGrid();

    })

    it.only('Resizable', function(){

        Interaction.verifyHomePageHeaderText();
        Interaction.clickInteractions();
        Interaction.verifyInteractionsHeaderText();
        Interaction.clickResizable();
        Interaction.verifyResizableHeaderText();
        Interaction.performResizable();

    })

    it('Droppable - Simple', function(){
        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com')

        cy.contains('Interactions')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Interactions')

        cy.contains('Droppable')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Droppable')

        cy.get('#droppableExample-tab-simple')
            .should('be.visible')
            .and('have.text', 'Simple')
            .and('have.attr', 'aria-selected', 'true')

        cy.get('#draggable')
            .trigger('mousedown', {which:1})
        cy.get('#droppable')
            .trigger('mousemove')
            .trigger('mouseup', {force:true})
            .should('have.text', 'Dropped!')        

    })

    it('Droppable - Accept - Acceptable', function(){
        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com')

        cy.contains('Interactions')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Interactions')

        cy.contains('Droppable')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Droppable')

        cy.get('#droppableExample-tab-accept')
            .should('be.visible')
            .and('have.text', 'Accept')
            .click()
            .should('have.attr', 'aria-selected', 'true')

        cy.get('#acceptable')
            .trigger('mousedown', {which:1})
        cy.get('#acceptDropContainer .drop-box.ui-droppable')
            .trigger('mousemove', {force:true})
            .trigger('mouseup', {force:true})
            .should('have.text', 'Dropped!')
    })

    it('Droppable - Accept - Not Acceptable', function(){
        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com')

        cy.contains('Interactions')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Interactions')

        cy.contains('Droppable')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Droppable')

        cy.get('#droppableExample-tab-accept')
            .should('be.visible')
            .and('have.text', 'Accept')
            .click()
            .should('have.attr', 'aria-selected', 'true')

        cy.get('#notAcceptable')
            .trigger('mousedown', {which:1})
        cy.get('#acceptDropContainer .drop-box.ui-droppable')
            .trigger('mousemove', {force:true})
            .trigger('mouseup', {force:true})
            .should('have.text', 'Drop here')
    })

    it('Droppable - Prevent Propogation - Not Greedy - Inner Box', function(){
        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com')

        cy.contains('Interactions')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Interactions')

        cy.contains('Droppable')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Droppable')

        cy.get('#droppableExample-tab-preventPropogation')
            .should('be.visible')
            .and('have.text', 'Prevent Propogation')
            .click()
            .should('have.attr', 'aria-selected', 'true')

        cy.get('#dragBox')
             .trigger('mousedown', {which:1})
        cy.get("div[id='notGreedyInnerDropBox'] p")
             .trigger('mousemove', {force:true})
             .trigger('mouseup', {force:true})
             .should('have.text', 'Dropped!')
    })

    it('Droppable - Prevent Propogation - Not Greedy - Outer Box', function(){
        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com')

        cy.contains('Interactions')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Interactions')

        cy.contains('Droppable')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Droppable')

        cy.get('#droppableExample-tab-preventPropogation')
            .should('be.visible')
            .and('have.text', 'Prevent Propogation')
            .click()
            .should('have.attr', 'aria-selected', 'true')

        cy.get('#dragBox')
             .trigger('mousedown', {which:1})
        cy.xpath("(//p[contains(text(),'Outer droppable')])[1]")
             .trigger('mousemove', {force:true})
             .trigger('mouseup', {force:true})
             .should('have.text', 'Dropped!')
        
        cy.get("div[id='notGreedyInnerDropBox'] p")
            .should('have.text', 'Inner droppable (not greedy)')
    })

    it('Droppable - Prevent Propogation - Greedy - Inner Box', function(){
        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com')

        cy.contains('Interactions')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Interactions')

        cy.contains('Droppable')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Droppable')

        cy.get('#droppableExample-tab-preventPropogation')
            .should('be.visible')
            .and('have.text', 'Prevent Propogation')
            .click()
            .should('have.attr', 'aria-selected', 'true')

        cy.get('#dragBox')
             .trigger('mousedown', {which:1})
        cy.get("#greedyDropBoxInner")
             .trigger('mousemove', {force:true})
             .trigger('mouseup', {force:true})
             .should('have.text', 'Dropped!')

        cy.xpath("(//p[contains(text(),'Outer droppable')])[2]")
            .should('have.text', 'Outer droppable')
    })

    it('Droppable - Prevent Propogation - Greedy - Outer Box', function(){
        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com')

        cy.contains('Interactions')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Interactions')

        cy.contains('Droppable')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Droppable')

        cy.get('#droppableExample-tab-preventPropogation')
            .should('be.visible')
            .and('have.text', 'Prevent Propogation')
            .click()
            .should('have.attr', 'aria-selected', 'true')

        cy.get('#dragBox')
             .trigger('mousedown', {which:1})
        cy.xpath("(//p[contains(text(),'Outer droppable')])[2]")
             .trigger('mousemove', {force:true})
             .trigger('mouseup', {force:true})
             .should('have.text', 'Dropped!')
        
        cy.get("#greedyDropBoxInner")
            .should('have.text', 'Inner droppable (greedy)')
    })

    it('Droppable - Revert Draggable - Will Revert', function(){

        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com')

        cy.contains('Interactions')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Interactions')

        cy.contains('Droppable')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Droppable')

        cy.get('#droppableExample-tab-revertable')
            .should('be.visible')
            .and('have.text', 'Revert Draggable')
            .click()
            .should('have.attr', 'aria-selected', 'true')

        cy.get('#revertable')
            .trigger('mousedown', {which:1})
        cy.xpath("//div[@id='revertableDropContainer']//div[@id='droppable']")
            .trigger('mousemove', {force:true})
            .trigger('mouseup', {force:true})
            .should('have.text', "Dropped!")

        cy.get('#revertable')
            .should('have.attr', 'style', 'position: relative; left: 0px; top: 0px;')
    })

    it('Droppable - Revert Draggable - Will Not Revert', function(){

        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com')

        cy.contains('Interactions')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Interactions')

        cy.contains('Droppable')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Droppable')

        cy.get('#droppableExample-tab-revertable')
            .should('be.visible')
            .and('have.text', 'Revert Draggable')
            .click()
            .should('have.attr', 'aria-selected', 'true')

        cy.get('#notRevertable')
            .trigger('mousedown', {which:1})
        cy.xpath("//div[@id='revertableDropContainer']//div[@id='droppable']")
            .trigger('mousemove', {force:true})
            .trigger('mouseup', {force:true})
            .should('have.text', "Dropped!")        
    })

    it('Draggable - Simple', function(){
        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com/')

        cy.contains('Interactions')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Interactions')

        cy.contains('Dragabble')
            .should('be.visible')
            .and('have.text', 'Dragabble')
            .click({force:true})

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Dragabble')

        cy.get('#draggableExample-tab-simple')
            .should('be.visible')
            .and('have.text', 'Simple')
            .and('have.attr', 'aria-selected', 'true')

        cy.get('#dragBox')
            .should('be.visible')
            .and('have.text', 'Drag me')
            .trigger('mousedown', {which:1})
            .trigger('mousemove')
            .invoke('css', 'left', '100px')
            .invoke('css', 'top', '100px')
            .trigger('mouseup')

        cy.get('#dragBox')
            .should('have.css', 'left', '100px')
            .and('have.css', 'top', '100px')
    })

    it('Dragabble - Axis Restricted', function(){
        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com/')

        cy.contains('Interactions')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Interactions')
        
        cy.contains('Dragabble')
            .should('be.visible')
            .click({force:true})

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Dragabble')

        cy.get('#draggableExample-tab-axisRestriction')
            .should('be.visible')
            .and('have.text', 'Axis Restricted')
            .and('have.attr', 'aria-selected', 'false')
            .click()
            .should('have.attr', 'aria-selected', 'true')

        cy.get('#restrictedX')
            .should('be.visible')
            .and('have.text', 'Only X')
            .trigger('mousedown', {which:1})
            .trigger('mousemove', {force:true})
            .invoke('css', 'left', '100px')
            .invoke('css', 'top', '100px')
            .trigger('mouseup', {force:true})
            .should('have.css', 'left', '100px')
            .and('have.css', 'top', '100px')

        cy.get('#restrictedY')
            .should('be.visible')
            .and('have.text', 'Only Y')
            .trigger('mousedown', {which:1})
            .trigger('mousemove', {force:true})
            .invoke('css', 'left', '100px')
            .invoke('css', 'top', '100px')
            .trigger('mouseup', {force:true})
            .should('have.css', 'top', '100px')
            .and('have.css', 'left', '100px')
    })

    it('Dragabble - Container Restricted', function(){
        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com/')

        cy.contains('Interactions')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Interactions')

        cy.contains('Dragabble')
            .should('be.visible')
            .click({force:true})

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Dragabble')

        cy.get('#draggableExample-tab-containerRestriction')
            .should('be.visible')
            .and('have.text', 'Container Restricted')
            .and('have.attr', 'aria-selected', 'false')
            .click({force:true})
            .should('have.attr', 'aria-selected', 'true')

        cy.get('#containmentWrapper')
            .should('be.visible')
            .then(()=>{
                cy.get('.draggable.ui-widget-content.ui-draggable.ui-draggable-handle')
                    .should('be.visible')
                    .trigger('mousedown', {which:1})
                    .trigger('mousemove', {force:true})
                    .invoke('css', 'top', '100px')
                    .invoke('css', 'left', '100px')
                    .trigger('mouseup', {force:true})
                    .should('have.css', 'top', '100px')
                    .and('have.css', 'left', '100px')
            })
    })

    it('Dragabble - Cursor Style', function(){
        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com/')
        
        cy.contains('Interactions')
          .should('be.visible')
          .click()
      
        cy.get('.main-header')
          .should('be.visible')
          .and('have.text', 'Interactions')
      
        cy.contains('Dragabble')
          .should('be.visible')
          .click({force:true})
      
        cy.get('.main-header')
          .should('be.visible')
          .and('have.text', 'Dragabble')
      
        cy.get('#draggableExample-tab-cursorStyle')
          .should('be.visible')
          .and('have.text', 'Cursor Style')
          .and('have.attr', 'aria-selected', 'false')
          .click({force:true})
          .should('have.attr', 'aria-selected', 'true')
      
        cy.get('#cursorCenter')
          .should('be.visible')
          .and('have.text', 'I will always stick to the center')
          .trigger('mousedown', {which:1})
          .trigger('mousemove', {force:true})
          .invoke('css', 'top', '100px')
          .invoke('css', 'left', '100px')
          .get('body')
          .invoke('css', 'cursor')
          .should('eq', 'auto').then(()=>{

            cy.get('#cursorCenter').trigger('mouseup', {force:true})

          })
                
        cy.get('#cursorTopLeft')
          .should('be.visible')
          .and('have.text', 'My cursor is at top left')
          .trigger('mousedown', {which:1})
          .trigger('mousemove', {force:true})
          .invoke('css', 'top', '100px')
          .invoke('css', 'left', '100px')
          .get('body')
          .invoke('css', 'cursor')
          .should('eq', 'auto').then(()=>{
            cy.get('#cursorTopLeft').trigger('mouseup', {force:true})
          })
          
      
        cy.get('#cursorBottom')
          .should('be.visible')
          .and('have.text', 'My cursor is at bottom')
          .trigger('mousedown', {which:1})
          .trigger('mousemove', {force:true})
          .invoke('css', 'top', '100px')
          .invoke('css', 'left', '100px')
          .get('body')
          .invoke('css', 'cursor')
          .should('eq', 'auto').then(()=>{
            cy.get('#cursorBottom').trigger('mouseup', {force:true})
          })          
      })
})