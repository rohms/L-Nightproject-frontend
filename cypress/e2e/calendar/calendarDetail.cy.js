const events = [
  {
    _id: "5f9d5b3b9d9b4a0017b0b0a1",
    eventname: "L-night Halloween",
    location: "A Bar in Berlin",
    description: "Today meeting for Halloween",
  },
  {
    _id: "5f9d5b3b9d9b4a0017b0b0a2",
    eventname: "L-night Christmas",
    location: "Kulturbrauerei in Berlin",
    description: "Meeting for Christmas drinks",
  },
]

describe("CalendarDetail page", () => {
  beforeEach(() => {
    cy.visit("/calendar");
  });

  it("Fetching the API, replacing response with my FakeData and assertion", async () => {
    // intercept needs URL in URL encoded format, using just /events
    cy.intercept("GET", "/events", { fixture: "events.json" }).as("getEvents");
    cy.wait("@getEvents").then((intercept) => {
      const response = intercept.response.body;
      cy.wrap(response).should('have.length', 3).each((event) => {
        expect(event.eventname).to.include("Event");
        expect(event.location).to.include("Location");
      })
    });
  });


  it("displays the events in the box with fake data", () => {
    cy.fixture('events.json').then((events) => {
      let currentDate = new Date();
      currentDate.setHours(13, 0, 0, 0);
      events[0].start_time = currentDate.toISOString();
      cy.wrap(events).as("fakeEvents");
    })


    cy.get('@fakeEvents').then((events) => {
      cy.intercept('GET', '/events', events).as('getEvents');
      cy.visit('/calendar');
      cy.wait("@getEvents")

      cy.log(events[0].start_time);
      cy.log(events[1].start_time);
      cy.log(events[2].start_time);
      cy.wrap(events).should("have.length", 3);

      const mycurrentDate = new Date().getDate();
      cy.contains('.react-calendar__tile', mycurrentDate).click();
      cy.get("[data-cy='eventName']").should("contain", events[0].eventname);
      cy.get("[data-cy='eventLocation']").should("contain", events[0].location);
      cy.get("[data-cy='eventDescription']").should("contain", events[0].description);
    });
  });


  it("displays a unicorn image when there are no events", () => {
    cy.intercept("GET", "/events", []).as("getUnicornEvents");
    cy.visit("/calendar");
    cy.wait("@getUnicornEvents");
    cy.get("[data-cy='unicorn']").should("be.visible");
  });
});