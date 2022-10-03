describe('Demo site', ()=>{
    it('loads', ()=> {
        cy.visit('/')
        cy.contains('h1', 'This is a heading').should('be.visible')
    })
})