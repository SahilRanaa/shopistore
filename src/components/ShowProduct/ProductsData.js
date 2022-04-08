import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProduct } from "../../redux/actions";

const ProductsData = ({ elem }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="col mb-4">
        <div className="card text-center" style={{ height: "28rem" }}>
          <img
            src={elem.image}
            className="card-img-top py-4 mx-auto"
            alt="..."
            style={{ width: "86px" }}
          />
          <div className="card-body ">
            <h3 className="card-title" style={{ fontSize: "1.2rem" }}>
              {elem.title}
            </h3>
            <p className="card-text">Price: $ {elem.price}</p>
            <p className="card-text pb-3">Category : {elem.category}</p>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-success mx-2"
              onClick={() => dispatch(getProduct(elem))}
            >
              BUY
            </button>
            <Link to={`product/${elem.id}`}>
              <button className="btn btn-warning">Check Product</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsData;
