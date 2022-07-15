import React, {Fragment} from 'react';
import './Productos.css';
import StarIcon from '@mui/icons-material/Star';
import Itemcount from './Itemcount';

function Productos(props) {

 
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
                      {console.log(cadaItem.ranking)}
                      {Array(cadaItem.ranking).fill().map((_, i)=>(
                        <p><StarIcon/></p>
                      ))}               
                  </div>

              </div>
              
                <img src={cadaItem.imagen}/>
                <Itemcount stock={cadaItem.stock} valorInicial={cadaItem.valorInicial} id={cadaItem.id}/>
                <div>
                  <p>Stock disponible: {cadaItem.stock}</p>
                </div>

            </div>

            )}
    </Fragment>

  )
  
}

export default Productos