import React from "react";
import Axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown'

export default function Dropdown2({ categoryList, clickHandler }) {
  return (
    <div>
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
