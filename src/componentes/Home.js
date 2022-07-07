import React from 'react'
import "./Home.css"
import fondo from "./imgIcon/fondo.webp"
import Productos from "./Productos"
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HandshakeIcon from '@mui/icons-material/Handshake';

function Home() {
  return (
    <div className='home'>

        <div className='home_container'>
              
              <img src={fondo} alt="" className="home_image"/> 

              <div className='promo'>
                    <div className='card'>
                        <CreditCardIcon/>
                        <h1>Tarjeta de Credito</h1>
                        <p>Ver promociones bancarias</p>
                    </div>

                    <div className='card'>
                        <CreditCardIcon/>
                        <h1>Tarjeta de Debito</h1>
                        <p>Ver mas</p>
                    </div>

                    <div className='card'>
                        <HandshakeIcon/>
                        <h1>Cuotas sin tarjeta</h1>
                        <p>+ Info</p>
                    </div>
              </div> 
                    
              <div className="home_row">
              <Productos/>
               
              </div>
              <div className="home_row">

            </div>
        </div>

    </div>
  )
}

export default Home