import Card from "../Card";
import { useState } from "react";

const ProductList = ({ productos }) => {
  const [selectedCategory, setSelectedCategory] = useState('');function handleCategoryClick(category) {
    setSelectedCategory(category);
  }

  function filterProductsByCategory(productos, category) {
    if (category === '') {
      return productos;
    } else {
      return productos.filter(product => product.category === category);
    }
  }

  const filteredProducts = filterProductsByCategory(productos, selectedCategory);

  return (
    <div>
      <div>
        <button onClick={() => handleCategoryClick('electronics')}>
          Electronics
        </button>
        <button onClick={() => handleCategoryClick('jewelery')}>
          Jewelery
        </button>
        <button onClick={() => handleCategoryClick("men's clothing")}>
          Men's Clothing
        </button>
        <button onClick={() => handleCategoryClick("women's clothing")}>
          Women's Clothing
        </button>
        <button onClick={() => handleCategoryClick('')}>
          All Categories
        </button>
      </div>
      <ul>
        {filteredProducts.map((producto) => (
         <Card key={producto.id} producto={producto}/>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;