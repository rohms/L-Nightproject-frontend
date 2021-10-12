import React, { useState } from 'react';

const Contactpage = () => {

    // const ContactForm = () => {
    //     const [status, setStatus] = useState("Submit");
    //     const handleSubmit = async (e) => {
    //         e.preventDefault();
    //         setStatus("Sending..");
    //         const { name, email, message } = e.target.elements;
    //         let details = {
    //         name: name.value,
    //         email: email.value,
    //         message: message.value,
    //     };
    //     let response = await fetch("http://localhost:3000/contact"), {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json;charset=utf-8",

    //         }
    //     }
    //     }
    // }


    return (
        <div>
            <h2>How to get in touch with us?</h2>
            <div class="form-container"></div>
        <form class="contact-form"></form>
        <h2>CONTACT</h2>
        <input type="text" id="name" placeholder="Name" />
        <input type="email" id="email" placeholder="Email" />
        <input type="text" id="subject" placeholder="Subject" />
        <textarea placeholder="Your message here" id="" cols="30" rows="10"></textarea>
        </div>
    )
}

export default Contactpage
