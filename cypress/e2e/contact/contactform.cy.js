

describe("ContactForm", () => {
  beforeEach(() => {
    cy.visit("/contact");
  });

  it("should display the contact form", () => {
    cy.get("form").should("exist");
    cy.get("input[name='name']").should("exist");
    cy.get("input[name='email']").should("exist");
    cy.get("input[name='subject']").should("exist");
    cy.get("textarea[name='message']").should("exist");
    cy.get("button[type='submit']").should("exist");
  });

  it("should display an error message if a required field is empty", () => {
    cy.get("form").submit();
    cy.contains("Please fill in all the fields").should("exist");
  });

  it("should display a success message if the email is sent successfully", () => {

    cy.get("input[name='name']").type("John Doe");
    cy.get("input[name='email']").type("johndoe@example.com");
    cy.get("input[name='subject']").type("Test email");
    cy.get("textarea[name='message']").type("This is a test email");
    cy.get('[data-cy="submit-button"]').should("be.visible");

    // intercepting post request to friendlycaptcha
    // https://api.friendlycaptcha.com/api/v1/siteverify
    cy.intercept("POST", 'https://api.friendlycaptcha.com/api/v1/siteverify', (req) => {
      req.reply((res) => {
        res.send({ success: true })
        const response = res.body;
        cy.log('response', response);
      });
    }).as("verifyCaptcha");
    cy.get('button.frc-button').click();

    cy.wait('@verifyCaptcha').then((interception) => {
      const response = interception.response;
      cy.log('response', response);
    })
    // cy.wait("@verifyCaptcha", { timeout: 10000 }).then((interception) => {
    //   expect(interception.response.statusCode).to.equal(200);
    //   expect(interception.response.body.success).to.equal(true);
    // })


    // intercepting post request to emailjs
    cy.intercept("POST", 'https://api.emailjs.com/api/v1.0/email/send', (req) => {
      req.reply((res) => {
        res.send({ success: true })
      })
    }).as("sendEmail");


    // cy.get('[data-cy="submit-button"]').click({ force: true });
    // cy.wait("@sendEmail", {timeout: 10000}).then((interception) => {
    //   expect(interception.response.statusCode).to.equal(200);
    //   expect(interception.response.body.success).to.equal(true);
    // })
    cy.contains("Email was sent!").should("exist");
  });

  // it("should display an error message if the email fails to send", () => {
  //   cy.intercept("POST", /.*emailjs.*/, (req) => {
  //     req.reply((res) => {
  //       res.send({ success: false })
  //     })
  //   }).as("sendEmail").andThrow(new Error("Failed to send email"));
  //   cy.get("input[name='name']").type("John Doe");
  //   cy.get("input[name='email']").type("johndoe@example.com");
  //   cy.get("input[name='subject']").type("Test email");
  //   cy.get("textarea[name='message']").type("This is a test email");
  //   cy.get('[data-cy="submit-button"]').should("be.visible");
  //   cy.get('[data-cy="submit-button"]').click({ force: true });
  //   cy.wait("@sendEmail", {timeout: 10000}).then((interception) => {
  //     expect(interception.response.statusCode).to.equal(400);
  //     expect(interception.response.body.success).to.equal(false);
  //   })
  //   // cy.get('[data-cy="friendly-captcha"]').should('be.visible')
  //   // cy.get('[data-cy="friendly-captcha"]').click();
  //   cy.contains("Failed to send email").should("exist");
  // });


});