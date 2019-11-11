import React from "react";
import Axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";

export default function Dropdown2({ categoryList, clickHandler }) {
  
  return (
    <div>
      <h3>CATEGORIAS</h3>
      {categoryList.map(e => {
        return (
          <Dropdown.Item onClick={evt => clickHandler(e)} key={e}>
            {e}
          </Dropdown.Item>
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
