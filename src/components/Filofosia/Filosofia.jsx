import React from "react";
import Imagen1 from '../../Assets/valorant2.png'
import "../Filofosia/Filosofia.css";
import {motion} from "framer-motion"
import {fadeIn} from "../../variants"
const Filosofia = () => {
  return (
    <div className="Filosofia" id="filosofia">
      <div className='filosofia1'>
        <motion.div 
             variants={fadeIn("right", 0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once: false, amount: 0.3
             }}
        
        className='parrafo1'>
        <h2 className="titulo_presentacion">Quienes Somos</h2>
        <p>Nuestra empresa se dedica a la enseñanza y entrenamiento en el videojuego Valorant,
             uno de los juegos más populares en el mundo de los deportes electrónicos (esports).
              Ofrecemos clases individuales y en grupo, así como programas de entrenamiento a 
              medida para equipos y jugadores que deseen mejorar su rendimiento en el juego.
          En nuestra empresa, nos enfocamos en ofrecer una amplia gama de clases que cubren todas
           las áreas de Valorant. Desde la mecánica del juego y el uso de las diferentes armas y 
           habilidades de los personajes, hasta la estrategia y el trabajo en equipo, nuestras clases
            están diseñadas para ayudar a los jugadores a mejorar en todas las áreas.    </p>
    </motion.div>
      <div   
      className='contenedor__imagen '>
            <img src={Imagen1} className='imagen1' alt="" />
        </div>
      </div>
    </div>
  );
};

export default Filosofia;
