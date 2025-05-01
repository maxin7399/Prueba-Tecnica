import { Product } from "../types/Product";
function Card({ Product } : {Product : Product }) {  
    return (
      <>
        <h1>Productos:</h1>
            <div>
              <img src={Product.image} width ="100px" height="100px"/>
              <p>{Product.id}</p>
              <p>{Product.category}</p>
              <p>{Product.title}</p>
              <p>Descripcion: {Product.description}</p>
              <p>Calificacion: {Product.rating["rate"]}</p>
              <p>Numero de reseñas: {Product.rating["count"]}</p>
              <p>Precio: {Product.price}</p>
            </div>
          
      </>
    );
}

export default Card;