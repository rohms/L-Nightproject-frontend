import React, { useState } from 'react'
import axios from "axios"
import "./Styles/ContactForm.css"

const ContactForm = () => {
    // const [sent, setSent] = useState(false)
    const [mailerState, setMailerState] = useState({
      name: "",
      email: "",
      message: ""
    });
   

console.log(mailerState)


    const handleChange = (e) => {
        setMailerState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }


    const submitEmail = async (e) => {
        e.preventDefault();
        // setSent(true)
        console.log({ mailerState });
        const response = await fetch("http://localhost:4000/send_mail", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ mailerState }),
        })
          .then((res) => res.json())
          .catch(err => console.log(err))
          .then(() => {
            setMailerState({
              name: "",
              email: "",
              message: "",
            });
          });
      };

    return (
        <div>
            
            
        <div class="form-container">
        <h2>How to get in touch with us?</h2>
            <form class="contact-form" onSubmit={submitEmail}>
                <h2>CONTACT</h2>
                <input type="text" name="name" value={mailerState.name} onChange={handleChange} id="name" placeholder="Name" />
                <input type="email"  name="email" value={mailerState.email} onChange={handleChange} id="email" placeholder="Email" />
                <textarea name="message" value={mailerState.message} onChange={handleChange} placeholder="Your message here" id="" cols="30" rows="10"></textarea>
                <input type="submit" class="submit" value="Send Message"></input>
            
            </form>
        </div>
        </div>
        
    )
}


export default ContactForm
