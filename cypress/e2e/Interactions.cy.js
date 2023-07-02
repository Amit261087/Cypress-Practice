describe('Interactions', function(){
    it('Sortable - List Tab', function(){
        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com')
        cy.contains('Interactions')
            .should('be.visible')
            .click()
      
        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Interactions')
          
        cy.contains('Sortable')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Sortable')

        cy.get('#demo-tab-list')
            .should('be.visible')
            .and('have.text', 'List')
            .and('have.attr', 'aria-selected', 'true')

        cy.get('#demo-tab-grid')
            .should('be.visible')
            .and('have.text', 'Grid')
            .and('have.attr', 'aria-selected', 'false')

        

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
    
    })


    it('Sortable - Grid Tab', function(){
        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com')
        cy.contains('Interactions')
            .should('be.visible')
            .click()
      
        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Interactions')
          
        cy.contains('Sortable')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Sortable')

        cy.get('#demo-tab-grid')
            .should('be.visible')
            .and('have.text', 'Grid')
            .click()
            .should('have.attr', 'aria-selected', 'true')

        cy.get('#demo-tab-list')
            .should('be.visible')
            .and('have.text', 'List')
            .and('have.attr', 'aria-selected', 'false')

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
    
    })

    it('Selectable - List', function(){
        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com/')

        cy.contains('Interactions')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Interactions')

        cy.contains('Selectable')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Selectable')

        cy.get('#demo-tab-list')
            .should('be.visible')
            .and('have.text', 'List')
            .and('have.attr', 'aria-selected', 'true')

        cy.get('#demo-tab-grid')
            .should('be.visible')
            .and('have.text', 'Grid')
            .and('have.attr', 'aria-selected', 'false')

        cy.get('.mt-2.list-group-item.list-group-item-action')
            .each(($el, index, $list)=>{
                const text = $el.text()
                if(text == 'Morbi leo risus'){
                    cy.get('.mt-2.list-group-item.list-group-item-action').eq(index).click()
                        .should('have.class', 'mt-2 list-group-item active list-group-item-action')
                }
            })
    })

    it('Selectable - Grid', function(){
        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com/')

        cy.contains('Interactions')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Interactions')

        cy.contains('Selectable')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Selectable')

        cy.get('#demo-tab-grid')
            .should('be.visible')
            .click()
            .should('have.text', 'Grid')
            .and('have.attr', 'aria-selected', 'true')

        cy.get('#demo-tab-list')
            .should('be.visible')
            .and('have.text', 'List')
            .and('have.attr', 'aria-selected', 'false')

        cy.get('.list-group-item.list-group-item-action')
            .each(($el, index, $list)=>{
                const text = $el.text()
                if(text == 'Six'){
                    cy.get('.list-group-item.list-group-item-action').eq(index).click()
                        .should('have.class', 'list-group-item active list-group-item-action')
                }
            })
    })

    it('Resizable', function(){
        cy.on('uncaught:exception', ()=>false)
        cy.visit('https://demoqa.com/')

        cy.contains('Interactions')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Interactions')

        cy.contains('Resizable')
            .should('be.visible')
            .click()

        cy.get('.main-header')
            .should('be.visible')
            .and('have.text', 'Resizable')

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