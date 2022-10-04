import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react'
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";


class App extends Component {
  render() {

    return (
      
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<ProductList />}></Route>
          <Route path="/details" element={<Details />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route element={<Default />}></Route>
        </Routes>
        <Modal></Modal>
      </BrowserRouter>
      
    );
  }
}






export default App;