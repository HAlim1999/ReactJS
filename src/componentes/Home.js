import React, {useEffect, useState}from 'react'
import "./Home.css"
import fondo from "./imgIcon/fondo.webp"
import Productos from "./Productos"
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HandshakeIcon from '@mui/icons-material/Handshake';
import {useParams} from "react-router-dom";


function Home(props) {
  const productos = [{id:2, producto:"Counter Strike",precio:2000, stock:2,valorInicial:1, imagen:"https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/03/27/15537190644260.png",categoria:"video-juegos",ranking:5},

  {id:3, producto:"Far Cry",precio:3000,stock:4,valorInicial:1, imagen:"https://image.api.playstation.com/vulcan/ap/rnd/202012/1522/MEtJOQHXbVy0ux0Emo9HInke.jpg?w=440&thumb=false",categoria:"video-juegos",ranking:3},

  {id:4, producto:"Crysis",precio:3500,stock:5, valorInicial:1, imagen:"https://assets.reedpopcdn.com/crysis-remastered-recensione-1601127328937.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/crysis-remastered-recensione-1601127328937.jpg",categoria:"video-juegos",ranking:4},

  {id:5,producto:"Batidora",precio:79999,stock:2,valorInicial:1,imagen:"https://http2.mlstatic.com/D_NQ_NP_866484-MLA46429803856_062021-O.webp",categoria:"electrodomesticos",ranking:5},

  {id:1,producto:"Celular",precio:59999,stock:26,valorInicial:1,imagen:"https://onlygames.com.ar/wp-content/uploads/2022/05/moto-g52-717x658.jpg",categoria:"tecnologia",ranking:5},

  {id:6,producto:"Sillon",precio:38414,stock:5,valorInicial:1,imagen:"https://http2.mlstatic.com/D_NQ_NP_852103-MLA50512271786_062022-O.webp",categoria:"muebles",ranking:3},

  {id:7,producto:"Caja de herramientas",precio:51990,stock:4,valorInicial:1,imagen:"https://http2.mlstatic.com/D_NQ_NP_705931-MLA50531759069_062022-O.webp",categoria:"herramientas",ranking:5}];

  const [Items,setItems] = useState([]);
  const {categoria} = useParams();
  
  useEffect(() => {
      let promiseItems = new Promise((resolve, reject) => {
          setTimeout(
              ()=>{
                  resolve(productos);
              },2000);
      })
      promiseItems.then(
          (respuesta)=>{
            if(categoria){
                setItems(respuesta.filter(producto=> producto.categoria == categoria));
            }else{
                setItems(respuesta);
            }
              
              
          }
      ).catch (error => console.log(error));  

  },[categoria]);


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