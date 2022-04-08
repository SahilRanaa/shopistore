import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductTable from "./ProductTable";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.allproducts.cart);

  const [total, setTotal] = useState(0);

  let navigate = useNavigate();

  useEffect(() => {
    let total = 0;
    if (cartItems.length > 0) {
      cartItems.forEach((a) => {
        total = total + a.price;
      });

      setTotal(Math.floor(total));
    }
  }, [cartItems]);

  return cartItems.length === 0 ? (
    <div>
      <h2>The cart is empty</h2>
      <button className="btn btn-danger goto-btn" onClick={() => navigate("/")}>
        ADD PRODUCTS
      </button>
    </div>
  ) : (
    <ProductTable total={total} cartItems={cartItems} />
  );
};

export default CartPage;
