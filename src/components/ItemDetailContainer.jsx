import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { CartContext } from "../contexts/CartContext";
import { ItemCounter } from "./ItemCounter";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const { onAdd } = useContext(CartContext);

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "items", id);

    getDoc(refDoc)
      .then((snapshot) => {
        setProduct({ ...snapshot.data(), id: snapshot.id });
      })

      .finally(() => setLoading(false));
  }, [id]);

  const add = (count) => {
    onAdd({ ...product, count });
  };

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </Container>
    );
  }

  if (!product) return <h2>No se encontró el producto</h2>;

  return (
    <Container className="mt-4 d-flex flex-column align-items-center">
      <h1>Producto</h1>
      <h1 className="mb-3 text-primary">{product.titulo}</h1>
      <img
        src={product.imagen}
        alt={product.titulo}
        style={{
          width: "100%",
          maxWidth: "400px",
          height: "250px",
          objectFit: "cover",
          borderRadius: "12px",
          marginBottom: "16px",
        }}
      />
      <h2 className="text-dark">{product.descripcion}</h2>
      <div className="row justify-content-center text-center">
        <div className="col-12 mb-3">
          <p className="m-0">En Stock: {product.stock}</p>
        </div>
        <div className="col-12 mb-3">
          <p className="m-0">Precio: ${product.price}</p>
        </div>
        <div className="col-12">
          <ItemCounter stock={product.stock} add={add} />
        </div>
      </div>
    </Container>
  );
};
