import "./App.css";
import { useState, useEffect } from "react";
import { Product } from "./types/Product";
import { getProducts } from "./services/api";
import Card from "./components/Card";
import CartView from "./components/CarView"; 

interface Cart {
  [id: number]: {
    name: string;
    count: number;
  };
}

function App() {
  const [product, setProduct] = useState<Product[]>([]);
  const [cart, setCart] = useState<Cart>({});

  const AddCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };

      if (updatedCart[product.id]) {
        updatedCart[product.id].count += 1;
      } else {
        updatedCart[product.id] = {
          name: product.title,
          count: 1,
        };
      }

      console.log({ updatedCart });
      return updatedCart;
    });
  };

  useEffect(() => {
    getProducts().then((data) => setProduct(data));
  }, []);

  return (
    <div className="App">
      <div className="products">
        <h2>Productos</h2>
        {product.map((item) => {
          return (
            <div key={item.id}>
              <Card Product={item} />
              <button
                onClick={() => {
                  AddCart(item);
                }}
              >
                Añadir
              </button>
            </div>
          );
        })}
      </div>

      <div className="cart">
        <CartView cart={cart} /> 
      </div>
    </div>
  );
}

export default App;
