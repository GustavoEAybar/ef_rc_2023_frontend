import React from "react";
import "../About-Us/aboutus.css";

function Perfilabout(props) {
  return (
    <div className="caja-per">
      <img className="imagen-per" src={require(`./Perfil_${props.imagen}.png`)} alt="Foto Perfil" />
      <div className="texto-per">
        <p className="perfil1-nom"> <strong>{props.nombre}</strong> </p>
        <p className="perfil1-car"> {props.cargo} </p>
        <p className="perfil1-des"> {props.descripcion} </p>
      </div>
    </div>
  );
}

export default Perfilabout;