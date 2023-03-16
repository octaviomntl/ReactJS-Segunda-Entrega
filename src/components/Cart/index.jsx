import { useState } from 'react';


const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <p onClick={handleClick}>Cart</p>
      {isOpen && (
        <div
        style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'black',
            padding: '2rem',
            zIndex: 1,
          }}
        >
          <p>El carrito de compras será habilitado próximamente.</p>
          <button onClick={handleClick}>Cerrar</button>
        </div>
      )}
    </div>
  );
}

export default Cart;