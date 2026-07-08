/* eslint-disable no-undef */
// Content sections a visitor scrolls through: Home hero, About, Tech Stack,
// Projects, and the Footer. Verifies content renders and outbound links are safe.
describe("Content sections", () => {
  const SOCIALS = {
    linkedin: "https://www.linkedin.com/in/fauzarizky/",
    github: "https://github.com/fauzarizky",
    behance: "https://behance.net/fauzarizky",
  };

  const assertExternalLink = (selector, expectedHref) => {
    cy.getDataTest(selector)
      .should("be.visible")
      .and("have.attr", "href", expectedHref)
      .and("have.attr", "target", "_blank")
      .and("have.attr", "rel")
      .and("include", "noopener");
  };

  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("/");
  });

  context("Home hero", () => {
    it("renders the headline and profile picture", () => {
      cy.get("#home").should("be.visible");
      cy.get("#home").contains("h1", "Fauza").should("be.visible");
      cy.getDataTest("profile-pic").should("be.visible").and("have.attr", "alt", "Fauza");
    });

    it("exposes safe outbound social links", () => {
      Object.entries(SOCIALS).forEach(([name, href]) => {
        assertExternalLink(`home-social-${name}`, href);
      });
    });
  });

  context("About", () => {
    it("renders the background copy and education entries", () => {
      cy.get("#about").should("be.visible");
      cy.get("#about").contains("h2", "Background").should("be.visible");
      cy.get("#about").contains("h2", "Education").should("be.visible");
      cy.getDataTest("education-item").should("have.length.at.least", 3);
    });
  });

  context("Tech Stack", () => {
    it("renders grouped technology chips", () => {
      cy.get("#techstack").should("be.visible");
      ["Frontend", "Backend", "Tools & Design"].forEach((group) => {
        cy.get("#techstack").contains("h2", group).should("be.visible");
      });
      cy.getDataTest("tech-group").should("have.length", 3);
      cy.getDataTest("tech-item").should("have.length.at.least", 1);
    });
  });

  context("Projects", () => {
    it("lists projects as safe outbound links with images", () => {
      cy.get("#projects").should("be.visible");
      cy.getDataTest("project-card").should("have.length.at.least", 1);

      cy.getDataTest("project-card").each(($card) => {
        cy.wrap($card)
          .should("have.attr", "href")
          .and("match", /^https?:\/\//);
        cy.wrap($card).should("have.attr", "target", "_blank");
        cy.wrap($card).should("have.attr", "rel").and("include", "noopener");
        cy.wrap($card).find("img").should("have.attr", "src").and("not.be.empty");
        cy.wrap($card).find("h3").should("not.be.empty");
      });
    });
  });

  context("Footer", () => {
    it("renders the call-to-action and outbound social links", () => {
      cy.getDataTest("footer").scrollIntoView().should("be.visible");
      cy.getDataTest("footer").contains("Let's build something.").should("be.visible");
      Object.entries(SOCIALS).forEach(([name, href]) => {
        assertExternalLink(`footer-social-${name}`, href);
      });
      cy.getDataTest("footer").contains(/©\s*2026\s*Fauza Rizky/).should("be.visible");
    });
  });
});
