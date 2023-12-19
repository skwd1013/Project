import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes instead of Route
import Header from "./Components/Header";
import Cart from "./Cart";
import Login from "./Login";
import ProductDetail from "./Components/ProductDetail";
import Products from "./Components/Products";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
