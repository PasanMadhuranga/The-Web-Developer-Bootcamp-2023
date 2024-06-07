import { useState } from "react";

export default function ShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({
    product: "",
    quantity: "",
  });

  const handleChange = (event) => {
    setFormData((curFormData) => {
      return {
        ...curFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

    const handleSubmit = (event) => {
        event.preventDefault()
        addItem(formData)
        setFormData({
            product: "",
            quantity: ""
        })
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="product">Product: </label>
          <input
            type="text"
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            placeholder="product name"
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity: </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="quantity"
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </>
  );
}
