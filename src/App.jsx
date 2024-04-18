import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";

function numerosAleatorios() {
  const numeros = [];
  for (let i = 0; i < 2; i++) {
    numeros.push(Math.floor(Math.random() * 827)); 
  }
  numeros.toString();
  return numeros;
}
function App() {
  const [characters, setcharacters] = useState([]);
  useEffect(() => {
 
    fetch(
      "https://rickandmortyapi.com/api/character/" + numerosAleatorios()
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setcharacters(data);
        //console.log(data);
      });
  }, []);
  const [episodes, setepisodes] = useState([]);
  useEffect(() => {
 
    fetch(
      "https://rickandmortyapi.com/api/episode/"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setepisodes(data);
        //console.log(data);
      });
  }, []);
  
  return (
    <div>
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
      {episodes.map((episode) => (
      <Card key={episode.id} episode={episode} />
   ))}
    </div>
  //   <div>
  //   {episodes.map((episode) => (
  //     <Card key={episode.id} episode={episode} />
  //   ))}
  // </div>
  );
}

export default App;