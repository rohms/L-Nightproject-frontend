import React from "react";
import ContactForm from "./ContactForm";
import { Seo } from "../Seo";

const Contactpage = () => {
  return (
    <>
      <Seo
        title="L-Night Contact"
        description="L-Night Contact Page with information about how to contact the L-Night."
        type="website"
        keywords={["L-Night Berlin", "L-Night Contact"]}
      />
      <ContactForm />
    </>
  );
};

export default Contactpage;
