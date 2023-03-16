import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import Cart from "../Cart"


const NavBar = () => {
  return (
    <nav className={styles.container}>
      <Link to="/">
          <p>Home</p>
      </Link>
      <Link to="products">
          <p>Products</p>    
      </Link>
      <Cart />
        
    </nav>
  );
};

export default NavBar;