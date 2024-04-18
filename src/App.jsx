import React, { useState, useEffect } from "react";
import Card from "./components/Card";
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

export default App;