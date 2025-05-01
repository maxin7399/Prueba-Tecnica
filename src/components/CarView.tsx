import React from "react";

interface CartProps {
  cart: {
    [id: number]: {
      name: string;
      count: number;
    };
  };
}

const CartView: React.FC<CartProps> = ({ cart }) => {
  return (
    <div>
      <h2>Carrito</h2>
      {Object.entries(cart).length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {Object.entries(cart).map(([id, { name, count }]) => (
            <li key={id}>
              {name}: {count}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartView;
