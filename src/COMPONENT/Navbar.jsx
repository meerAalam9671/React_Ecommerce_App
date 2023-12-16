import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FiShoppingCart } from "react-icons/fi";

function Navbar() {
  return (
    <div>
      <Wrapper>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid mx-3">
            <NavLink className="navbar-brand fs-3 fw-bolder" to="/">Meer Shop</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link fs-4" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fs-4" to="/allproducts">Product</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fs-4" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fs-4" to="/contact">Contact Us</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link cart-trolley-item" to="/cart">
                    <FiShoppingCart className="cart-trolley"/>
                    <span className='cart-item--total'>10</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Wrapper>
    </div>
  )
};
export default Navbar;


const Wrapper = styled.nav`
#navbarNav{
  justify-content: right;

}
#navbarNav ul{
  align-items: center;
}
.cart-trolley-item{
  font-size: 2.3rem;
  margin-left: 10px;
  position: relative;
}
.cart-trolley{
  color: #32f0f0;
}
.cart-item--total{
  position: absolute;
    top: 19%;
    left: 70%;
    background: #6f1e1e;
    color: gray;
    font-size: 1.1rem;
    display: flex;
    height: 25px;
    width: 25px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

}`;
