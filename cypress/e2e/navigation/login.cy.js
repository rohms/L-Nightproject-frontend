
describe('should be able to login and logout', () => {
    beforeEach(() => {
        cy.visit("/");
      }
    )
    const mocked_user = {
        email: "test@email.com",
        password: "12345678",
    }

    // it("redirects to the login page when clicking the login link", () => {
    //     cy.get(".login-link").click();
    //     cy.url().location("pathname").should("equal", "/adlog");
    //   });

    // it("logs in the user when clicking the login button", async () => {
      
    //     // intercept seems to work now
    //     cy.intercept("POST", "/\adminusers.*/", (req) => {
    //         console.log("Intercepting login request...");
    //         req.reply({
    //             statusCode: 200,
    //             body: {
    //                 token: "mocked_token",
    //                 user: mocked_user,
    //             },
    //         });
    //     }).as("login-request")
    //     cy.get(".login-link").click();
    //     cy.url().location("pathname").should("include", "/adlog");
    //     cy.get('[data-cy="adminlogin"]').click();
    //     cy.get('[data-cy="login-modal"]').click();
    //     cy.get('[data-cy="login-modal"]').should("be.visible");
    //     cy.get('input[name="email"]').type(mocked_user.email)
    //     cy.get('input[name="password"]').type(mocked_user.password)
    //     cy.get('[data-cy="login-modal"]').submit();

    //     console.log("Waiting for login request to complete...");
    //     await cy.wait("@login-request").then((interception) => {
    //         console.log(interception.response.body);
    //         expect(interception.response.statusCode).to.equal(200);
    //         expect(interception.response.body.token).to.equal("mocked_token");
    //         expect(interception.response.body.user).to.deep.equal(mocked_user);
    //     });
    //     cy.url().location("pathname").should("equal", "/")
    // })

    it("shows an error message when logging in with incorrect email or password", () => {
      
        cy.intercept("POST", "/\adminusers.*/", {
            statusCode: 400,
            body: {
                token: "mocked_token",
                user: mocked_user,
                }
        }).as("loginerrorRequest")
      
        cy.get(".login-link").click();
        cy.url().location("pathname").should("equal", "/adlog");
        cy.get('[data-cy="adminlogin"]').click();
        cy.get('[data-cy="login-modal"]').should("be.visible");
        cy.get('input[name="email"]').type("wrong_email@example.com");
        cy.get('input[name="password"]').type("wrong_password");
        cy.get('[data-cy="login-modal"]').submit();
      
        // cy.wait("@loginerrorRequest").then((interception) => {
        //   expect(interception.response.statusCode).to.equal(400);
        //   expect(interception.response.body.error).to.equal("Invalid email or password");
        // });
      
        cy.contains("Invalid email or password").should("be.visible");
      });
})