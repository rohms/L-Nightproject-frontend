


describe("Hosts component", () => {
   beforeEach(() => {
      cy.visit("/people");
      // cy.fixture("placeholder.jpg").as("placeholder");
      cy.fixture("hosts.json").then((data) => {
        data.forEach((host) => {
          host.imgSrc = `https://example.com/${host.imgSrc}`;
      })
      cy.wrap(data).as("hosts");
    });
   })
    it("displays all hosts with their avatars and names", () => {
    
      cy.get(".allavatarcontainer").should("exist");
      cy.get('@hosts').then((hosts) => {
        cy.get(".personcontainer").should("have.length", hosts.length);
  
        cy.get(".personcontainer").each(($el, index) => {
          cy.wrap($el)
            .find("label")
            .should("have.text", hosts[index].name);
    

          
            // need to check this part, doesn't go furter than be visble
            cy.get(".avatar").should("be.visible").each(($el) => {
              cy.fixture("placeholder.jpg").then((placeholder) => {
                let fixtureImage = new Image();
                fixtureImage.src = `data:image/jpeg;base64,${placeholder}`;
                
                fixtureImage.onload = () => {
                  cy.wrap($el)
                    .find("img")
                    .should("have.attr", "src", fixtureImage.src)
                    .then(() => {
                      expect($el.find("img")[0].naturalWidth).to.be.greaterThan(0);
                      expect($el.find("img")[0].naturalHeight).to.be.greaterThan(0);
                    });
                };
              });
            });
          });
        });
      });
    });