import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const initialValues = {
  name: "",
  phone: " ",
  email: " ",
};

export const Cart = () => {
  const [buyer, setBuyer] = useState(initialValues);
  const { items, onRemove, deleteItem } = useContext(CartContext);

  const total = !items.length
    ? 0
    : items.reduce(
        (acumulado, actual) => acumulado + actual.count * actual.price,
        0
      );

  const handleOrder = () => {
    const order = {
      buyer,
      items,
      total,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
      .then(({ id }) => {
        if (id) {
          alert("Su orden: " + id + " ha sido completada!");
        }
      })
      .finally(() => {
        setBuyer(initialValues);
        onRemove();
      });
  };

  const handleChange = (ev) => {
    setBuyer({ ...buyer, [ev.target.name]: ev.target.value });
  };

  if (!items.length) {
    return <a href="/">volver</a>;
  }
  return (
    <>
      <h1>Carrito</h1>
      <button onClick={onRemove}>Remover productos</button>
      {items.map((item, index) => (
        <section key={item.id || index}>
          <div>{item.titulo}</div>
          <img
            src={item.imagen}
            alt={item.titulo}
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "250px",
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "16px",
            }}
          />
          <p>Cantidad: {item.count}</p>
          <p>Precio: {item.price}</p>
          <div
            onClick={() => deleteItem(item.id)}
            style={{
              cursor: "pointer",
              color: "red",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "darkred")}
            onMouseLeave={(e) => (e.target.style.color = "red")}
          >
            Borrar
          </div>{" "}
        </section>
      ))}
      <h4>Total: {total}</h4>
      <form
        className="p-3 border rounded shadow-sm bg-light"
        style={{ maxWidth: "300px", fontSize: "0.9rem" }}
      >
        <div className="mb-3">
          <label className="form-label fw-bold">Nombre</label>
          <input
            type="text"
            name="name"
            value={buyer.name}
            onChange={handleChange}
            className="form-control form-control-sm"
            placeholder="Nombre"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Teléfono</label>
          <input
            type="number"
            name="phone"
            value={buyer.phone}
            onChange={handleChange}
            className="form-control form-control-sm"
            placeholder="Teléfono"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Email</label>
          <input
            type="email"
            name="email"
            value={buyer.email}
            onChange={handleChange}
            className="form-control form-control-sm"
            placeholder="Email"
          />
        </div>
      </form>

      <button
        onClick={handleOrder}
        className="btn btn-success btn-sm mt-3"
        style={{ width: "100%", maxWidth: "300px" }}
      >
        Comprar
      </button>
    </>
  );
};
