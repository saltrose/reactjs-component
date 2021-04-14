import React, { Component } from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import WhatDoWeDo from "./components/WhatDoWeDo";
import Contact from "./components/Contact";
import Card from "./components/Card";
import Footer from "./components/Footer";

class BaiTap2 extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <div class="container mt-3">
          <div class="row">
            <div class="col-sm-8">
              <WhatDoWeDo />
            </div>
            <div class="col-sm-4">
              <Contact />
            </div>
          </div>
          <div class="row">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default BaiTap2;
