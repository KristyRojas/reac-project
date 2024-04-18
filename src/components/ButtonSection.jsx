import React from "react";
import "./ButtonSection.css";

const ButtonSection = ({ socialLinks }) => {
  console.log(socialLinks);
  return (
    <div className="contenedorGrande">
      <div className="container">
        {socialLinks.map((socialLink) => (
          <button key={socialLink.name}>{socialLink.name}</button>
        ))}
      </div>
    </div>
  );
};

export default ButtonSection;