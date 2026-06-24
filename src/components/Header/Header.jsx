import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Header.css";

import BookingButton from "../BookingButton/BookingButton";
import Logo from "../../assets/images/logo.png";

function Header() {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => setExpanded(false);

  return (
    <Navbar className="header" expand="lg" sticky="top" expanded={expanded}>
      <Container className="header-container">
        {/* LOGO */}
        <Navbar.Brand href="/" onClick={closeMenu}>
          <img src={Logo} alt="Leslyene Nutricionista" className="logo-img" />
        </Navbar.Brand>

        {/* TOGGLER */}
        <Navbar.Toggle
          onClick={() => setExpanded(!expanded)}
          aria-controls="main-navbar"
        />

        {/* NAV */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="header-nav ms-auto">
            <Nav.Link href="#inicio" onClick={closeMenu}>
              Início
            </Nav.Link>

            <Nav.Link href="#about" onClick={closeMenu}>
              Sobre
            </Nav.Link>

            <Nav.Link href="#steps" onClick={closeMenu}>
              Como Funciona
            </Nav.Link>

            <Nav.Link href="#testimonials" onClick={closeMenu}>
              Depoimentos
            </Nav.Link>

            {/* CTA alinhado corretamente */}
            <div className="nav-cta">
              <BookingButton />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
