import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Top_Deals.css";
import top_deals1 from "./images/top_deals1.png";
import top_deals2 from "./images/top_deals2.png";
import top_deals3 from "./images/top_deals3.png";
import top_deals4 from "./images/top_deals4.png";

export default function Top_Deals() {
  return (
    <Carousel className="deals">
      <div>
        <img alt="deals1" src={top_deals1} />
      </div>
      <div>
        <img alt="deals1" src={top_deals2} />
      </div>
      <div>
        <img alt="deals1" src={top_deals3} />
      </div>
      <div>
        <img alt="deals1" src={top_deals4} />
      </div>
    </Carousel>
  );
}
