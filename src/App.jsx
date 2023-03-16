import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import axios from "axios"
import './App.css'
import ProductList from './components/ProductList';
import NavBar from './components/NavBar';
import ProductItem from "./components/ProductItem";
import { Link } from "react-router-dom"

function App() {
  const [productos, setProductos] = useState([])
  
  const getProductos = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProductos(res.data)
  }
  
  useEffect(() => {
    getProductos();
  }, []);
  
  return (
    <div>
      <header >
        <Link to="/"><h1>HGshop</h1></Link>
        <NavBar /> 
      </header>
      
      <Routes>
        <Route 
          path ="/" 
          element={
            <p id='greeting-p'>Bienvenido a HGshop.</p>
          }
        />
        <Route 
          path="/products" 
          element={<ProductList productos={productos} />} 
        />
        <Route 
          path="/products/:id" 
          element={<ProductItem productos={productos} />} 
        />
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </div>
  );
}

export default App;
