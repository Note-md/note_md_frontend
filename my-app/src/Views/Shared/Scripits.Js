import React, { useEffect } from "react";

const Scripts = () => {
  useEffect(() => {
    // Load external stylesheets and scripts here
    const bootstrapLink = document.createElement("link");
    bootstrapLink.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
    bootstrapLink.rel = "stylesheet";
    document.head.appendChild(bootstrapLink);

    const fontAwesomeScript = document.createElement("script");
    fontAwesomeScript.src =
      "https://kit.fontawesome.com/aea9fedfee.js";
    fontAwesomeScript.crossOrigin = "anonymous";
    document.body.appendChild(fontAwesomeScript);

    const fontAwesomeLink = document.createElement("link");
    fontAwesomeLink.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    fontAwesomeLink.rel = "stylesheet";
    document.head.appendChild(fontAwesomeLink);

    // Cleanup function to remove the added elements when the component unmounts
    return () => {
      document.head.removeChild(bootstrapLink);
      document.body.removeChild(fontAwesomeScript);
      document.head.removeChild(fontAwesomeLink);
    };
  }, []);

  return <div></div>;
};

export default Scripts;
