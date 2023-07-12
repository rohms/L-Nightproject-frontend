describe("Navbar component", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("displays the L-Night logo and navigation links", () => {

      const navLinks = ["ABOUT", "PEOPLE", "CALENDAR", "GALLERY", "MERCH", "CONTACT"]  
      cy.get(".lnightlogo img").should("have.attr", "alt", "L-Night Berlin Group");
      navLinks.forEach((linkText, index) => {
        cy.get(".navlink").eq(index).should("have.text", linkText);
      });
    });
  
    it("opens and closes the navigation menu when clicking the menu icon on smaller screens", () => {
    cy.viewport("iphone-6");
    cy.get('[data-cy="slider"]').should("not.have.class", "active");
      cy.get('[data-cy="menu"]').click({force: true});
      cy.get('[data-cy="slider"]').should("have.class", "active");
      cy.get(".close").click({force: true});
      cy.get('[data-cy="slider"]').should("not.have.class", "active");
    });
  

    
    it("redirects to the login page when clicking the login link", () => {
      cy.get(".login-link").click();
      cy.url().location("pathname").should("equal", "/adlog");
    });

    // it("logs out the user when clicking the logout button", () => {
    //   cy.login();
    //   cy.get("#logout").click();
    //   cy.url().should("equal", "/");
    //   cy.get(".login-link").should("exist");
    // });
  
  });