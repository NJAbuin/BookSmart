import React from "react";
import { Link } from "react-router-dom";

const cardStyle = {
  boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.2)",
  fontFamily: "arial",
  // display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "50% minmax(auto, 2fr) 3fr",
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
  textAlign: "center",
  alignSelf: "center",
  justifySelf: "center"
};

const buttonStyle = {
  border: "none",
  outline: "0",
  padding: "12px",
  color: "black",
  backgroundColor: "#B0C4DE",
  cursor: "pointer",
  width: "100%",
  fontSize: "18px",
  gridArea: "add",
  alignSelf: "center",
  justifySelf: "center"
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
          padding: "10px",
          width: "minmax(100em, 90%)",
          height: "minmax(100em, 90%)",
          gridArea: "img",
          alignSelf: "center",
          justifySelf: "center"
        }}
      />
      <Link to={`/products/${product.id}`}>
        <h1
          style={{
            gridArea: "title",
            textAlign: "center",
            placeSelf: "center",
            height: "2.5em",
            textAlign: "center"
          }}
        >
          {product.name}
        </h1>
      </Link>
      <p className="price" style={priceStyle}>
        ${product.price}
      </p>
      <p style={{ alignSelf: "center", justifySelf: "center" }}>
        <button style={buttonStyle}>Add to Cart</button>
      </p>
      <p style={{ placeSelf: "center" }}>
        Rating: {Math.round(Math.random() * 5)}/5
      </p>
    </div>
  );
}

export default SingleProduct;
