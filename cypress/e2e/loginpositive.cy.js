describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.get("#input-email").type("test@gmail.com");
    cy.get("#input-pass").type("test123");
    cy.get("#signinbutton").click();
    cy.get("#useremail").contains("test@gmail.com");
    cy.get("#logoutbutton").click();
  });
});
