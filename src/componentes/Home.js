import React, {useEffect, useState}from 'react'
import "./Home.css"
import fondo from "./imgIcon/fondo.webp"
import Productos from "./Productos"
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HandshakeIcon from '@mui/icons-material/Handshake';

function Home(props) {
  const productos = [{id:1, producto:"Counter Strike",precio:2000},{id:2, producto:"Far Cry",precio:3000},{id:3, producto:"Crysis",precio:3500}];

  const [Items,setItems] = useState([]);
  console.log(Items);

  useEffect(() => {
      let promiseItems = new Promise((resolve, reject) => {
          setTimeout(
              ()=>{
                  resolve(productos);
              },2000);
      })
      promiseItems.then(
          (respuesta)=>{
              setItems(respuesta);
              
          }
      ).catch (error => console.log(error));  

  },[]);


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

                 <Productos items={Items}/>
               
              </div>
              <div className="home_row">

            </div>
        </div>

    </div>
  )
}

export default Home