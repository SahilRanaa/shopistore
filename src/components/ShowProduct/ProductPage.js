import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../../redux/actions";
import ProductComponet from "./ProductComponet";

const ProductPage = () => {
  const url = "https://fakestoreapi.com/products";

  const dispatch = useDispatch();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(url);
      console.log(data);
      dispatch(setData(data));
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {isloading ? (
        <div>
          <div className="spinner-loading"></div>
          <h2>loading</h2>
        </div>
      ) : (
        <ProductComponet />
      )}
    </div>
  );
};

export default ProductPage;
