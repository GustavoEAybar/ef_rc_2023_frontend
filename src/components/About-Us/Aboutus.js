import React from "react";
import "../About-Us/aboutus.css";
import Perfilabout from "./Perfilabout";

function Aboutus() {
  return (
    <div className="abodiv">
      <img src={require("./imgicono.png")} alt="Imagen Icono Gym" />
      <h3>
        Bienvenido a Apex Gym, En nuestro GIMNASIO no solo transformamos
        cuerpos; creamos historias de fuerza, resistencia y superación. Somos
        más que un gimnasio; somos una comunidad comprometida con el bienestar y
        el rendimiento físico excepcional. En el corazón de Apex Gym está
        nuestra misión de inspirar y capacitar a individuos para alcanzar sus
        objetivos de acondicionamiento físico. Nos esforzamos por ser el
        epicentro donde los sueños de una vida más saludable y en forma se hacen
        realidad. Ofrecemos instalaciones de vanguardia equipadas con lo último
        en tecnología fitness. Desde zonas de entrenamiento de fuerza hasta
        áreas de entrenamiento funcional, cada rincón ha sido diseñado para
        maximizar tu potencial y elevar tu experiencia de entrenamiento. Nuestro
        equipo de entrenadores altamente calificados está comprometido con tu
        éxito. Desde la planificación personalizada de programas de ejercicios
        hasta la motivación diaria, estamos aquí para apoyarte en cada paso de
        tu viaje fitness.
      </h3>
      <br />
      <h2>NUESTO EQUIPO DE PROFESIONALES</h2>
      <Perfilabout
        nombre="GUSTAVO AYBAR"
        cargo="Dueño, Creador y Fundador"
        descripcion="Es el visionario detrás de Apex Gym, no solo es el dueño, sino también un apasionado defensor del bienestar integral. Su visión es crear un espacio donde los miembros no solo alcancen sus objetivos físicos, sino que también encuentren un equilibrio emocional y mental. Gustavo se enorgullece de cultivar una comunidad de apoyo y de ofrecer instalaciones de vanguardia para el mejoramiento personal."
        imagen="1"
      />
      <Perfilabout
        nombre="CRISTIAN TOLOSA"
        cargo="Etrenador De Fuerza y Acondicionamiento"
        descripcion="Cristian, es un apasionado entrenador especializado en fuerza y acondicionamiento físico. Con una sólida formación en ciencias del deporte, Cristian no solo es un experto en técnicas de levantamiento, sino que también motiva a sus clientes a superar sus límites. Su enfoque positivo y su compromiso con el progreso hacen de cada sesión una experiencia emocionante."
        imagen="2"
      />
      <Perfilabout
        nombre="NICOLAS TORREGROSA"
        cargo="Entrenador Personalizado y Nutricionista"
        descripcion=" Nico no solo es un entrenador físico consumado, sino también un experto en nutrición. Su enfoque integral se centra en la combinación de entrenamiento personalizado y planificación de comidas para alcanzar resultados óptimos. Nicolas comparte su sabiduría sobre la importancia de la alimentación equilibrada para maximizar el rendimiento y la salud a largo plazo."
        imagen="3"
      />
      <h3>
        En Apex Gym, estamos comprometidos a ir más allá de los límites, a
        desafiar lo convencional y a inspirarte a alcanzar tu cima. Únete a
        nosotros en este emocionante viaje hacia una vida más saludable y
        activa. ¡En Apex, tu potencial no tiene límites!
      </h3>
      <br/>
    </div>
  );
}

export default Aboutus;
