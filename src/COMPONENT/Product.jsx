import React from 'react'
import { NavLink } from 'react-router-dom';

function Product(curElem) {
    const { id, name, image, price, category } = curElem;
    return (
        <div className="col-md-4">
            <NavLink to={`/singleproduct/${id}`}>
                <div class="card" style={{ width: "18rem" }}>
                    <img src={image} class="card-img-top" alt={id} />
                    <div class="card-body">
                        <p class="card-text">{name}</p>
                        <p class="card-text">{category}</p>
                        <p class="card-text">Rs.{price}</p>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default Product
