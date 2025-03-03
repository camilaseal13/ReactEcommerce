import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

import { items } from "../data/data";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(items), 2000))
      .then((respuesta) => {
        const finded = respuesta.find((item) => item.id === Number(id));
        setProduct(finded);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return "Dame un momento por favor";

  return (
    <Container className="mt-4 d-flex justify-content-center">
      <h1>Producto</h1>
      <h2>{product.titulo}</h2>
      <h2>{product.descripcion}</h2>
    </Container>
  );
};
