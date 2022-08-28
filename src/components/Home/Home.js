import React from "react";
import "./Home.css";
import splash from "./splash.jpg";

export default function Home() {
  return (
    <div id="container">
      <img id="splash" alt="splash" src={splash} />
      <div id="search">
        <p>Looking for something specific?</p>
        <input id="searchBar" placeholder="Search..." />
        <button id="searchButton">GO!</button>
      </div>
    </div>
  );
}
