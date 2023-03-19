- make the email work with Mailtrap and contact@l-night.com
- pictures from the AWS bucket or an free alternative to the gallery !!!
- create google calendar where you put the l-night events in and fetch them via google calendar api to the react calendar
- merch with shopify??? printify??
- complete migration from Heroku to Railways there was a bug in deploy via Railway before !!!!
- see if MongoDBis still active for the admin user and try to see the login
[x] fix formik on the login form check with: https://medium.com/how-to-react/create-a-login-form-using-formik-in-react-js-240428a2f480
- [] check if the major update of jsonwebtoken broke something in login when backend is back:
https://github.com/auth0/node-jsonwebtoken/wiki/Migration-Notes:-v8-to-v9

- [x] unused friendlycaptcha function https://github.com/FriendlyCaptcha/friendly-captcha-examples/blob/main/nextjs/pages/api/submitBasic.js should be now fine, required from the other component

- fix aws issue after migrating to railway:
Server running on port 4000
Error: Missing credentials for "PLAIN"
at SMTPConnection._formatError (/app/node_modules/nodemailer/lib/smtp-connection/index.js:790:19)
at SMTPConnection.login (/app/node_modules/nodemailer/lib/smtp-connection/index.js:444:38)
at /app/node_modules/nodemailer/lib/smtp-transport/index.js:375:32
at SMTPConnection.<anonymous> (/app/node_modules/nodemailer/lib/smtp-connection/index.js:213:17)
at Object.onceWrapper (node:events:627:28)
at SMTPConnection.emit (node:events:513:28)
at SMTPConnection.emit (node:domain:489:12)
at SMTPConnection._actionEHLO (/app/node_modules/nodemailer/lib/smtp-connection/index.js:1331:14)
at SMTPConnection._processResponse (/app/node_modules/nodemailer/lib/smtp-connection/index.js:953:20)
at SMTPConnection._onData (/app/node_modules/nodemailer/lib/smtp-connection/index.js:755:14) {
code: 'EAUTH',
command: 'API'
}
/app/node_modules/aws-sdk/lib/request.js:31
throw err;
^
InvalidParameterType: Expected params.Key to be a string
at ParamValidator.fail (/app/node_modules/aws-sdk/lib/param_validator.js:50:37)
at ParamValidator.validateType (/app/node_modules/aws-sdk/lib/param_validator.js:233:10)
at ParamValidator.validateString (/app/node_modules/aws-sdk/lib/param_validator.js:155:32)
at ParamValidator.validateScalar (/app/node_modules/aws-sdk/lib/param_validator.js:131:21)

- filekey should be all fine
- maybe using Cloudfront to display images from S3 bucket in the gallery?
https://www.youtube.com/watch?v=kbI7kRWAU-w