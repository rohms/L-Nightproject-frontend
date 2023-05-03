import React from "react";
import { Helmet } from "react-helmet-async";

const Seo = ({ title, description, keywords, type }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* End Facebook tags */}
    </Helmet>
  );
};

export { Seo };
