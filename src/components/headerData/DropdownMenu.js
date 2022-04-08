import React from "react";
import { Dropdown, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { clearAll, deleteItem } from "../../redux/actions";

const DropdownMenu = () => {
  const cartItems = useSelector((state) => state.allproducts.cart);

  const dispatch = useDispatch();

  console.log(cartItems);
  return (
    <Dropdown.Item>
      <ListGroup>
        {cartItems.map((elem) => {
          return (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start "
              key={elem.id}
            >
              {elem.title}

              <FaTrash
                className="mx-5"
                onClick={() => dispatch(deleteItem(elem.id))}
              />
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <div>
        <button
          className="btn btn-danger  mt-3"
          onClick={() => dispatch(clearAll())}
        >
          Remove All
        </button>
      </div>
    </Dropdown.Item>
  );
};

export default DropdownMenu;
