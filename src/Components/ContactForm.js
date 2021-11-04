import React, { useState, useRef } from 'react'
import "./Styles/ContactForm.css"
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
    
    const recaptchaKey = process.env.REACT_APP_PUBLIC_RECAPTCHA_SITE_KEY;
    const sendMailURL = process.env.REACT_APP_SEND_MAIL;

    const recaptchaRef = useRef();
    const [recaptchaToken, setRecaptchaToken] = useState("");
    // const [sent, setSent] = useState(false)

    const [mailerState, setMailerState] = useState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

    console.log(mailerState)
    function onChange(value) {
    console.log("Captcha value:", value);
    }

    const handleChange = (e) => {
        setMailerState((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
    }


    const submitEmail = async (e) => {
        e.preventDefault();
        if(!recaptchaToken){
        alert("You must verify the captcha");
        return;
      }

      console.log({ mailerState });
        
       // RECAPTCHA
       const token = await recaptchaRef.current.getValue();
       recaptchaRef.current.reset();

       const response = await fetch(sendMailURL, {
          method: "POST",
          headers: {"Content-type": "application/json"},
          body: JSON.stringify({ mailerState }),
        })
          .then((res) => res.json())
          .catch(err => console.log(err))
          .then(async (res) => {
          const resData = await res;
          console.log(resData);
          if (resData.status === "success"){
            alert("Message sent");
            } else if (resData.status === "fail"){
            alert("Sending message failed")
            }
          setMailerState({
            name: "",
            email: "",
            subject: "",
            message: "",
            token,
            });
          });
        
    };


    return (
        <div className="thewholecontact">
        <div className="form-container">
        <h2>How to get in touch with us?</h2>
            <form class="contact-form" onSubmit={submitEmail}>
            
                <h2>CONTACT</h2>
                <input type="text" name="name" minLength="2" maxLength="20" value={mailerState.name} onChange={handleChange} id="name" placeholder="Name" />
                <input type="email" name="email"  value={mailerState.email} onChange={handleChange} id="email" placeholder="Email" />
                <input type="text"  name="subject" minLength="2" maxLength="100" value={mailerState.subject} onChange={handleChange} id="subject" placeholder="Subject" />
                <textarea name="message" minLength="10" value={mailerState.message} onChange={handleChange} placeholder="Your message here" id="" cols="30" rows="10"></textarea>
               
                <input type="submit" class="submit" value="Send Message"></input>
                  <div className="recaptchacontainer">
                 <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={recaptchaKey}
                  size="normal"
                  onChange={onChange}
                  onChange={recaptchaToken => setRecaptchaToken(recaptchaToken)}
                  onExpired={e => setRecaptchaToken("")}
                /> 
                  </div>
            </form>
             
        </div>
        </div>
    )
}

export default ContactForm
