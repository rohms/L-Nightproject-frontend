Cypress.Commands.add('loginAsAdmin', () => {
    const mocked_user = {
        email: "test@email.com",
        password: "12345678",
    }

    it("logs in the user when clicking the login button", async () => {
        // intercept seems to work now
        cy.intercept("POST", "/\adminusers.*/", (req) => {
            console.log("Intercepting login request...");
            req.reply({
                statusCode: 200,
                body: {
                    token: "mocked_token",
                    user: mocked_user,
                },
            });
        }).as("login-request")
        cy.get(".login-link").click();
        cy.url().location("pathname").should("include", "/adlog");
        cy.get('[data-cy="adminlogin"]').click();
        cy.get('[data-cy="login-modal"]').click();
        cy.get('[data-cy="login-modal"]').should("be.visible");
        cy.get('input[name="email"]').type(mocked_user.email)
        cy.get('input[name="password"]').type(mocked_user.password)
        cy.get('[data-cy="login-modal"]').submit();

        console.log("Waiting for login request to complete...");
        await cy.wait("@login-request").then((interception) => {
            console.log(interception.response.body);
            expect(interception.response.statusCode).to.equal(200);
            expect(interception.response.body.token).to.equal("mocked_token");
            expect(interception.response.body.user).to.deep.equal(mocked_user);
        });
        cy.url().location("pathname").should("equal", "/")
    })
})