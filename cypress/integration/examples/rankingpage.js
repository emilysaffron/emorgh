/* eslint-disable no-undef */
describe("Ranking Page Loads", () => {
  it("successfully loads", () => {
    cy.visit("/");
    cy.contains("Rate the Articles").click();
    cy.url().should("include", "/rate");
  });
});
