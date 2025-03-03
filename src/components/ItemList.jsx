import { Item } from "./Item";

export const ItemList = ({ items }) =>
  items.map((item) => <Item key={item.id} {...item} />);
