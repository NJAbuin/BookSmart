import React from "react";

export default function Dropdown({ categoryList, clickHandler }) {
  return (
    <div>
      <br />
      <h4
        style={{ color: "white", fontFamily: "Bookman", textAlign: "center" }}
      >
        Categorias
      </h4>
      <br />

      {categoryList.map(e => {
        return (
          <p style={stringStyle} onClick={evt => clickHandler(e)} key={e}>
            {e}
          </p>
        );
      })}
    </div>
  );
}

const stringStyle = {
  color: "white",
  fontFamily: "Bookman",
  textAlign: "center"
};
