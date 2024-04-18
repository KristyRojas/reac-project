import React from "react";
import "./Episodes.css";

const Episodes = (props) => {

  
  // const [user, setUser] = useState({});
  // setUser(props.user);
  const episode = props.episode;
  
  return (
    <div className="contenedorEpisode">
      {/* <div className="contenedorImagen">
        <img
          className="redonda"
          src={character.image}
          alt={`avatar de ${character.name}`}
        ></img>
      </div> */}
      <h1 className="nombre">{episode.name}</h1>
      <p className="episode">{episode.episode}</p>
      <p className="descripcion">
        {/* El personaje tiene las siguientes caracteristicas: <br />
        - Genero: {character.gender}  <br/>
        - Especie: {character.species} <br/> */}
        {character.type} 
      </p>
    </div>
  );
};

export default Episodes;
