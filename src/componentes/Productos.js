import React, {Fragment, useRef} from 'react'
import './Productos.css'
import KeyboardIcon from '@mui/icons-material/Keyboard';
import CS from './imgIcon/cs.jpg';
import Itemcount from './Itemcount';

function Productos(props) {
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
      {props.items.map(
        cadaItem =>
        

            <div className="product" key={cadaItem.id}>

              <div className="product_info">
                  <p>{cadaItem.producto}</p>
                  <p className="product_price">
                      <small>$</small>
                      <strong>{cadaItem.precio}</strong>
                  </p>
                  <div className="product_rating">
                    <p><KeyboardIcon/></p>
                  </div>
              </div>
              
                <img src={CS}/>

                <Itemcount/>
            
            </div>
            )}
    </Fragment>

  )
}

export default Productos