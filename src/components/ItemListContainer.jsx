import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { items } from "../data/data";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(items), 2000))
      .then((respuesta) => {
        if (!id) {
          setProducts(respuesta);
        } else {
          const filtered = respuesta.filter((item) => item.category === id);
          setProducts(filtered);
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return "Dame un momento por favor";

  return (
    <Container className="d-flex mt-4">
      <ItemList items={products} />
    </Container>
  );
};
