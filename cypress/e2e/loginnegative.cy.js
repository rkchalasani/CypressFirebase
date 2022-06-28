
  describe('empty spec', () => {

      beforeEach(() => {
  
        cy.visit("http://localhost:3000");
      });

      it('passes', () => {
        // cy.visit("http://localhost:3000");
        cy.get("#input-email").type("test2@gmail.com");
        cy.get("#input-pass").type("test123");
        cy.get("#signinbutton").click();
        // cy.get("#useremail").contains("test@gmail.com");
        // cy.get("#logoutbutton").click();
      })
  })