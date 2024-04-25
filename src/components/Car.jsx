import React from "react";
import UserDetail from "./UserDetail";
// import ButtonSection from "./ButtonSection";
import "./Car.css"
import { NavLink } from "react-router-dom";

const Car=(props)=> {
    
  const character = props.character;
  return (
    <NavLink to={`/character?id=${character.id}`} >
      <div className="car">
      <UserDetail character={character} />
    </div>
    </NavLink>
  );
    
}
export default Car;