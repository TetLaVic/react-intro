import React from "react";
// import db from "../../db/db.json";

function Main({ data }) {
  return (
    <div>
      <h1>Hello</h1>
      <h2>Main</h2>
      <ul>
        <li>{data.one}</li>
        <li>{data.two}</li>
        <li>{data.three}</li>
      </ul>
    </div>
  );
}

export default Main;
