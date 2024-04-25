import React from "react";
import UserDetails from "./UserDetails";
import Episodes from "./Episodes";
// import ButtonSection from "./ButtonSection";
import Casa from "./Casa";
import "./Card.css"
import { NavLink } from "react-router-dom";


function Card({personaje, episodes}) {
 // const personaje = props.personaje;
  //const episode=props.episode;
  return (
    
    <div className="card">
      <UserDetails personaje={personaje} />
      <Episodes episodes={episodes} /> 

      <NavLink to="/">
          <Casa/>
      </NavLink>
      
      {/* <ButtonSection socialLinks={socialLinks} /> */}
    </div>
  );
}
export default Card;










  //console.log(character.name);
  // const socialLinks = user["Social-links"];
  //const locations = character["location"];