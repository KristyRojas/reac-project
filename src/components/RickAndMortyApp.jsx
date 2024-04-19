import React, { useState, useEffect } from "react";
import Card from "./components/Card";

function RickAndMortyApp() {
    const [characters, setcharacters] = useState([]);
    
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
    }, []);
  
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
      <div>
        {characters.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    );
  }
  
  export default RickAndMortyApp;
  