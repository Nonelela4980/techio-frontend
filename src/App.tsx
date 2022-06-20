import React from 'react';
import './App.scss';
import Header from './components/components/Header';
import ProductList from './components/components/ProductList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/home';
import ProductInfo from './components/components/ProductInfo';
import Login from './components/components/Login';
import Register from './components/components/Register';
import Cart from './components/components/Cart';


function App() {
  return (
    <div className="app">
          <Router>
            <Header/>
            <Routes>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/' element={<Home/>}/>
              <Route path='/products' element={<ProductList/>}/>
              <Route path='/product/details' element={<ProductInfo/>}/>
              <Route path='/cart' element={<Cart/>}/>
            </Routes>
          </Router>
    </div>
  );
}

export default App;
