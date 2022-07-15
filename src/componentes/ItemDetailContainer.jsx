import React , {useEffect, useState}from 'react';
import ItemDetail from './ItemDetail';
import './ItemDetail.css';
import {useParams} from "react-router-dom";




function ItemDetailContainer() {


const detalles = [{id:1,
  frente:"https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/g/5/g52-negro-frente_1.png"
  ,dorso:"https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/g/5/g52-negro-dorso.png"
  ,frentedorso:"https://www.lavoz.com.ar/resizer/NCzjIwp6a9zg3pxFILPHIQUM1J0=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/6KBTURFWKVFFLFQEX7WD6R2LAA.jpg"
  ,lateral:"https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/g/5/g52-negro-perfil.png"
  ,titulo:"Celular Motorola Moto G52 128 gb Negro 6gb Ram"
  ,precio:59999
  ,cuotas:"Pagar en 3 x $19999 sin interes"
  ,color:"Negro"
  ,caracteristicas:"Capacidad de la batería: 5,000 mAh.Generación de banda ancha: 4G Red móvil: CDMA, GSM, Prepago, Wcdma Velocidad de reloj: 1 MHz"
},{	
  id:2,
    frente:"https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/03/27/15537190644260.png"
    ,dorso:"https://fotos.perfil.com/2022/03/15/trim/720/410/que-es-csgo-y-como-aprender-a-jugar-1326553.jpg?webp"
    ,frentedorso:"https://fotos.perfil.com//2022/03/15/900/0/que-es-csgo-y-como-aprender-a-jugar-1326556.jpg"
    ,lateral:"https://fotos.perfil.com//2022/03/15/900/0/que-es-csgo-y-como-aprender-a-jugar-1326554.jpg"
    ,titulo:"Counter Strike"
    ,precio:2000
    ,cuotas:"Pagar en 3 x $667"
    ,color:""
    ,caracteristicas:"SO: Windows® 7/Vista/XP.Procesador: Intel® Core™ 2 Duo E6600 o AMD Phenom™ X3 8750.Memoria: 2 GB de RAM.Gráficos: Tarjeta gráfica de 256 MB o más compatible con DirectX 9 y Pixel Shader 3.0. DirectX: Versión 9.0c.Almacenamiento: 15 GB de espacio disponible."
  },
  { id:3,
    frente:"https://image.api.playstation.com/vulcan/ap/rnd/202012/1522/MEtJOQHXbVy0ux0Emo9HInke.jpg?w=440&thumb=false"
    ,dorso:"https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/05/far-cry-6-armas-la-macarena.jpg?resize=1280%2C720&quality=80&ssl=1"
    ,frentedorso:"https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/05/giancarlo-esposito-far-cry-6.png?resize=1280%2C720&quality=80&ssl=1"
    ,lateral:"https://phantom-elmundo.unidadeditorial.es/bf93f3288500bcf3d8b942758f1c3a3d/resize/473/f/webp/assets/multimedia/imagenes/2021/10/06/16335321392748.jpg"
    ,titulo:"Far Cry"
    ,precio:3000
    ,cuotas:"Pagar en 3 x $1000"
    ,color:""
    ,caracteristicas:"Sistema operativo Windows 10 (versiones de 64 bits) Procesador AMD Ryzen 5 3600X a 3,8 GHz o Intel Core i7-7700 a 3,6 GHz (requiere soporte de AVX, AVX2 y SSE 4.2) RAM 16 GB (modo de doble canal) Tarjeta gráfica AMD RX Vega 64 (8 GB) o NVIDIA GeForce GTX 1080 (8 GB). Disco duro con 60 GB de espacio disponible."
  },
  { id:4,
    frente:"https://assets.reedpopcdn.com/crysis-remastered-recensione-1601127328937.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/crysis-remastered-recensione-1601127328937.jpg"
    ,dorso:"https://i.blogs.es/4ac8a4/crysis-remastered/1366_2000.webp"
    ,frentedorso:"https://i.blogs.es/801bd4/captura-switchc/1366_2000.jpg"
    ,lateral:"https://i.blogs.es/c5105f/crysis-remastered-02/1366_2000.jpeg"
    ,titulo:"Crysis"
    ,precio:3500
    ,cuotas:"Pagar en 3 x $1667"
    ,color:""
    ,caracteristicas:"Sistema operativo: Windows 10 (64 bits)Procesador: Intel(R) Core(TM) i5-3450 / AMD Ryzen 3. Memoria RAM: 8 GB. Almacenamiento: 20 GB. Direct X: DXII.Tarjeta gráfica: NVIDIA GeForce GTX 1050 TI /AMD Radeon 470. Memoria gráfica: 4 GB para 1080p"
  },
  { id:5,
    frente:"https://http2.mlstatic.com/D_NQ_NP_866484-MLA46429803856_062021-O.webp"
    ,dorso:"https://noticias.bidcom.com.ar/wp-content/uploads/2021/12/Batidora-04.jpg"
    ,frentedorso:"https://jopco.net/wp-content/uploads/2020/11/KA-KSM8990ER-623x623.jpg"
    ,lateral:"https://usaelectrodomesticos.com.co/wp-content/uploads/2021/10/KSM85PBER_Additional_1000X1000_P170385_3.jpg"
    ,titulo:"Batidora"
    ,precio:59999
    ,cuotas:"Pagar en 3 x $19999"
    ,color:"Rojo"
    ,caracteristicas:"Potencia:575 w Voltaje:220/50 v/hz Dimensiones: 417x371x287 mm. Peso:12.5 kg Capacidad:5.7 litros Movimiento planetario:Si - Velocidades:10"
  },
  { id:6,
    frente:"https://http2.mlstatic.com/D_NQ_NP_852103-MLA50512271786_062022-O.webp"
    ,dorso:"https://sommiercenter.com/media/catalog/product/cache/c8b2ad1aadf9f419df0c10a914db6ced/4/6/46-270003.jpg"
    ,frentedorso:"https://d2ye0ltusw47tz.cloudfront.net/513238-thickbox_default/sillon-bocaccio-2-cuerpos-de-pana-gris-oscuro-full-confort.jpg"
    ,lateral:""
    ,titulo:"Sillon"
    ,precio:38414
    ,cuotas:"Paga en 4 cuotas de $10000"
    ,color:"Gris"
    ,caracteristicas:"Sofa 2 cuerpo chenille Medida: ancho 1,8 mts, profundidad 0,70 mts altura 0,75 mts Almohadón del asiento de placa 10 cm. Esqueleto de saligna encolado y clavado, con refuerzos que le dan rigidez"
  },
  { id:7,
    frente:"https://http2.mlstatic.com/D_NQ_NP_705931-MLA50531759069_062022-O.webp"
    ,dorso:"https://comercialtlaquepaque.com/ImageHandler.ashx?Foto=Grande&ID=12874"
    ,frentedorso:"https://comercialtlaquepaque.com/ImageHandler.ashx?Foto=Grande&ID=12878"
    ,lateral:"https://comercialtlaquepaque.com/ImageHandler.ashx?Foto=Grande&ID=12879"
    ,titulo:"Caja de herramientas Stanley"
    ,precio:51990
    ,cuotas:"Paga en 6 cuotas de $10000"
    ,color:""
    ,caracteristicas:"- Maletín de plástico Calidad Fat Max (alto rendimiento) Peso aproximado: 15 kg Cierres metálicos precisos y resistentes Llave crique 1/4 Tubos largos HEX 4/5/6/7/8/9/10/11/12mmTubos cortos HEX 4/5/5,5/6/6,5/7/8/9/10/11/12mm.Tubos Torx de seguridad T10/T15/T20/T25/T27/T30/T40 Extensiones de 2 y 4 Junta universal Adaptador de puntas Mango destornillador"
  }];

const [Detalles,setDetalles] = useState([]);
const {id} = useParams();

useEffect(() => {
  let promiseDetalle = new Promise((resolve, reject) => {
      setTimeout(
          ()=>{
              resolve(detalles);
          },2000);
  })
  promiseDetalle.then(
      (datos)=>{

            setDetalles(datos.filter(detalles=>detalles.id == id));          
          
      }
  ).catch (error => console.log(error));  

},[]);


  return (
      <div className="container2">

            <ItemDetail datos={Detalles}/>
        
      </div>
  )
}

export default ItemDetailContainer