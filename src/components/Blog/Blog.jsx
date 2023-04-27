import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

import { notiData } from './notiData'
import "../Blog/Blog.css"
import nino from "../../Assets/anto.png"
const Blog = () => {
//   async function fetchApi(){
//     let events = await fetch('http://localhost:8080/posts')
//     events = await events.json()
//     console.log(events)
//   }
//   fetchApi()
  return (
    <div className='Blog' id='blog'>
      <div className='contenedor_titulo'>
      <div className='blob2'></div>
        <h2 className='titulo_filo'>Blog</h2>
      </div>
      <div className="contenedor_noticias">

<div className='cardreco'>
  <div className='cardcont'>
  <img className='ninito' src={nino}  alt="" />
<h2>Antonella Tortoza</h2>
<h3>MindHub/Freelance</h3>
<p>Tuve la suerte de trabajar con Raul en varias ocasiones y es muy buen compañero, optimista, siempre dispuesto a ayudar a los demás, con un gran carisma y siempre con una buena actitud.
Te deseo muchos éxitos y prosperidad en esta nueva etapa ✨ </p>
</div>
</div>
    
      </div>
      </div>
  )
}

export default Blog