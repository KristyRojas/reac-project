import React,{useState,useEffect} from "react";
import "./UserDetails.css";

const UserDetails = ({user}) => {
    /* const user = props.user
    const [user, setUser]=useState({});
    setUser(props.user);  */
    /* useEffect(()=>{
        fetch("https://661037cd0640280f219c98af.mockapi.io/api/v2/users")
        .then((res) =>{
            return res.json();
        })
        .then((data)=>{
            setUser()
            console.log(data)
        });
    
    },[]); */
  return (
    <div className="Contenedor1">
      <div className="contenedorImagen">
        <img
          className="redonda"
          src={user.avatar}
          alt={`avatar de ${user.name}`}
          
        ></img>
      </div>
      <h1 className="nombre">{user.name}</h1>
      <p className="ubicacion">{user.location}</p>
      <p className="descripcion">{user.descripcion}</p>
    </div>
  );
} 

export default UserDetails;