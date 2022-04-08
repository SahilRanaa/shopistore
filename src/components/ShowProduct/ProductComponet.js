import React from "react";
import { useSelector } from "react-redux";
import ProductsData from "./ProductsData";

const ProductComponet = () => {
  const products = useSelector((state) => state.allproducts.productData[0]);

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Products</h3>
      <div className="row row-cols-1 row-cols-md-2 px-4 py-3 ">
        {products.map((elem) => (
          <ProductsData elem={elem} key={elem.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductComponet;
