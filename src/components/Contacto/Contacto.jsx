import React from 'react'
import Form from 'react-bootstrap/Form';
import "../Contacto/Contacto.css"
import lele from "../../Assets/lele.png";
import {motion} from "framer-motion"
import {fadeIn} from "../../variants"

const Contacto = () => {



    return (
        <div className='Contacto' id='contacto'>
          <div className='box_contact'>
      <motion.div 
         variants={fadeIn("right", 0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.3
         }}
      className='formcontact'>
        <h2
        className="titulo_presentacion">Contacto</h2>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="email@example.com" />
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="email" placeholder="Tu nombre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Cuentanos más!</Form.Label>
        <Form.Control as="textarea" rows={7} />
      </Form.Group>
      <button class="button">
    <span class="button-content">Enviar</span>
</button>


    </Form>
      </motion.div>
      <motion.div 
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3
        }}
      className='imagencontact'>
        <img  src={lele} alt=""   />
      </motion.div>
        </div>
        </div>
    );
};

export default Contacto