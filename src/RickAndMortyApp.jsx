import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import { useSearchParams } from "react-router-dom";

//import {userSearchParams} from "userSearchParms";
function RickAndMortyApp() {
    const [personaje, setpersonaje] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    let [searchParams, setSearchParams] = useSearchParams();
     const id=searchParams.get("id")
  useEffect(() => {

    fetch(`https://rickandmortyapi.com/api/character/${id}`)//${id}
      .then((res) => res.json())
      .then((data) => {

        setpersonaje(data);
        /* console.log(data); */
        fetchEpisodes(data.episode.slice(0, 4));
  });
  }, []);

  const fetchEpisodes = (episodesUrls) => {
    const promises = episodesUrls.map((url) =>
      fetch(url).then((res) => res.json())
    );

    Promise.all(promises)
      .then((episodes) => {
        setEpisodes(episodes);
/*         console.log(episodios);*/      })
      .catch((error) => console.error(error));
  };

    // const [error, setError] = useState(null);
  
    /* function numerosAleatorios() {
        const numeros = [];
        for (let i = 0; i < 2; i++) {
          numeros.push(Math.floor(Math.random() * 827)); 
        }
        numeros.toString();
        return numeros;
      }
  
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
  /*  useEffect(() => {
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
        setpersonaje(data);
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
    }; */
    
    return (
      <div>
        {personaje && (
        <Card
          key={personaje.id}
          personaje={personaje}
          episodes={episodes}
        />
      )}
        {/* {characters.map((character) => (
          <Card key={character.id} character={character} />
        ))} */}
      </div>
    );
  }
  
export default RickAndMortyApp;
  