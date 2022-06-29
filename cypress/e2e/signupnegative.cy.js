describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("without entering any details", () => {
    cy.get("#signuplink").click();
    cy.get("#signupbutton").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("required feilds");
    });
  });
  it("with incorrect email format", () => {
    cy.get("#signuplink").click();
    cy.get("#signup-email").type("test");
    cy.get("#signupbutton").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("required feilds");
    });
  });
  it("with password less than 6 char", () => {
    cy.get("#signuplink").click();
    cy.get("#signup-email").type("test");
    cy.get("#signup-pass").type("123");
    cy.get("#signupbutton").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("Password must be of 6 characters");
    });
  });
});
