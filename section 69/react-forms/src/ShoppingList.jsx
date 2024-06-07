import { v4 as uuid } from "uuid";
import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";

export default function ShoppingList() {
  const [shoppingList, setShoppingList] = useState([
    { id: 1, product: "Milk", quantity: 3 },
    { id: 2, product: "Bread", quantity: 12 },
    { id: 3, product: "Eggs", quantity: 1 },
  ]);

  const addItem = (newItem) => {
    setShoppingList((curShoppingList) => {
        return [...curShoppingList, { id: uuid(), ...newItem }]
    })
  }

  return (
    <>
      <h1>Shopping List</h1>
      <ul>
        {shoppingList.map((item) => {
          return (
            <li key={item.id}>
              {item.product} - {item.quantity}
            </li>
          );
        })}
      </ul>
      <ShoppingListForm addItem={addItem} />
    </>
  );
}
