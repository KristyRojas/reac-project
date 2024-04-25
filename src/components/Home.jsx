import React, { useState, useEffect } from "react";
import Car from "./Car";
import "./Home.css";
const Home=() =>{
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetchRandomCharacters();
  }, []);

  const fetchRandomCharacters = () => {
    const randomIds = generateRandomIds(10, 826);
    const promises = randomIds.map((id) =>
      fetch(`https://rickandmortyapi.com/api/character/${id}`).then((res) =>
        res.json()
      )
    );

    Promise.all(promises).then((data) => {
      setCharacters(data);
    });
  };

  const generateRandomIds = (count, maxId) => {
    const ids = [];
    while (ids.length < count) {
      const randomId = Math.floor(Math.random() * (maxId + 1));
      if (!ids.includes(randomId)) {
        ids.push(randomId);
      }
    }
    return ids;
  };

  return (
    <div className="carta">
      {characters.map((character) => (
        <Car key={character.id} character={character} />
      ))}
    </div>
    /* <>
    {personaje && (
      <Car key={personaje.id} personaje={personaje} />
    ))}
  </>*/
  );
}
export default Home;
