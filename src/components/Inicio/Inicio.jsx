import React from "react"
import "../Inicio/Inicio.css";
import spider from "../../Assets/portada.jpg"
import  Navbar  from "../NavBar/NavBar";
import {motion} from "framer-motion"
//variants
import {fadeIn} from "../../variants"


const Inicio = () => {
    return (

<div className="hero-container">  
            <Navbar/>

<div>
<motion.h1
variants={fadeIn("up", 0.3)} 
initial="hidden" 
whileInView={"show"} 
viewport={{once: false, amount: 0.7}} 
 className="titulo_presentacion">GLOBAL GAME</motion.h1>
<motion.p
        variants={fadeIn("up", 0.6)} 
        initial="hidden" 
        whileInView={"show"} 
        viewport={{once: false, amount: 0.7}} 
>Unite a la mejor academia de Valorant</motion.p>
</div>
</div>
)
}

export default Inicio