import React from "react";
import help from "./Help.png";

export default function Help() {
  return (
    <div className="pageHeading">
      <h1>FAQ</h1>
      <img alt="Help" src={help} />
    </div>
  );
}
