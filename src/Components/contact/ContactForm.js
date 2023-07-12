import React, { useState, useRef } from "react";
import FriendlyCaptcha from "./FriendlyCaptcha";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { usePersistedState } from "../../hooks/usePersistedState";
import Gradient from "rgt";

emailjs.init("ykmQT0YdejnTpSxVS");

const ContactForm = () => {
  const [submitButtonEnabled, setSubmitButtonEnabled] = useState(false);
  const widgetRef = useRef();
  const [mailerState, setMailerState] = usePersistedState("MAILER_STATE", {
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const reset = () => {
    setSubmitButtonEnabled(false);
    if (widgetRef.current) {
      // The type of widgetRef.current is WidgetInstance, see the JS API details here:
      // https://docs.friendlycaptcha.com/#/widget_api?id=javascript-api
      widgetRef.current.reset();
    }
  };

  const handleChange = (e) => {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitEmail = async (e, resetWidget) => {
    e.preventDefault();

    // const frcCaptchaSolution = e.target["frc-captcha-solution"].value;
    // captcha: frcCaptchaSolution,

    if (
      mailerState.name === "" ||
      mailerState.email === "" ||
      mailerState.subject === "" ||
      mailerState.message === ""
    ) {
      toast.error("Please fill in all the fields");
      return;
    }
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: mailerState.name,
          from_email: mailerState.email,
          subject: mailerState.subject,
          message_html: mailerState.message,
        }
      );

      setMailerState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      resetWidget();
      toast.success("Email was sent!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="thewholecontact">
      <div className="form-container">
        <form className="contact-form" onSubmit={(e) => submitEmail(e, reset)}>
          <h1 className="no-margin-padding"><Gradient dir="left-to-right" from="#e30cad" to="#ff8000">Contact</Gradient></h1>
          <input
            type="text"
            name="name"
            minLength="2"
            maxLength="20"
            value={mailerState.name}
            onChange={handleChange}
            id="name"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={mailerState.email}
            onChange={handleChange}
            id="email"
            placeholder="Email"
          />
          <input
            type="text"
            name="subject"
            minLength="2"
            maxLength="100"
            value={mailerState.subject}
            onChange={handleChange}
            id="subject"
            placeholder="Subject"
          />
          <textarea
            name="message"
            minLength="10"
            value={mailerState.message}
            onChange={handleChange}
            placeholder="Your message here"
            id=""
            cols="30"
            rows="10"
          ></textarea>

          <FriendlyCaptcha
            data-cy="friendly-captcha"
            ref={widgetRef}
            siteKey={process.env.REACT_APP_FRIENDLY_CAPTCHA_SITEKEY}
            doneCallback={() => {
              setSubmitButtonEnabled(true);
            }}
            errorCallback={(err) => {
              toast.error(`Anti robot widget issue: ${err}`);
              setSubmitButtonEnabled(true);
            }}
          ></FriendlyCaptcha>
          <button
            type="submit"
            className="submit-button"
            data-cy="submit-button"
            disabled={submitButtonEnabled ? undefined : "null"}
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
