import React from "react";


const Product = ({ imgUrl, name, price }) => (
  <div>
    <img src={imgUrl} alt={name} width="640" />
    <h2>{name}</h2>
    <p>price: {price < 9 ? "Few left" : price}$</p>
    <button type="button">Add to cart</button>
  </div>
);

export default Product;
