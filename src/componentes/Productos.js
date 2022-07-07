import React, { useRef } from 'react'
import './Productos.css'
import KeyboardIcon from '@mui/icons-material/Keyboard';
import CS from './imgIcon/cs.jpg'

function Productos() {
  const refCaja = useRef();
  const stock = 5

  function restar(){
    if(Number(refCaja.current.innerHTML)==1){
      refCaja.current.innerHTML = 1
    }else{
    refCaja.current.innerHTML = (Number(refCaja.current.innerHTML)-1)};
  }

  function sumar(){
    if(Number(refCaja.current.innerHTML)>=stock){
      alert('Productos fuera de stock');
  }else{
    refCaja.current.innerHTML = (Number(refCaja.current.innerHTML)+1)

  }

}


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

        <div className="cantidad">
            <button onClick={restar}>-</button><div ref={refCaja} className="caja">1</div><button onClick={sumar}>+</button>
        </div>

        <button>Agregar al Carrito</button>
    
    </div>
  )
}

export default Productos