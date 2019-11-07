import React from "react";
import { Link } from "react-router-dom";

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

const cardStyle = {
  boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.2)",
  fontFamily: "arial",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "50% 1fr 3fr",
  gridTemplateAreas: `"img img"
  "title title"
  "price add"`,
  gridGap: "15px",
  backgroundColor: "#E8E8E8",

  justifyItems: "auto",
  alignItems: "auto"
};

const priceStyle = {
  color: "grey",
  fontSize: "22px",
  gridArea: "price",
  textAlign: "center"
};

const buttonStyle = {
  border: "none",
  outline: "0",
  padding: "12px",
  color: "black",
  backgroundColor: "#B0C4DE",
  textAlign: "center",
  cursor: "pointer",
  width: "100%",
  fontSize: "18px",
  gridArea: "add",
  alignSelf: "center"
};

function SingleProduct(props) {
  const product = props.info;

  return (
    <div className="card" style={cardStyle}>
      <img
        src={
          "https://quittingbydesign.com/wp-content/uploads/2018/09/image-coming-soon-placeholder.jpg"
        }
        key={product.id}
        style={{
          width: "100%",
          height: "100%",
          gridArea: "img"
        }}
      />
      <h1 style={{ gridArea: "title", textAlign: "center" }}>{product.name}</h1>
      <p className="price" style={priceStyle}>
        ${product.price}
      </p>
      <p>
        <button style={buttonStyle}>Add to Cart</button>
      </p>
    </div>
  );
}

{
  /* <div style={containerStyle}>
      <div className="card" style={cardStyle}>
        <img
          src={
            "https://quittingbydesign.com/wp-content/uploads/2018/09/image-coming-soon-placeholder.jpg"
          }
          key={product.id}
          style={{ width: "100%", height: "50%" }}
        />
        <h1>{product.name}</h1>
        <p className="price" style={priceStyle}>
          ${product.price}
        </p>
        <p>{product.description}</p>
        <p>
          <button style={buttonStyle}>Add to Cart</button>
        </p>
      </div>
    </div> */
}

export default SingleProduct;
