import { gapi } from "gapi-script";

export const getGoogleCalendarEvents = async () => {
  const calendarID = process.env.REACT_APP_GOOGLE_CALENDAR_ID;
  const apikey = process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY;
  const accessToken = process.env.REACT_APP_GOOGLE_CALENDAR_ACCESS_TOKEN;

  function initiate() {
    gapi.client
      .init({
        apiKey: apikey,
      })

      .then(function () {
        return gapi.client.request({
          path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
        });
      })

      .then(
        (response) => {
          let events = response.result.items;
          // console.log("google calendar events", events);
          return events;
        },
        function (err) {
          // console.log("error", err.result);
          return [false, err];
        }
      );
  }
  gapi.load("client", initiate);
};
