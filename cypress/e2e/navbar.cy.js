/* eslint-disable no-undef */
describe("Navbar Components", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  const links = ["Home", "About", "Projects"];

  context("Desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1440, 900);
    });

    it("should render the navbar", () => {
      cy.getDataTest("navbar").should("be.visible");
      cy.getDataTest("logo").should("be.visible").and("have.attr", "href", "/");
      cy.getDataTest("logo").click().url().should("eq", "http://localhost:5173/");

      links.forEach((link) => {
        cy.getDataTest(`nav-link-text-${link.toLowerCase()}`).should("be.visible").and("have.text", link);

        cy.getDataTest(`nav-link-text-${link.toLowerCase()}`).click();
        cy.url().should("eq", `http://localhost:5173/#${link}`);
      });

      cy.getDataTest("toggle-dark-mode").should("be.visible").click();
      cy.getDataTest("toggle-dark-mode").click();

      cy.getDataTest("menu-toggle").should("not.be.visible");
    });
  });

  context("iphone xr resolution", () => {
    beforeEach(() => {
      cy.viewport("iphone-xr");
    });

    it("should render the navbar", () => {
      cy.getDataTest("navbar").should("be.visible");
      cy.getDataTest("logo").should("be.visible").and("have.attr", "href", "/");
      cy.getDataTest("logo").click().url().should("eq", "http://localhost:5173/");

      links.forEach((link) => {
        cy.getDataTest(`nav-link-text-${link.toLowerCase()}`).should("not.be.visible");
      });

      cy.getDataTest("menu-toggle").should("be.visible").click();
      cy.getDataTest("mobile-menu").should("be.visible");

      cy.getDataTest("mobile-toggle-dark-mode").should("be.visible").click();
      cy.getDataTest("mobile-toggle-dark-mode").click();

      links.forEach((link) => {
        cy.getDataTest(`mobile-nav-link-text-${link.toLowerCase()}`).should("be.visible").and("have.text", link);

        cy.getDataTest(`mobile-nav-link-text-${link.toLowerCase()}`).click();
        cy.url().should("eq", `http://localhost:5173/#${link}`);
      });

      cy.getDataTest("menu-toggle").click();
    });
  });
});
