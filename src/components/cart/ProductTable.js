import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { clearAll } from "../../redux/actions";

const ProductTable = ({ total, cartItems }) => {
  const dispatch = useDispatch();

  return (
    <div className="mt-5">
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th> Item Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((elem) => (
            <tr key={elem.title}>
              <td>{elem.title}</td>
              <td> $ {elem.price}</td>
            </tr>
          ))}
          <tr>
            <td>
              <h3>Total</h3>
            </td>
            <td>
              <h3>$ {total}</h3>
            </td>
          </tr>
        </tbody>
      </Table>

      <button
        className="btn btn-success "
        style={{ marginLeft: "50%", fontSize: "1.4rem" }}
        onClick={() => dispatch(clearAll())}
      >
        Checkout
      </button>
    </div>
  );
};

export default ProductTable;
