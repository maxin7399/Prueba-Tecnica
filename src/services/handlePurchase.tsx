import { Cart } from "../types/Cart";
import { Product } from "../types/Product";

export const handlePurchase = (
  setCart: React.Dispatch<React.SetStateAction<Cart>>
) => {
  alert("¡Comprado con éxito!"); 
  setCart({});
};


  
  export const AddCart = (
    product: Product,
    setCart: React.Dispatch<React.SetStateAction<Cart>>
  ) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };

      if (updatedCart[product.id]) {
        updatedCart[product.id].count += 1;
      } else {
        updatedCart[product.id] = {
          name: product.title,
          count: 1,
          price: product.price,
        };
      }

      return updatedCart;
    });
  };