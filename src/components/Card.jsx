import React from "react";
import UserDetails from "./UserDetails";
import ButtonSection from "./ButtonSection";
import "./Card.css";


function Card(props){
    const user=props.user;
    //console.log(user)
    const socialLinks=user["social-profile"]
  return (
    <div className="contenedorDinamico">
    <UserDetails user={user} /> 
      <ButtonSection socialLinks={socialLinks}/>
    </div>
  );
}
export default Card;