import React from 'react';
import styles from "./contact.css"

const Contact = () => {
  return (
    <div className={styles.fondo}>
      <h1>CONTACTO</h1>
      <hr/>
      <h2>Obtenga Resultados Reales!!!</h2>
      <br/>
      <h2>Contactenos</h2>
      <img src={require('./imgcontacto1.png')} alt='Imagen Hombre Haciendo Peso Muerto'/>
    </div>
  )
}

export default Contact
