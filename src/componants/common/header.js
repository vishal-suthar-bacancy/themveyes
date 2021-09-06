
import React, { useState, useEffect} from "react"
import {Link , useLocation} from "react-router-dom";
import logo from "../../assets/images/logo.svg"
import logo1 from "../../assets/images/logo-dark.svg"
import {Navbar,Container,Nav, Image } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

export default function Header(props) {
  const location = useLocation(); 
  const [scroll, setScroll] = useState(true)
    useEffect(() => {
      if(location.pathname === "/"){
        setScroll(false)
        window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 1)
      })
    }
    }, [])
  return (
<>
<Navbar fixed="top" as="header"  className={scroll ? "py-3 main-header scrolled" : "main-header py-3"} expand="lg" bg={scroll ? "white" : "none"}  variant={scroll ? "light" : "dark"}>
              <Container>
                <Link to="/" className="navbar-brand"><Image  fluid src={scroll ? logo1 : logo} width="200px"/></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav className="align-items-center">
                    <Nav.Item>
                        <HashLink to="/#howtouse" className="nav-link">How to use</HashLink>
                    </Nav.Item>
                    <Nav.Item>
                        <HashLink to="/#aboutus" className="nav-link">About Us</HashLink>
                    </Nav.Item>
                    <Nav.Item>
                        <HashLink to="/#services" className="nav-link">Services</HashLink>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/" className="nav-link ">Contact Us</Link>
                    </Nav.Item>
                    <Nav.Item className="ms-4">
                        <Link to="/login" className={scroll? "nav-link btn btn-outline-primary ms-4" : "nav-link btn btn-outline-secondary ms-4" }>Log in</Link>
                    </Nav.Item>
                    <Nav.Item className="ms-4">
                        <Link to="/" className="nav-link btn btn-primary ">Suscribe Now</Link>
                    </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>  
</>
  )
}
