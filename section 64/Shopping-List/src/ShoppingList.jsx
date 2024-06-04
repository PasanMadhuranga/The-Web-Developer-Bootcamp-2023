import ShoppingListItem from "./ShoppingListItem";

function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <ShoppingListItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default ShoppingList;
