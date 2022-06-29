describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("without entering any details", () => {
    cy.get("#signinbutton").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("required feilds");
    });
  });
  it("with incorrect email format", () => {
    cy.get("#input-email").type("test.com");
    cy.get("#signinbutton").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("required feilds");
    });
  });
  it("with password less than 6 char", () => {
    cy.get("#input-email").type("test");
    cy.get("#input-pass").type("123");
    cy.get("#signinbutton").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("Password must be of 6 characters");
    });
  });
});
