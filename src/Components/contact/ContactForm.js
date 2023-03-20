import React, { useState, useRef } from "react";
import "../Styles/Style.css";
import FriendlyCaptcha from "./FriendlyCaptcha";
import { toast } from "react-toastify";

const ContactForm = () => {
  const sendMailURL = process.env.REACT_APP_SEND_MAIL;
  const [submitButtonEnabled, setSubmitButtonEnabled] = useState(false);
  const widgetRef = useRef();
  const [mailerState, setMailerState] = useState({
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

    console.log({ mailerState });

    const response = await fetch(sendMailURL, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        mailerState,
        frcCaptchaSolution: e.target["frc-captcha-solution"].value,
      }),
    });
    console
      .log("body", response.body)
      .then((res) => res.json())
      .catch((err) => toast.error(err))
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          toast.success("Message sent");
        } else if (resData.status === "fail") {
          toast.error("Sending message failed");
        }
        setMailerState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      });

    const result = await response.json();
    toast.info(`${result.msg} (status ${response.status})`);
    resetWidget();
  };

  return (
    <div className="thewholecontact">
      <div className="form-container">
        <form className="contact-form" onSubmit={(e) => submitEmail(e, reset)}>
          <h2>CONTACT</h2>
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
            ref={widgetRef}
            siteKey={process.env.REACT_APP_FRIENDLY_CAPTCHA_SITEKEY}
            doneCallback={() => setSubmitButtonEnabled(true)}
            errorCallback={(err) => {
              toast.error(`Anti robot widget issue: ${err}`);
              setSubmitButtonEnabled(true);
            }}
          ></FriendlyCaptcha>
          <button
            type="submit"
            className="submit"
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
