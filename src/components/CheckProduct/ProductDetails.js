import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { showProduct } from "../../redux/actions";
import "./ProductDetails.css";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  console.log(product);

  let navigate = useNavigate();

  const { productId } = useParams();

  const dispatch = useDispatch();

  const fetchProductDetails = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("error occured", err);
      });
    dispatch(showProduct(res.data));
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <div className="main-container">
      <div className="left-container">
        <img src={product.image} alt="product" />
      </div>
      <div className="right-container">
        <h3>{product.title}</h3>
        <h4>Category : {product.category}</h4>
        <p>{product.description}</p>
        <h4 className="btn btn-success">Price : $ {product.price}</h4>
        <p>
          Rating : {product?.rating?.rate} /5 ({product?.rating?.count})
        </p>
        <button className="btn btn-danger" onClick={() => navigate("/")}>
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
