/* import React, { useState, useEffect } from "react";
/*import Card from "./components/Card";
import "./App.css";

function numerosAleatorios() {
  const numeros = [];
  for (let i = 0; i < 10; i++) {
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
  return (
    <div>
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}

export default App; */

import React from "react";
//import Navigation from "./Routes/Navigation";
import Navigation from "./Routes/Navigation";
//import RickAndMortyApp from "./component/RickAndMortyApp";
import "./App.css";


function App() {
  /* const [characters, setcharacters] = useState([]);
  
  // const [error, setError] = useState(null);


  useEffect(() => {
 
    fetch(
      "https://rickandmortyapi.com/api/character/"+numerosAleatorios()
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setcharacters(data);
        //console.log(data);
      });
  }, []); */

  /* useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character/"+numerosAleatorios());
        if (!response.ok) {
          throw new Error("Error al cargar los personajes");
        }
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        setError(error.message);
      }
    };

    
    fetchCharacters();
    
  }, []); */

  
  return (
   <Navigation/> 
   /*  <div>
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div> */
  );
}

export default App;
