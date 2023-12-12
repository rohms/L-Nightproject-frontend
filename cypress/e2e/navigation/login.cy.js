
describe('should be able to login and logout', () => {
    beforeEach(() => {
        cy.visit("/");
    }
    )
    const mocked_user = {
        email: "test@email.com",
        password: "12345678asdf",
    }

    it("logs in the user when clicking the login button", async () => {
        // in network I see POST request to /login and GET to /adminusers
        cy.intercept("POST", /login/, {
            statusCode: 200,
            body: {
                success: true,
                token: "mocked_token",
                user: mocked_user,
            }
        }).as("loginRequest");

        cy.get(".login-link").click();
        cy.url().location("pathname").should("equal", "/adlog");
        cy.get('[data-cy="adminlogin"]').click();
        cy.get('[data-cy="login-modal"]').click();
        cy.get('[data-cy="login-modal"]').should("be.visible");
        cy.get('input[name="email"]').type(mocked_user.email)
        cy.get('input[name="password"]').type(mocked_user.password)

        cy.wait(500);

        cy.get("button[type='submit']").click();

        cy.log("Waiting for login request to complete...");
        cy.wait("@loginRequest").then((interception) => {
            cy.log('interception body', interception.response.body);
            expect(interception.response.statusCode).to.equal(200);
            expect(interception.response.body.token).to.equal("mocked_token");
            expect(interception.response.body.user).to.deep.equal(mocked_user);
        });
        cy.url().location("pathname").should("equal", "/")
        cy.contains("Login successful").should("be.visible");

        // and logout
        cy.wait(500);
        cy.get('#logout').click();
    })

    it("shows an error message when logging in with incorrect email or password", () => {
        cy.intercept("POST", /login/, {
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

        cy.wait("@loginerrorRequest").then((interception) => {
            expect(interception.response.statusCode).to.equal(400);
            cy.log(interception.response.body.error);
        });

        cy.contains("Password or email is incorrect").should("be.visible");
    });
})