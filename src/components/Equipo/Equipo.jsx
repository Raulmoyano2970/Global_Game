import React from 'react'
import "../Equipo/Equipo.css"
import Carousel from "../Carrousel/Carrousel" 
import equipo from "../../Assets/lolo.png"
import {motion} from "framer-motion"
import {fadeIn} from "../../variants"


const Equipo = () => {
    return (
        <div className='Equipo' id='equipo'>
            <motion.div 
             variants={fadeIn("right", 0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once: false, amount: 0.3
             }}
            className='contenedor_titulo'>
            <h2 className='titulo_presentacion' id='tituloequipo'>Equipo</h2>
            <img className='teamimg' src={equipo} width="550" alt="" />
            </motion.div>
            <Carousel/>
        </div>
    );
};

export default Equipo