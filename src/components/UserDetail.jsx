import React from "react";
import "./UserDetail.css";

const UserDetail= (props) =>{
  const character = props.character;
 //console.log(character)
  if (!character) {
    return <div>No se ha proporcionado ningún personaje</div>;
  }
  return (
    <div className="contenedorGrand">
      <div className="contenedorImage">
        <img
          className="redond"
          src={character.image}
          alt={`avatar de ${character.name}`}
        ></img>
      </div>
      <h1 className="nombr">{character.name}</h1> 
      <p className="ubicacio"> {character.location.name} </p>
      <p className="descripcio">
        El personaje tiene las siguientes caracteristicas: <br />
        - Genero: {character.gender}  <br/>
        - Especie: {character.species} <br/>
        - Tipo: {character.type} 
      </p>
    </div>
  );
};

export default UserDetail;