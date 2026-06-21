import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { GiLeafSwirl } from "react-icons/gi";

import "./Header.css";

function Header() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <div className="logo">
            <h1 className="logo-name">
              <GiLeafSwirl className="leaf-icon" />
              Leslyene
            </h1>
            <span className="logo-subtitle">NUTRICIONISTA</span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="#inicio">Início</Nav.Link>

            <Nav.Link href="#about">Sobre</Nav.Link>

            <Nav.Link href="#receitas">Receitas</Nav.Link>

            <Nav.Link href="#plans">Planos</Nav.Link>
            
            <Nav.Link href="#testimonials">Depoimentos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
