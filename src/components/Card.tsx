import { useState, useEffect } from "react";
import { Product } from "../types/Product";

function Card() {
  const [product, setProduct] = useState<Product[]>([]);
  const API_URL = "https://fakestoreapi.com/products"; //TODO: Esta URL debe estar en .env (variables de entorno)
    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(dat =>  setProduct(dat));
    },[]);
  
    return (
      <>
        <h1>Productos:</h1>
        {product.map((item) => {
          return (
            <div>
              <img src={item.image} width ="100px" height="100px"/>
              <p>{item.id}</p>
              <p>{item.category}</p>
              <p>{item.title}</p>
              <p>Descripcion: {item.description}</p>
              <p>Calificacion: {item.rating["rate"]}</p>
              <p>Numero de reseñas: {item.rating["count"]}</p>
              <p>Precio: {item.price}</p>
            </div>
          );
        })}
        ;
      </>
    );
}

export default Card;