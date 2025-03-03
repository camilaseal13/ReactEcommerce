import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Item = (item) => (
  <Card key={item.id} style={{ width: "18rem" }}>
    <Card.Img variant="top" src={item.imagen} />
    <Card.Body>
      <Card.Title>{item.titulo}</Card.Title>
      <Card.Text>{item.descripcion}</Card.Text>
      <Link to={`/detail/${item.id}`}>
        <Button variant="primary">Ver más del producto</Button>
      </Link>
    </Card.Body>
  </Card>
);
