describe('Demo site', ()=>{
    it('loads', ()=> {
        cy.visit('http://localhost:3000/')
        cy.contains('h1', 'This is a heading').should('be.visible')
    })
})