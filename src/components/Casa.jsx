/* import React, { useState, useEffect } from "react";
import Car from "./Car";

const Casa=()=> {
  const [characters, setCharacters]=useState([]);
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
    <div>
      {characters.map((character, index) => (
        <Car key={index} character={character}/>
      ))}
    </div>
  );
}

export default Casa; */




/* import React, { useState, useEffect } from "react";
import Car from "./Car"

const Casa = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchRandomCharacters();
  }, []);

  const fetchRandomCharacters = () => {
    const randomIds = generateRandomIds(10, 826);
    const promises = randomIds.map((id) =>
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Error fetching character with ID ${id}`);
          }
          return res.json();
        })
        .catch((error) => {
          console.error(error);
          return null; // Return null for failed requests
        })
    );

    Promise.all(promises).then((data) => {
      setCharacters(data.filter((character) => character !== null));
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
    <div>
      {characters.map((character) => (
        <Car key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Casa;
 */

import React from "react";
import "./Casa.css";


function Casa() {
  return(
  <div className="casa">
      <div className="co">
        <button>HOME</button>
       </div>
       
  </div> 
 )
}
export default Casa;