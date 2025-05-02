import "./App.css";
import { useState, useEffect } from "react";
import { Product } from "./types/Product";
import { getProducts } from "./services/api";
import Card from "./components/Card";
import CartView from "./components/CarView";
import { AddCart, handlePurchase } from "./services/handlePurchase";
import { Cart } from "./types/Cart";

function App() {
  // Estado para almacenar la lista de productos obtenidos de la API
  const [product, setProduct] = useState<Product[]>([]);

  // Estado para almacenar los productos añadidos al carrito
  const [cart, setCart] = useState<Cart>({});

  // Estado para almacenar el total calculado del carrito
  const [total, setTotal] = useState<number>(0);

  // Función para disminuir la cantidad de un producto en el carrito
  const DecrementCart = (id: number) => {
    setCart((prevCart) => {
      // Copiamos el carrito actual para evitar mutar directamente el estado
      const updatedCart = { ...prevCart };

      // Verificamos si el producto existe en el carrito
      if (updatedCart[id]) {
        // Si la cantidad es mayor a 1, la decrementamos
        if (updatedCart[id].count > 1) {
          updatedCart[id].count -= 1;
        } else {
          // Si la cantidad es 1, eliminamos el producto del carrito
          delete updatedCart[id];
        }
      }

      return updatedCart;
    });
  };

  // useEffect para recalcular el total cada vez que el carrito cambia
  useEffect(() => {
    const newTotal = Object.values(cart).reduce(
      (sum, item) => sum + item.count * item.price, // Multiplicamos cantidad por precio de cada producto
      0 // Inicializamos el total en 0
    );
    setTotal(newTotal); // Actualizamos el estado del total
  }, [cart]); // Dependemos del estado del carrito

  // useEffect para obtener los datos de los productos al cargar el componente
  useEffect(() => {
    getProducts().then((data) => setProduct(data)); // Llamamos a la API y actualizamos el estado de productos
  }, []); // Solo se ejecuta una vez al montar el componente

  return (
    <center>
      <div className="App">
        {/* Sección de productos */}
        <div className="products">
          <h2>Productos</h2>
          {product.map((item) => {
            return (
              <div key={item.id}>
                {/* Mostramos la tarjeta de producto */}
                <Card Product={item} />
                {/* Botón para agregar al carrito */}
                <button onClick={() => AddCart(item, setCart)}>
                  Agregar al carrito
                </button>
              </div>
            );
          })}
        </div>

        {/* Sección del carrito */}
        <div className="cart">
          <CartView
            cart={cart} // Pasamos el carrito actual como prop
            onDecrement={DecrementCart} // Pasamos la función para disminuir cantidades
            total={total} // Pasamos el total calculado
            onPurchase={() => handlePurchase(setCart)} // Pasamos la función para manejar la compra
          />
        </div>
      </div>
    </center>
  );
}

export default App;
