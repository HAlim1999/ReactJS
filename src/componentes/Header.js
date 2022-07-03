import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import logo from "./imgIcon/logo.png"


function Header() {
  return (

<div className="container">
        <div className="header">
            <img src={logo} className="header_logo"/> {/*Logo de Amazon*/}

            <div className="header_search">
              <input className="header_searchInput" type="text" placeholder='Buscar productos'/>
              <SearchIcon 
              className="header_searchIcon"/>
            </div> {/*Barra de busqueda*/}

            <div className="header_nav">
                <div className="header_options">

                    <span className="header_optionsLineTwo">Crea tu cuenta</span>
                </div>

                <div className="header_options">
                    <span className="header_optionsLineTwo">Ingresá</span>
                </div>

                <div className="header_options">
                    <span className="header_optionsLineTwo">Mis compras</span>
                </div>

                <div className="header_optionBasket">
                    <AddShoppingCartIcon/>
                    <span className="header_optionsLineTwo header_basketCount">0</span>
                </div>
            </div>  
        </div>
           {/*Prueba segunda linea*/}
        

           <div className="header">

           <div className="header_nav">

                <div className="header_options">
                    <ul className="menu">
                        <li><a className="header_optionsLineTwo">Categorías</a>
                              <ul>
                                    <li>Vehículos</li>
                                    <li>Inmuebles</li>
                                    <li>Supermercado</li>
                                    <li>Tecnología</li>
                                    <li>Hogar y Muebles</li>
                                    <li>Electrodomésticos</li>
                                    <li>Herramientas</li>
                                    <li>Construcción</li>
                                    <li>Deportes y Fitnes</li>
                                    <li>Accesorios para Vehículos</li>
                                    <li>Moda</li>
                                    <li>Juegos y Juguetes</li>
                                    <li>Bebés</li>
                                    <li>Belleza y Cuidado Personal</li>
                              </ul>
                        </li>
                    </ul>

                </div>

               <div className="header_options2">
                   <span className="header_optionsLineTwo">Ofertas</span>
               </div>

               <div className="header_options2">
                   <span className="header_optionsLineTwo">Supermercado</span>
               </div>

               <div className="header_options2">
                  <span className="header_optionsLineTwo">Moda</span>
               </div>

           </div>  
       </div>
  </div>
  )
}

export default Header