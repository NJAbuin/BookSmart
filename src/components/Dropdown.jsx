import React from "react";
import Axios from "axios";

export default function Dropdown({ categoryList }) {
  return (
    <div>
      <ul style={{ listStyleType: "none", color: "white" }}>
        {categoryList.map(e => {
          return (
            <p onClick={clickHandler(e)} key={e}>
              {e}
            </p>
          );
        })}
      </ul>
    </div>
  );
}

const clickHandler = e => {
  Axios.post("/api/category/books", { name: e }).then(res => console.log(res));
};
