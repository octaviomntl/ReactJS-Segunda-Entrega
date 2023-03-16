import { useParams } from "react-router-dom";

const ProductItem = ({ productos }) => {
    const { id } = useParams() // obtenemos el id con el metodo useParams
    const producto = productos.find((producto) => producto.id == id); // del array productos que le estamos pasando como parametro, que devuelva el primero que encuentre con el mismo id del producto
    // tambien se puede hacer un fetch para que vaya a buscar cada producto individual, pero tendria que volver a pedir el producto a la api
  return (
    <div>
        <h1>{producto.title}</h1>
        <p>Stars: 5/{producto.rating.rate}</p>
        <p>Category: {producto.category}</p>
        <img src={producto.image} alt="" width={200}/>
        <p>Price: ${producto.price}</p>
        <p>{producto.description}</p>
    </div>
  );
};

export default ProductItem;