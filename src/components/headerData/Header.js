import React from "react";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { FaCartPlus, FaStore } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
  const cart = useSelector((state) => state.allproducts.cart);
  const navigate = useNavigate();

  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="/" className="align-center">
              <FaStore fontSize="30px" onClick={() => navigate("/")} /> &ensp;
              My Store
            </Navbar.Brand>
            <Nav className="ml-auto">
              <Dropdown align="end">
                <Link to="/cartPage">
                  <FaCartPlus color="white" fontSize={30} className="mx-2" />
                </Link>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <label>{cart.length}</label>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {cart.length === 0 ? "cart is empty" : <DropdownMenu />}
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
