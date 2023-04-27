import React from "react";
import "../Servicios/Servicios.css";
import valorantvideo from "../../components/Servicios/valorantvideo1.mp4"
import CountUp from "react-countup";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion"
//variants
import {fadeIn} from "../../variants"


const Servicios = () => {
  const [ref, inView] = useInView({
    threshold:0.5,
  });
  return (
    <div className="Servicios" id="servicios" ref={ref}>
      <video src={valorantvideo} autoPlay loop muted alt="" />
    <motion.h2
    variants={fadeIn("right", 0.3)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0.3}}
    className="titulo_presentacion"
    >Nuestro Servicio</motion.h2>
    <motion.div
    variants={fadeIn("up", 0.3)} 
    initial="hidden" 
    whileInView={"show"} 
    viewport={{once: false, amount: 0.7}}  
    className="count_serv" >
    <div className="count_box">
    <div className='count_number '>
      {
      inView ? <CountUp start={0} end={100} duration={5} />:
      null}
    </div>
    <div className=''>
      Ingresos<br/>
      PVP
    </div>
  </div>
  <div className="count_box">
    <div className='count_number'>
      {
      inView ? <CountUp start={0} end={300} duration={5} />:
      null}
    </div>
    <div className=''>
      Horas de<br/>
      Capacitación
    </div>
  </div>
  <div className="count_box">
    <div className='count_number'>
      {
      inView ? <CountUp start={0} end={700} duration={5} />:
      null}
    </div>
    <div className=''>
      Valorant <br/>
      Point
    </div>
  </div>
  </motion.div>
  <motion.div 
  variants={fadeIn("up", 0.3)} 
  initial="hidden" 
  whileInView={"show"} 
  viewport={{once: false, amount: 0.7}} 
  className="count_serv" >
    <div className="count_box">
    <div className='count_number'>
      {
      inView ? <CountUp start={0} end={25} duration={5} />:
      null}
    </div>
    <div className=''>
      Skins<br/>
      Legends
    </div>
  </div>
  <div className="count_box">
    <div className='count_number'>
      {
      inView ? <CountUp start={0} end={24} duration={5} />:
      null}
    </div>
    <div className=''>
      Horas de<br/>
      Soporte
    </div>
  </div>
  <div className="count_box">
    <div className='count_number'>
      {
      inView ? <CountUp start={0} end={6} duration={5} />:
      null}+
    </div>
    <div className=''>
      Años de <br/>
      experiencie
    </div>
  </div>
  </motion.div>
    </div>
 
 
 
 
 );
};

export default Servicios;
