import { useState, useEffect } from "react";
import { Navbar, Nav, Container, } from "react-bootstrap";
import logo from '../../Assets/logo.png';
import "../NavBar/NavBar.css";
/* import { HashLink } from 'react-router-hash-link'; */
import {
  BrowserRouter as Router
} from "react-router-dom";

function NavBar() {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/" >
            <img src={logo} alt="Logo" style={{ width: '3rem'}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#filosofia" className={activeLink === 'filosofia' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('filosofia')}>Global</Nav.Link>
              <Nav.Link href="#servicios" className={activeLink === 'servicios' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('servicios')}>Servicios</Nav.Link>
              <Nav.Link href="#equipo" className={activeLink === 'equipo' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('equipo')}>Equipo</Nav.Link>
              <Nav.Link href="#contacto" className={activeLink === 'contacto' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contacto')}>Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
export default NavBar
