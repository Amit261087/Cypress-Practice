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
})