import { createContext, useState } from "react";

export const CartContext = createContext();

export const Provider = ({ children }) => {
  const [items, setItems] = useState([]);

  const onAdd = (item) => {
    const { stock, ...rest } = item;

    const alreadyExists = items.some(
      (individualItem) => individualItem.id === rest.id
    );

    if (!alreadyExists) {
      setItems((prev) => [...prev, rest]);
    } else {
      const actualizarProductos = items.map((individualItem) => {
        if (individualItem.id === rest.id)
          return {
            ...individualItem,
            count: individualItem.count + rest.count,
          };
        else return individualItem;
      });

      setItems(actualizarProductos);
    }
  };

  const deleteItem = (id) => {
    const otrosProductos = items.filter((producto) => producto.id !== id);
    setItems(otrosProductos);
  };

  const onRemove = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, deleteItem, onAdd, onRemove }}>
      {children}
    </CartContext.Provider>
  );
};
