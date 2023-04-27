import React from 'react'
import "./Footer.css"
import facebook from "../../Assets/facebook.png"
import instagram from "../../Assets/instagram.png"
import Twitter  from '../../Assets/gorjeo.png'
import logo from "../../Assets/logo.png"
import llamada from "../../Assets/whatsapp.png"
import email from "../../Assets/gmail.png"
import ubi from "../../Assets/mapa.png"


const Footer = () => {
    return (
        <div className='Footer' id='footer'>
            <footer className="footer-container">
                <div className="footer pt-1">
                    <div className="logo-footer-container">
                        <img className="logo-footer" src={logo} alt="logo" />
                        <h3 className="map-text">Seguinos:</h3>
                        <div className="socialmedia-container ">
                            <a href="https://www.instagram.com/"><img className="redes-img" src={instagram}
                                alt="instagram logo" /></a>
                            <a href="https://www.facebook.com/"><img className="redes-img" src={facebook}
                                alt="facebook logo" /></a>
                                 <a href="https://www.twitter.com/"><img className="redes-img" src={Twitter}
                                alt="facebook logo" /></a>
                        </div>
                    </div>

                    <div className="map-text ">
                        <h3 className="">Contactanos:</h3>
                        <div className='div-icon'>
                            <img className='img-icon' src={llamada} alt="" />
                            <p className='pt'>Tel: +54 011 2066-1485</p>
                        </div >
                        
                        <div className='div-icon'>
                            <img className='img-icon' src={email} alt="" />
                            <p className='pt'>info@globalgame.org.ar</p>
                        </div>
                        <div className='div-icon'>
                            <img className='img-icon' src={ubi} alt="" />
                            <p className='pt'>736, CVH, Ezeiza, Buenos Aires</p>
                        </div>
                    </div>

                    <div className="text-location">
                        <h3 className="">Ubicación:</h3>
                        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.7806432191137!2d-58.522496200000006!3d-34.8617387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd732293e96ff%3A0x82b417dc58e34bb0!2sCentro%20De%20Dia%20Irregulares%20Motores%20Ezeiza%20CEDIME!5e0!3m2!1ses-419!2sar!4v1674160107591!5m2!1ses-419!2sar" ></iframe>
                     </div>
                </div>

                <div className="footer-warning">
                    <h6 >Global Game® 2023</h6>
                </div>

            </footer>

        </div>
    );
};

export default Footer