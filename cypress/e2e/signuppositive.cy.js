
  describe('empty spec', () => {

    beforeEach(() => {

      cy.visit("http://localhost:3000");
    });

    it('passes', () => {
        cy.get("#signuplink").click()
        cy.get("#signup-email").type('test7@gmail.com')
        cy.get("#signup-pass").type('test77')
        cy.get("#signupbutton").click()
    })
})