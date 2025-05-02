import React from "react";
import { CartProps } from "../types/CartProps";

// Componente funcional para mostrar el carrito
const CartView: React.FC<CartProps> = ({
  cart, // Carrito actual
  onDecrement, // Función para disminuir cantidades
  total, // Total calculado
  onPurchase, // Función para manejar la compra
}) => {
  return (
    <div>
      <h2>Carrito</h2>
      {/* Si el carrito está vacío, mostramos un mensaje */}
      {Object.entries(cart).length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {/* Mostramos cada producto en el carrito */}
          {Object.entries(cart).map(([id, { name, count, price }]) => (
            <li key={id}>
              {name} (Precio: ${price}): {count}
              {/* Botón para eliminar o disminuir la cantidad */}
              <button onClick={() => onDecrement(Number(id))}>
                Eliminar 🗑️
              </button>
            </li>
          ))}
        </ul>
      )}
      {/* Si el carrito tiene productos, mostramos el total y el botón de pago */}
      {Object.entries(cart).length > 0 && (
        <div>
          <p>Total: ${total.toFixed(2)}</p>
          <button onClick={onPurchase}>Proceder al pago</button>
        </div>
      )}
    </div>
  );
};

export default CartView;