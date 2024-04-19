import React from "react";
import "./UserDetails.css";

const UserDetails = (props) => {
  // const [user, setUser] = useState({});
  // setUser(props.user);
  const character = props.character;
  if (!character) {
    return <div>No se ha proporcionado ningún personaje</div>;
  }
  return (
    <div className="contenedorGrande">
      <div className="contenedorImagen">
        <img
          className="redonda"
          src={character.image}
          alt={`avatar de ${character.name}`}
        ></img>
      </div>
      <h1 className="nombre">{character.name}</h1> 
      <button className="ubicacion"> {character.status} </button>
      <p className="descripcion">
        {/* El personaje tiene las siguientes caracteristicas: <br />
        - Genero: {character.gender}  <br/>
        - Especie: {character.species} <br/> */}
        {character.type} 
      </p>
    </div>
  );
};

export default UserDetails;



//React es un teatro donde los componentes son actores, y su ciclo de vida es su actuacion


//user es un objeto, setUser es una funcion que cambia los valores de user
  //console.log(character.id);
  //Useeffect nos cambia el estado