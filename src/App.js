///Look at redux
/// Add auth page
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.component';
import Cart from './components/cart.component';
import CreateItem from './components/createItem.component';
// import RemoveItem from './components/removeItem.component';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/addItem' element={<CreateItem />} />
        <Route path='/' element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
