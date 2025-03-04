// 2. Shopping cart (3p)
// Visa innehållet i shoppingCart genom att rendera en komponent ShoppingItem
// för varje objekt i shoppingCart.
// ShoppingItem ska visa namnet och priset på varan. amount (antal) ska visas i ett
// input-fält. När man ändrar värdet i input-fältet ska shoppingCart uppdateras
// med det nya värdet.
// Under shoppinglistan ska det stå total price, med det totala priset för alla
// varor i shoppingCart.




import { useState } from "react";

const initialShoppingCart = [
  { name: "Apple", price: 3, amount: 1, id: 1 },
  { name: "Banana", price: 2, amount: 1, id: 2 },
  { name: "Cherry", price: 3, amount: 1, id: 3 },
  { name: "Durian", price: 4, amount: 1, id: 4 },
  { name: "Eggplant", price: 5, amount: 1, id: 5 },
];

function ShoppingItem({ item, onAmountChange }) {
  return (
    <div>
      <p>
        {item.name} - ${item.price}
      </p>
      <input
        type="number"
        value={item.amount}
        onChange={(e) => onAmountChange(item.id, Number(e.target.value))}
        min="0"
      />
    </div>
  );
}

export default function Question2() {
  const [shoppingCart, setShoppingCart] = useState(initialShoppingCart);

  const handleAmountChange = (id, newAmount) => {
    setShoppingCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, amount: newAmount } : item
      )
    );
  };

  const totalPrice = shoppingCart.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>
      {shoppingCart.map((item) => (
        <ShoppingItem
          key={item.id}
          item={item}
          onAmountChange={handleAmountChange}
        />
      ))}
      <h2>Total Price: ${totalPrice}</h2>
    </div>
  );
}

