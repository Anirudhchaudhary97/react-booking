import React from "react";
import "./PropertyList.css"

const PropertyList = () => {
  return (
    <div className="pro-list">
      <div className="pro-list-item">
        <img
          src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
          alt=""
          className="pro-list-img"
        />
        <div className="pro-list-title">
          <h1>Hotels</h1>
          <h2>200 hotels</h2>
        </div>
      </div>
      <div className="pro-list-item">
        <img
          src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o="
          alt=""
          className="pro-list-img"
        />
        <div className="pro-list-title">
          <h1>Apartments</h1>
          <h2>205 apartments</h2>
        </div>
      </div>
      <div className="pro-list-item">
        <img
          src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
          alt=""
          className="pro-list-img"
        />
        <div className="pro-list-title">
          <h1>Resorts</h1>
          <h2>300 resorts</h2>
        </div>
      </div>
      <div className="pro-list-item">
        <img
          src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
          alt=""
          className="pro-list-img"
        />
        <div className="pro-list-title">
          <h1>Villas</h1>
          <h2>380 villas</h2>
        </div>
      </div>
      <div className="pro-list-item">
        <img
          src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o="
          alt=""
          className="pro-list-img"
        />
        <div className="pro-list-title">
          <h1>Cabins</h1>
          <h2>680 villas</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
