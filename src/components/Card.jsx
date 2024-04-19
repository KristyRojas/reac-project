import React from "react";
import UserDetails from "./UserDetails";
import Episodes from "./Episodes";
// import ButtonSection from "./ButtonSection";
import Home from "./Home";
import "./Card.css";

function Card(props) {
  const character = props.character;
  const episode=props.episode;
  return (
    <div className="card">
      <UserDetails character={character} />
      <Episodes episode={episode} /> 
      <Home/>
      {/* <ButtonSection socialLinks={socialLinks} /> */}
    </div>
  );
}
export default Card;










  //console.log(character.name);
  // const socialLinks = user["Social-links"];
  //const locations = character["location"];