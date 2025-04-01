import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavBar = () => (
  <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand as={NavLink} to="/">
        Rescatala
      </Navbar.Brand>

      <Nav className="me-auto">
        <Nav.Link to="/category/Hombres" as={NavLink}>
          Hombres
        </Nav.Link>
        <Nav.Link to="/category/Mujeres" as={NavLink}>
          Mujeres
        </Nav.Link>
        <Nav.Link to="/category/Descuentos" as={NavLink}>
          Descuentos
        </Nav.Link>
        <Nav.Link to="/cart" as={NavLink}>
          Carro compras
        </Nav.Link>
      </Nav>

      <div>
        <FaCartPlus size={24} className="text-white" />
      </div>
    </Container>
  </Navbar>
);
