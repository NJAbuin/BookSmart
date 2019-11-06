import React from "react";

//props.
// info:
// author: "Fred Rowe"
// createdAt: "2019-11-06T17:20:39.135Z"
// description: "Molestiae et autem iusto inventore iure quia maxime. Dolores inventore eum veniam et laborum laborum et. Totam pariatur est exercitationem magni esse."
// id: 86
// imgURL: "http://lorempixel.com/640/480"
// name: "Incredible Granite Gloves"
// price: 767
// stock: 80765
// updatedAt: "2019-11-06T17:20:39.135Z"
// year: 3043

function SingleProduct(props) {
  const product = props.info;

  return (
    <div className="container" style={{ backgroundColor: "#D0D0D0" }}>
      <h3>Title: {product.name}</h3>
      <img src={product.imgURL} />
      <p>Synopsis: {product.description}</p>
      <p>Price: {product.price}</p>
      <p>Year: {product.year}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
}

export default SingleProduct;
