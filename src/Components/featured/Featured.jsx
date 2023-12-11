import React from "react";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-item">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/664657.jpg?k=c1d999b8766abab322730158d960eec68af7910fec9ff61b5339636fd74dfb0e&o="
          alt=""
          className="featured-img"
        />
        <div className="featured-title">
          <h1>Pokhara</h1>
          <h2>601 properties</h2>
        </div>
      </div>
      <div className="featured-item">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/664666.jpg?k=e7f2be1324d4595363ec6d46d988eb21cee118a5530ce0a19a18cf85c4473d2e&o="
          alt=""
          className="featured-img"
        />
        <div className="featured-title">
          <h1>Kathmandu</h1>
          <h2>930 properties</h2>
        </div>
      </div>
      <div className="featured-item">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/913379.jpg?k=6cfeb1a9095c1b795908f37391404dbc4d698350fcf7dfd83e7756a8e4b153be&o="
          alt=""
          className="featured-img"
        />
        <div className="featured-title">
          <h1>Sauraha</h1>
          <h2>108 properties</h2>
        </div>
      </div>
      <div className="featured-item">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/977220.jpg?k=ee4b7b42c35b8cbf09c8ddb7630092b40cd706fec153c41904ed6e252a883938&o="
          alt=""
          className="featured-img"
        />
        <div className="featured-title">
          <h1>Dubai</h1>
          <h2>25 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
