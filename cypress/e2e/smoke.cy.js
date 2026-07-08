/* eslint-disable no-undef */
// Whole-page smoke test: the app must mount and render every section across
// viewports without throwing runtime errors or logging console errors.
describe("Page smoke test", () => {
  const SECTIONS = ["#home", "#about", "#techstack", "#projects"];

  const visitWithConsoleSpy = () => {
    cy.visit("/", {
      onBeforeLoad(win) {
        cy.spy(win.console, "error").as("consoleError");
      },
    });
  };

  // Cypress fails the test automatically on any uncaught exception, so simply
  // driving the page below doubles as a runtime-error guard.
  it("mounts and renders all sections on desktop", () => {
    cy.viewport(1440, 900);
    visitWithConsoleSpy();

    cy.get("#root").should("not.be.empty");
    cy.getDataTest("navbar").should("be.visible");
    SECTIONS.forEach((section) => {
      cy.get(section).should("exist");
    });
    cy.getDataTest("footer").should("exist");

    cy.get("@consoleError").should("not.have.been.called");
  });

  it("mounts and renders all sections on mobile", () => {
    cy.viewport("iphone-xr");
    visitWithConsoleSpy();

    cy.get("#root").should("not.be.empty");
    cy.getDataTest("navbar").should("be.visible");
    SECTIONS.forEach((section) => {
      cy.get(section).should("exist");
    });

    cy.get("@consoleError").should("not.have.been.called");
  });

  it("lets a visitor scroll from top to footer", () => {
    cy.viewport(1440, 900);
    cy.visit("/");
    cy.getDataTest("footer").scrollIntoView().should("be.visible");
    cy.window().its("scrollY").should("be.greaterThan", 0);
  });
});
