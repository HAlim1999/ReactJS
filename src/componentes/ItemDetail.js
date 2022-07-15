import React, {useRef,Fragment } from 'react'
import './ItemDetail.css'
import './ItemDetailContainer.jsx';

function ItemDetail(props){

  const Imagen = useRef();

  function cambio(e){
    Imagen.current.src = e.target.src;
  }

  return (
    

    <Fragment>

    {props.datos.map(
      cadaItem =>
          <div className="container2" key={cadaItem.id}>

                  <div className="imgLateral">
                      <img src={cadaItem.frente} alt="" id="" onMouseOver={cambio}/>
                      <img src={cadaItem.dorso} alt="" id="" onMouseOver={cambio}/>
                      <img src={cadaItem.frentedorso} alt="" id="" onMouseOver={cambio}/>
                      <img src={cadaItem.lateral} alt="" id="" onMouseOver={cambio}/>
                  </div>

                  <div className="imgPrincipal" id="hero">
                      <img ref={Imagen} src={cadaItem.frente} alt=""/>
                  </div>

                  <div className="detalle">
                      <h1>{cadaItem.titulo}</h1>
                      <p  className="precio">${cadaItem.precio}</p>
                      <p className="datos">{cadaItem.cuotas}</p>
                      <p className="datos">Ver los medios de pago</p>
                      <p className="datos">Color: {cadaItem.color}</p>
                      <p className="datos">{cadaItem.caracteristicas}
                      </p>
                      
                      <p className="datos">Stock Disponible</p>
                      <button>Comprar ahora</button>
                  </div>
              
          </div>
          )}
    </Fragment>
  )
}

export default ItemDetail