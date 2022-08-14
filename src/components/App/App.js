import React, { Component } from "react";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import "./App.css";
import logo from "./microcenter_logo.jpg";
import footer from "./Footer.png";
import Home from "../Home/Home.js";
import Top_Deals from "../Top_Deals/Top_Deals.js";
import Products from "../Products/Products.js";
import Community from "../Community/Community.js";
import Networking from "../Networking/Networking.js";
import Service_Repair from "../Service_Repair/Service_Repair.js";
import PC_Builder from "../PC_Builder/PC_Builder.js";
import Find_Location from "../Find_Location/Find_Location.js";
import Help from "../Help/Help.js";
import Account from "../Account/Account.js";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <ul className="header">
          <img id="logo" alt="Logo" src={logo} />
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/top_deals">Top Deals</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/community">Community</NavLink>
          </li>
          <li>
            <NavLink to="/networking">Networking</NavLink>
          </li>
          <li>
            <NavLink to="/service_repair">Service and Repair</NavLink>
          </li>
          <li>
            <NavLink to="/pc_builder">PC Builder</NavLink>
          </li>
          <li>
            <NavLink to="/find_location">Find a Location</NavLink>
          </li>
          <h2>|</h2>
          <li>
            <NavLink to="/help">Help</NavLink>
          </li>
          <li>
            <NavLink to="/account">Account</NavLink>
          </li>
        </ul>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/top_deals" element={<Top_Deals />} />
            <Route path="/products" element={<Products />} />
            <Route path="/community" element={<Community />} />
            <Route path="/networking" element={<Networking />} />
            <Route path="/service_repair" element={<Service_Repair />} />
            <Route path="/pc_builder" element={<PC_Builder />} />
            <Route path="/find_location" element={<Find_Location />} />
            <Route path="/help" element={<Help />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
        <div>
          <img id="footer" alt="footer" src={footer} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
