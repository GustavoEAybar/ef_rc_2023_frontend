import React from "react";
import "../About-Us/aboutus.css";

function Aboutus() {
  return (
    <div className="caja-per">
      <img className="imagen-per" src={require("./Perfil_1.png")} alt="Foto Perfil" />
      <div className="texto-per">
        <p className="perfil1-nom"> Gustavo Aybar </p>
        <p className="perfil1-car"> Gustavo Aybar Gustavo Aybar </p>
        <p className="perfil1-des"> Tras igualar en el tiempo reglamentario, el “Santo” fue al suplementario contra un duro Estudiantes y logró derrotarlo en la segunda jornada del Final Four del Pre Federal. Fue 78 a 69 con Patricio Aranda como máximo anotador con 22 puntos.Tras igualar en el tiempo reglamentario, el “Santo” fue al suplementario contra un duro Estudiantes y logró derrotarlo en la segunda jornada del Final Four del Pre Federal. Fue 78 a 69 con Patricio Aranda como máximo anotador con 22 puntos. </p>

      </div>
    </div>
  );
}

export default Aboutus;
