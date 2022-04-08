import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/headerData/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./components/ShowProduct/ProductPage";
import ProductDetails from "./components/CheckProduct/ProductDetails";
import CartPage from "./components/cart/CartPage";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductPage />} />
          <Route
            path="/product/:productId"
            exact
            element={<ProductDetails />}
          />
          <Route path="cartPage" exact element={<CartPage />} />
          <Route path="">404 page not found</Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
