import React from "react";
import "./MailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mail-title">Save time, save money!</h1>
      <span className="mail-description">
        Sign up and we'll send the best deals to you
      </span>
      <div className="mail-input-container">
        <input type="text" placeholder=" Your email address"/>
        <button>Suscribe</button>
      </div>
    </div>
  );
};

export default MailList;
