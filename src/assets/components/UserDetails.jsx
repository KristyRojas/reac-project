import React from "react";
import "./UserDetails.css";

const UserDetails = () => {
  return (
    <div className="Contenedor1">
      <div className="contenedorImagen">
        <img
          className="redonda"
          src="https://i.ibb.co/HCXX7Vc/06b1e6e3-be27-4c7a-abd7-bbdbc4f315a1.webp"
          alt="image not found"
        ></img>
      </div>
      <h1 className="nombre">Jessica Randall</h1>
      <p className="ubicacion">London, United Kingdom</p>
      <p className="descripcion">"Front-end developer and avid reader."</p>
    </div>
  );
};

export default UserDetails;