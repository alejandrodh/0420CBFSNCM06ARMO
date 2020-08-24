import React from "react";
import Card from "./Card";

function Product(props) {
  return <Card data={props.productInfo} />;
}

export default Product;
