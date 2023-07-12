
const eventsURL = process.env.REACT_APP_BASE_URL + "/events";

const events = [
    {
      _id: "5f9d5b3b9d9b4a0017b0b0a1",
      eventname: "L-night",
      location: "L-night",
      description: "L-night",
    },
    {
      _id: "5f9d5b3b9d9b4a0017b0b0a2",
      eventname: "asdasd",
      location: "Berlint",
      description: "Laaalllaa",
    },
]


describe("CalendarDetail page", () => {
    beforeEach(() => {
      cy.visit("/calendar");
      cy.fixture("events.json").as("myevents");
    });
  
    it("displays event details", async () => {
        // intercept the API call to get events
        cy.intercept({
          method: "GET",
          url: eventsURL,
          }, (req) => {
          console.log("Intercepting events request...");
          req.reply({
            statusCode: 200,
            body: {
              events: "@myevents",
            },
          });
        }).as("getEvents");

      // there is some weird issue with the alias
     await cy.wait("@getEvents").then((intercept) => {
        const events = intercept.response.body.events;
        events.forEach((myEvent) => {
          const eventName = myEvent.eventname;
          const eventLocation = myEvent.location;
          const eventDescription = myEvent.description;
          cy.get("[data-cy='eventName']").should("contain", eventName);
          cy.get("[data-cy='eventLocation']").should("contain", eventLocation);
          cy.get("[data-cy='eventDescription']").should("contain", eventDescription);
        })
      });
    });
  
  
    // it("displays a unicorn image when there are no events", async () => {
    //   const events = await cy.get("@events");
    //   if (!events) {
    //     cy.get("[data-cy='unicorn']").should("exist");
    //   }
    // });
  });