/* import React, { useState, useEffect } from "react";
import "./Episodes.css";

function numerosAleatorios() {
  const numeros = [];
  for (let i = 0; i < 2; i++) {
    numeros.push(Math.floor(Math.random() * 827)); 
  }
  numeros.toString();
  return numeros;
}

const Episodes = (props) => {
  const episode = props.episode;
  
  const [episodes, setEpisodes] = useState([]);
  
  // const [user, setUser] = useState({});
  // setUser(props.user);
 
  useEffect(() => {
 
      fetch(
        "https://rickandmortyapi.com/api/episode/"+ numerosAleatorios();
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setEpisodes(data);
          //console.log(data);
        });
    }, []);
  /* const fetchEpisodes = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/episode/");
      if (!response.ok) {
        throw new Error("Error al cargar los episodios");
      }
      const data = await response.json();
      setEpisodes(data.results);
    } catch (error) {
      setError(error.message);
    }
  }; 
  fetchEpisodes();
}, []);*/



/* if (!episode) {
  return <div>No se ha proporcionado ningún episodio </div>;
} */

 /* return (
    <div>

      <div >
        {episodes.map((episode) => (
          <Card key={episode.id} episode={episode} />
        ))}
      </div>
      <div className="contenedorEpisode">
      {/* <div className="contenedorImagen">
        <img
          className="redonda"
          src={character.image}
          alt={`avatar de ${character.name}`}
        ></img>
      </div> */
 /*     <h1 className="nombre">{episode.name}</h1>
      <p className="episode">{episode.episode}</p>
      <p className="descripcion">
        {/* El personaje tiene las siguientes caracteristicas: <br />
        - Genero: {character.gender}  <br/>
        - Especie: {character.species} <br/> */
/*        {episode.air_date} 
      </p>
    </div>
    
    </div>
    
  );
};

export default Episodes; */


import React from "react";
import "./Episodes.css" // Asumiendo que tienes un componente Card



const Episodes = ({episodes}) => {
  /* const [episodes, setEpisodes] = useState([]);
  function numerosAleatorios() {
    const numeros = [];
    for (let i = 0; i < 4; i++) {
      numeros.push(Math.floor(Math.random() * 56)); 
    }
    return numeros;
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const randomNumbers = numerosAleatorios();
        const responses = await Promise.all(
          randomNumbers.map(number =>
            fetch(`https://rickandmortyapi.com/api/episode/${number}`)
          )
        );
        const data = await Promise.all(responses.map(res => res.json()));
        setEpisodes(data);
      } catch (error) {
        console.error("Error al cargar los episodios:", error);
      }
    };
    fetchData();
  }, []);
 */
  return (
    <div className="cuadro">
      <div className="titulo">
        <h1>EPISODIOS</h1>

        </div>
        <div className="tarjetaEpi">

        {episodes.map(episode => (
        <div key={episode.id} className="contenedorEpisode">
          <h1 className="name">{episode.name}</h1>
          <p className="episode">{episode.episode}</p>
          <p className="air">{episode.air_date}</p>
        </div>
      ))}
        </div>
     
      
    </div>
  );
};

export default Episodes;



