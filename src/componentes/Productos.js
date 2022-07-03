import React from 'react'
import './Productos.css'
import KeyboardIcon from '@mui/icons-material/Keyboard';
import CS from './imgIcon/cs.jpg'

function Productos() {
  return (
    <div className="product">

      <div className="product_info">
          <p>Counter Strike</p>
          <p className="product_price">
              <small>$</small>
              <strong>2000</strong>
          </p>
          <div className="product_rating">
            <p><KeyboardIcon/></p>
          </div>
      </div>
      
        <img src={CS}/>

        <button>Agregar al Carrito</button>
    
    </div>
  )
}

export default Productos