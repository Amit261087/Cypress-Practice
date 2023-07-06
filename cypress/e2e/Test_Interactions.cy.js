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

    it('Resizable', function(){

        Interaction.verifyHomePageHeaderText();
        Interaction.clickInteractions();
        Interaction.verifyInteractionsHeaderText();
        Interaction.clickResizable();
        Interaction.verifyResizableHeaderText();
        Interaction.performResizable();

    })

    it('Droppable - Simple', function(){

        Interaction.verifyHomePageHeaderText();
        Interaction.clickInteractions();
        Interaction.verifyInteractionsHeaderText();
        Interaction.clickDroppable();
        Interaction.verifyDroppableHeaderText();
        Interaction.performSimpleDroppable();             

    })

    it('Droppable - Accept - Acceptable', function(){

        Interaction.verifyHomePageHeaderText();
        Interaction.clickInteractions();
        Interaction.verifyInteractionsHeaderText();
        Interaction.clickDroppable();
        Interaction.verifyDroppableHeaderText();
        Interaction.performDroppableAccept();       
        
    })

    it('Droppable - Accept - Not Acceptable', function(){

        Interaction.verifyHomePageHeaderText();
        Interaction.clickInteractions();
        Interaction.verifyInteractionsHeaderText();
        Interaction.clickDroppable();
        Interaction.verifyDroppableHeaderText();
        Interaction.performDroppableNotAccept();        
        
    })

    it('Droppable - Prevent Propogation - Not Greedy - Inner Box', function(){
        
        Interaction.verifyHomePageHeaderText();
        Interaction.clickInteractions();
        Interaction.verifyInteractionsHeaderText();
        Interaction.clickDroppable();
        Interaction.verifyDroppableHeaderText();
        Interaction.performDroppableNotGreedyInnerBox();

    })

    it('Droppable - Prevent Propogation - Not Greedy - Outer Box', function(){

        Interaction.verifyHomePageHeaderText();
        Interaction.clickInteractions();
        Interaction.verifyInteractionsHeaderText();
        Interaction.clickDroppable();
        Interaction.verifyDroppableHeaderText();
        Interaction.performDroppableNotGReedyOuterBox();
        
    })

    it('Droppable - Prevent Propogation - Greedy - Inner Box', function(){
        
        Interaction.verifyHomePageHeaderText();
        Interaction.clickInteractions();
        Interaction.verifyInteractionsHeaderText();
        Interaction.clickDroppable();
        Interaction.verifyDroppableHeaderText();
        Interaction.performDroppableGreedyInnerBox();
        
    })

    it('Droppable - Prevent Propogation - Greedy - Outer Box', function(){

        Interaction.verifyHomePageHeaderText();
        Interaction.clickInteractions();
        Interaction.verifyInteractionsHeaderText();
        Interaction.clickDroppable();
        Interaction.verifyDroppableHeaderText();
        Interaction.performDroppableGreedyOuterBox();
        
    })

    it('Droppable - Revert Draggable - Will Revert', function(){

        Interaction.verifyHomePageHeaderText();
        Interaction.clickInteractions();
        Interaction.verifyInteractionsHeaderText();
        Interaction.clickDroppable();
        Interaction.verifyDroppableHeaderText();
        Interaction.performDraggableWillRevert();
        
    })

    it('Droppable - Revert Draggable - Will Not Revert', function(){

        Interaction.verifyHomePageHeaderText();
        Interaction.clickInteractions();
        Interaction.verifyInteractionsHeaderText();
        Interaction.clickDroppable();
        Interaction.verifyDroppableHeaderText();
        Interaction.performDraggableWillNotRevert();
              
    })

    it('Draggable - Simple', function(){
        
        Interaction.verifyHomePageHeaderText();
        Interaction.clickInteractions();
        Interaction.clickDraggable();
        Interaction.verifyDraggableHeaderText();
        Interaction.performDraggableSimple();
        
    })

    it('Dragabble - Axis Restricted', function(){

        Interaction.verifyHomePageHeaderText();
        Interaction.clickInteractions();
        Interaction.clickDraggable();
        Interaction.verifyDraggableHeaderText();
        Interaction.performDraggableAxisRestricted();

    })

    it('Dragabble - Container Restricted', function(){

        Interaction.verifyHomePageHeaderText();
        Interaction.clickInteractions();
        Interaction.clickDraggable();
        Interaction.verifyDraggableHeaderText();
        Interaction.performDraggableContainerRestricted();        
        
    })

    it('Dragabble - Cursor Style', function(){

        Interaction.verifyHomePageHeaderText();
        Interaction.clickInteractions();
        Interaction.clickDraggable();
        Interaction.verifyDraggableHeaderText();
        Interaction.performCursorStyle();     
                  
    })
})