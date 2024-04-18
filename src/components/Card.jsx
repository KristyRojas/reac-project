import React from "react";
import UserDetails from "./UserDetails";
import ButtonSection from "./ButtonSection";
import "./Card.css";

function Card(props) {
  const character = props.character;

  return (
    <div className="card">
      <UserDetails character={character} />
      {/* <ButtonSection socialLinks={socialLinks} /> */}
    </div>
  );
}

export default Card;










  //console.log(character.name);
  // const socialLinks = user["Social-links"];
  //const locations = character["location"];