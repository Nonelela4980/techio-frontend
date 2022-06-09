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


function App() {
  return (
    <div className="app">
          <Router>
            <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/products' element={<ProductList/>}/>
              <Route path='/product/details' element={<ProductInfo/>}/>

            </Routes>
          </Router>
    </div>
  );
}

export default App;
