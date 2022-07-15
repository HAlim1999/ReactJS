import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import logo from "./imgIcon/logo.png"
import {Link} from 'react-router-dom';


function Header() {
  return (

<div className="container">
        <div className="header">
            <Link to={"/"}><img src={logo} className="header_logo"/></Link>{/*Logo de Amazon*/}

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

                                    <Link to="/categorias/tecnologia"><li>Tecnología</li></Link>
                                    <Link to="/categorias/video-juegos"><li>Video Juegos</li></Link>
                                    <Link to="/categorias/muebles"><li>Hogar y Muebles</li></Link>
                                    <Link to="/categorias/electrodomesticos"><li>Electrodomésticos</li></Link>
                                    <Link to="/categorias/herramientas"><li>Herramientas</li></Link>

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