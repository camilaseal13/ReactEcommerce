import { useState } from "react";
import { Button } from "react-bootstrap";

export const ItemCounter = ({ stock, add }) => {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    if (stock > count) setCount((prev) => prev + 1);
  };
  const handleRestar = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  const handleCart = () => {
    setCount(1);
    add(count);
  };
  return (
    <section>
      <button onClick={handleRestar}> - </button>
      <span> {count}</span>
      <button onClick={handleAdd}> + </button>
      <hr />
      <button onClick={handleCart}>Agregar al carrito</button>
    </section>
  );
};
