describe('empty spec', () => {
  it('passes', () => {
    cy.visit("http://localhost:3000/");
    // cy.get(".underline").click();
    // cy.get("#signupemail").type("abcd@abcd.com");
    // cy.get("#signuppass").type("123456");
    // cy.get("#signup").click();
    // cy.get('#signin').click();
    cy.get("#input-email").type("abcd@abcd.com");
    cy.get("#input-pass").type("123456");
    cy.get("#signinbutton").click();
    cy.get("#useremail").contains("abcd@abcd.com");
    cy.get("#logoutbutton").click();
  })
})