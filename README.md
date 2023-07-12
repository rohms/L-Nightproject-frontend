# L-Nightproject

![lnightnew](https://github.com/rohms/L-Nightproject-frontend/assets/86847314/e042abd2-4c56-4959-9e7d-67b3a6aa3a16)


The front end of the L-Night project

This is the L-Night project I created as my final project at WBS Coding school.

For this full-stack app I used the following stack:

For the front-end: 

ReactJS and MUI, for the email contact form EmailJS with friendly capctha.
For the Calendar I used React Calendar, the events are stored at the moment in MongoDB but eventually the events would come from a google calendar.
Using Formik and Yup for form validation. React toastify for beautiful toasts. Using axios for fetching data. React createcontext for auth and calendar.
Using Lightbox for the image gallery together with react-grid-gallery.

For the backend I used Express, MongoDB and for the gallery pictures AWS S3 bucket, I want to modify this so that CloudFront which was setup to serve S3 bucket can serve also multiple pictures. So when an user uploads an image you would get to see it directly in the gallery.
For the authentication which is only for admins I used JWT.

I will extend this project and add a merchandise store which I would create using Shopify and possibly Printify.
Here the app: https://www.l-night.com/
