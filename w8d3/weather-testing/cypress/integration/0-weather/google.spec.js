/// <reference types="cypress" />

describe("Check if google search works", () => {
  it("should return wormhole for search query", () => {
    cy.visit("https://google.com");

    cy.get(".gLFyf").type("Einstein-Rosen Bridge{enter}");

    cy.get(
      ":nth-child(1) > .MjjYud > .g > .kvH3mc > .jGGQ5e > .yuRUbf > a > .LC20lb"
    ).should("contain.text", "Wormhole");
  });
});
