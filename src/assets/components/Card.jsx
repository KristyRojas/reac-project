import React from "react";
import UserDetails from "./UserDetails";
import ButtonSection from "./ButtonSection";
import "./Card.css";

const Card = () => {
  return (
    <div className="contenedorDinamico">
      <UserDetails />
      <ButtonSection />
    </div>
  );
};

export default Card;