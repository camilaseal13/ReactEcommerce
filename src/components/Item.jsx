import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Item = ({ id, imagen, titulo, descripcion, stock, price }) => (
  <Card
    key={id}
    className="shadow-sm border-0 rounded-4 overflow-hidden"
    style={{ width: "18rem", height: "100%" }}
  >
    <Card.Img
      variant="top"
      src={imagen}
      style={{ height: "200px", objectFit: "cover" }}
    />
    <Card.Body
      className="d-flex flex-column justify-content-between"
      style={{ minHeight: "300px" }} // Ajustar la altura mínima según sea necesario
    >
      <Card.Title className="fw-bold text-primary" style={{ flex: "0 1 auto" }}>
        {titulo}
      </Card.Title>
      <Card.Text className="text-secondary" style={{ flex: "1 0 auto" }}>
        {descripcion}
      </Card.Text>
      <Card.Text className="text-secondary" style={{ flex: "0 1 auto" }}>
        Stock: {stock}
      </Card.Text>
      <Card.Text className="text-secondary" style={{ flex: "0 1 auto" }}>
        Precio: {price}
      </Card.Text>
      <Link to={`/detail/${id}`} className="mt-auto">
        <Button variant="primary" className="w-100 rounded-pill">
          Ver más del producto
        </Button>
      </Link>
    </Card.Body>
  </Card>
);
