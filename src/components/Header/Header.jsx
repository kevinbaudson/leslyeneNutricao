import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { GiLeafSwirl } from "react-icons/gi";

import "./Header.css";

import Logo from "../../assets/images/logo.png"

function Header() {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => setExpanded(false);

  return (
    <Navbar
      className="header"
      expand="lg"
      sticky="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="/" onClick={closeMenu}>
          <div className="logo">
            <img src={Logo} alt="Leslyene Nutricionista" className="logo-img" />
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          onClick={() => setExpanded(!expanded)}
          aria-controls="main-navbar"
        />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#inicio" onClick={closeMenu}>
              Início
            </Nav.Link>

            <Nav.Link href="#about" onClick={closeMenu}>
              Sobre
            </Nav.Link>

            <Nav.Link href="#receitas" onClick={closeMenu}>
              Receitas
            </Nav.Link>

            <Nav.Link href="#plans" onClick={closeMenu}>
              Planos
            </Nav.Link>

            <Nav.Link href="#testimonials" onClick={closeMenu}>
              Depoimentos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;