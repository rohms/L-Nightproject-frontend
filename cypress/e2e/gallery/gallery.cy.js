describe("GridGallery", () => {
    it("should display the gallery images and allow the user to click on them", () => {
      cy.visit("/gallery");
      cy.get(".Gallerypicscontainer").should("be.visible");
    //   cy.get(".react-grid-gallery").should("be.visible");
    //   cy.get(".react-grid-gallery-image").first().click();
    //   cy.get(".fslightbox-container").should("be.visible");
    //   cy.get(".fslightbox-source-current").should("have.attr", "src");
    });
  
    it("should display the image upload form if the user is logged in", () => {
      // this login doesn't seem to work yet
      cy.loginAsAdmin();
      cy.wait(2000);
      cy.visit("/gallery");
      
      // TODO: need to fix why Cypress cannot find the element
      cy.get('[data-cy="image-upload-form"]').should("be.visible");
    });
  
    it("should not display the image upload form if the user is not logged in", () => {
      cy.visit("/gallery");
      cy.get('[data-cy="image-upload-form"]').should("not.exist");
    });
  });