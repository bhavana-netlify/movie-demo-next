describe('Demo site', ()=>{
    it('loads', ()=> {
        cy.visit('/')
        cy.contains('#w-full text-4xl text-center').should('be.visible')
    })
})