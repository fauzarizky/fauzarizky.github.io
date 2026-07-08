/* eslint-disable no-undef */
// Navigation bar: logo, section links (smooth-scroll, no hash change),
// theme toggle, and the responsive mobile menu.
describe("Navbar", () => {
  const LINKS = ["home", "about", "projects"];

  beforeEach(() => {
    cy.visit("/");
  });

  context("Desktop (1440x900)", () => {
    beforeEach(() => {
      cy.viewport(1440, 900);
    });

    it("renders the navbar with a working logo", () => {
      cy.getDataTest("navbar").should("be.visible");
      cy.getDataTest("logo").should("be.visible").and("have.text", "rzky()").and("have.attr", "href", "#home");
    });

    it("shows every desktop nav link and hides the mobile menu toggle", () => {
      LINKS.forEach((link) => {
        cy.getDataTest(`nav-link-${link}`)
          .should("be.visible")
          .and("have.attr", "href", `#${link}`);
      });
      cy.getDataTest("menu-toggle").should("not.be.visible");
    });

    it("smooth-scrolls to a section without changing the URL hash", () => {
      cy.window().its("scrollY").should("eq", 0);

      cy.getDataTest("nav-link-projects").click();
      cy.window().its("scrollY").should("be.greaterThan", 100);
      // handleNavClick calls preventDefault, so the hash must NOT change.
      cy.location("hash").should("eq", "");

      cy.getDataTest("nav-link-home").click();
      cy.window().its("scrollY").should("be.lessThan", 100);
    });

    it("toggles the color theme back and forth", () => {
      cy.get("html").then(($html) => {
        const startedDark = $html.hasClass("dark");

        cy.getDataTest("toggle-theme").should("be.visible").click();
        cy.get("html").should(startedDark ? "not.have.class" : "have.class", "dark");

        cy.getDataTest("toggle-theme").click();
        cy.get("html").should(startedDark ? "have.class" : "not.have.class", "dark");
      });
    });
  });

  context("Mobile (iphone-xr)", () => {
    beforeEach(() => {
      cy.viewport("iphone-xr");
    });

    it("hides desktop links and reveals the hamburger toggle", () => {
      LINKS.forEach((link) => {
        cy.getDataTest(`nav-link-${link}`).should("not.be.visible");
      });
      cy.getDataTest("menu-toggle").should("be.visible");
      cy.getDataTest("mobile-menu").should("not.exist");
    });

    it("opens and closes the mobile menu", () => {
      cy.getDataTest("menu-toggle").click();
      cy.getDataTest("mobile-menu").should("be.visible");

      LINKS.forEach((link) => {
        cy.getDataTest(`mobile-nav-link-${link}`)
          .should("be.visible")
          .and("have.attr", "href", `#${link}`);
      });

      // Re-tapping the toggle collapses the menu.
      cy.getDataTest("menu-toggle").click();
      cy.getDataTest("mobile-menu").should("not.exist");
    });

    it("toggles the theme from inside the mobile menu", () => {
      cy.getDataTest("menu-toggle").click();
      cy.get("html").then(($html) => {
        const startedDark = $html.hasClass("dark");
        cy.getDataTest("mobile-toggle-theme").should("be.visible").click();
        cy.get("html").should(startedDark ? "not.have.class" : "have.class", "dark");
      });
    });

    it("closes the menu and scrolls when a mobile link is tapped", () => {
      cy.getDataTest("menu-toggle").click();
      cy.getDataTest("mobile-nav-link-projects").click();

      // Menu collapses on navigation and the page scrolls to the section.
      cy.getDataTest("mobile-menu").should("not.exist");
      cy.window().its("scrollY").should("be.greaterThan", 100);
      cy.location("hash").should("eq", "");
    });
  });
});
