describe('Demo site', ()=>{
    it('loads', ()=> {
        cy.visit('/')
        // change this to cy.visit('http://localhost:3000) for running it locally 
        cy.contains('h1', 'This is a heading').should('be.visible')
    })
})