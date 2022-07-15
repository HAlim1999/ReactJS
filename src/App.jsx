import React from 'react';
import './App.css';
import Header from './componentes/Header';
import Home from './componentes/Home';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
          <div className="app">
              <Header/>
          </div>
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="/detail" element={<ItemDetailContainer/>}/>
          <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
          <Route path="/categorias/:categoria" element={<Home/>} />
        </Routes>
    </Router>
  );
}

export default App;
