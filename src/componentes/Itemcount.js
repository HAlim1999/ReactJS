import React, { Fragment, useRef} from 'react'
import './Productos.css'
import {Link} from 'react-router-dom';
import swal from 'sweetalert';


function Itemcount(props) {
    const refCaja = useRef();
    const stock = props.stock;
    const valorInicial = props.valorInicial;
    const id = props.id;
    
  
    function restar(){
      if(Number(refCaja.current.innerHTML) === 1){
        refCaja.current.innerHTML = 1
      }else{
      refCaja.current.innerHTML = (Number(refCaja.current.innerHTML)-1)};
    }
  
    function sumar(){
      if(Number(refCaja.current.innerHTML)>=stock){
        swal("Stock insuficiente");
        
    }else{
      refCaja.current.innerHTML = (Number(refCaja.current.innerHTML)+1)
  
    }
}


  return (
    <Fragment>

      <div className="cantidad">
          <button onClick={restar}>-</button>
          <div ref={refCaja} className="caja">{valorInicial}</div>
          <button onClick={sumar}>+</button>
      </div>

      <Link to={`/detail/`+props.id}><button className='boton'>Ver Detalles / Comprar</button></Link>
      
  </Fragment>
  )
};

export default Itemcount