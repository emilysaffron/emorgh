/* eslint-disable no-undef */
describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
    cy.url().should("include", "/article1");

    cy.contains("Next").click();

    cy.url().should("include", "/article2");
  });
});
