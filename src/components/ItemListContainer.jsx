import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ItemList } from "./ItemList";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const q = id
      ? query(collection(db, "items"), where("category", "==", id))
      : collection(db, "items");

    getDocs(q)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
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
