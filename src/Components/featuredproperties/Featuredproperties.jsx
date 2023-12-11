import React from "react";
import "./Featuredproperties.css";
const Featuredproperties = () => {
  return (
    <div className="featured-pro">
      <div className="featured-pro-item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o="
          alt=""
          className="featured-pro-img"
        />
        <span className="featured-pro-name">Aparthotel Stare Miasto</span>
        <span className="featured-pro-city">Old Town,Poland</span>
        <p className="featured-pro-price">Strating from <span> $120</span></p>
        <div className="featured-pro-rating">
          <button>7.8</button>
          <span>Excellent.800 reviews</span>
        </div>
      </div>
      <div className="featured-pro-item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o="
          alt=""
          className="featured-pro-img"
        />
        <span className="featured-pro-name">Oriente Palace Apartments</span>
        <span className="featured-pro-city">Centro,spain,madrid</span>
        <p className="featured-pro-price">Strating from <span>$120</span> </p>
        <div className="featured-pro-rating">
          <button>7.8</button>
          <span>Excellent.400 reviews</span>
        </div>
      </div>
      <div className="featured-pro-item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/85257658.webp?k=e3f110e4ed0978310a028465a3bdd609149ecbded601555c881106255556b52e&o="
          alt=""
          className="featured-pro-img"
        />
        <span className="featured-pro-name">Leman Locke</span>
        <span className="featured-pro-city">Tower Helmets,london</span>
        <p className="featured-pro-price">Strating from <span>$130</span> </p>
        <div className="featured-pro-rating">
          <button>8.8</button>
          <span>Fabulos.500 reviews</span>
        </div>
      </div>
      <div className="featured-pro-item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/85257658.webp?k=e3f110e4ed0978310a028465a3bdd609149ecbded601555c881106255556b52e&o="
          alt=""
          className="featured-pro-img"
        />
        <span className="featured-pro-name">Leman Locke</span>
        <span className="featured-pro-city">Tower Helmets,london</span>
        <p className="featured-pro-price">Strating from <span>$130</span></p>
        <div className="featured-pro-rating">
          <button>8.8</button>
          <span>Fabulos.500 reviews</span>
        </div>
      </div>
    </div>
  );
};

export default Featuredproperties;
