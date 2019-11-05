import React from "react";

export default function List(props) {
  return (
    <div>
      <ul>
        {props.list.map(e => {
          return <li key={e.id}>{e.firstName}</li>; //TEMPLATE ON HOW TO map props to html items
        })}
      </ul>
    </div>
  );
}
