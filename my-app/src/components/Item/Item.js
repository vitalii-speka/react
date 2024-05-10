import React from "react";

const Item = ({ imgUrl, name = "", price = "" }) => {
  return (
    <>
      <img src={imgUrl} alt={name} width="640" />
      {/* <p>price: {(price = "null" ? "" : price)}$</p> */}
      {name && <p> Product: {name}</p>}
      {price && <p> Price: {price}</p>}
    </>
  );
};

export default Item;
