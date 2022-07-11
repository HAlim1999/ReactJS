import React, { Fragment, useRef} from 'react'
import './Productos.css'

function Itemcount() {
    const refCaja = useRef();
    const stock = 5
  
    function restar(){
      if(Number(refCaja.current.innerHTML) === 1){
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
    <Fragment>

      <div className="cantidad">
          <button onClick={restar}>-</button>
          <div ref={refCaja} className="caja">1</div>
          <button onClick={sumar}>+</button>
      </div>

      <button>Agregar al Carrito</button>
  
  </Fragment>
  )
};

export default Itemcount