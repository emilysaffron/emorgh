/* eslint-disable no-undef */
describe("First Article", () => {
  it("successfully loads", () => {
    cy.visit("/");
    cy.url().should("include", "/article1");
  });
});

describe("Second Article", () => {
  it("successfully loads", () => {
    cy.contains("Next").click();
    cy.url().should("include", "/article2");
  });

  it("successfully goes back and forth", () => {
    cy.contains("Previous").click();
    cy.url().should("include", "/article1");
    cy.contains("Next").click();
    cy.url().should("include", "/article2");
  });
});

describe("Third Article", () => {
  it("successfully loads", () => {
    cy.contains("Next").click();
    cy.url().should("include", "/article3");
  });

  it("successfully goes back and forth", () => {
    cy.contains("Previous").click();
    cy.url().should("include", "/article2");
    cy.contains("Next").click();
    cy.url().should("include", "/article3");
  });
});

describe("Fourth Article", () => {
  it("successfully loads", () => {
    cy.contains("Next").click();
    cy.url().should("include", "/article4");
  });

  it("successfully goes back and forth", () => {
    cy.contains("Previous").click();
    cy.url().should("include", "/article3");
    cy.contains("Next").click();
    cy.url().should("include", "/article4");
  });
});

describe("Fith Article", () => {
  it("successfully loads", () => {
    cy.contains("Next").click();
    cy.url().should("include", "/article5");
  });

  it("successfully goes back and forth", () => {
    cy.contains("Previous").click();
    cy.url().should("include", "/article4");
    cy.contains("Next").click();
    cy.url().should("include", "/article5");
  });
});
