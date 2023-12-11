import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-lists">
        <ul className="footer-list">
          <li className="footer-list-item">Countries</li>
          <li className="footer-list-item">Regions</li>
          <li className="footer-list-item">Cities</li>
          <li className="footer-list-item">Districts</li>
          <li className="footer-list-item">Airports</li>
          <li className="footer-list-item">Place of interest</li>
        </ul>
        <ul className="footer-list">
        <Link className="text-link" to={"/Hotels"}>
            <li className="footer-list-item">Hotels</li>{" "}
          </Link>
          <li className="footer-list-item">Apartments</li>
          <li className="footer-list-item">Villas</li>
          <li className="footer-list-item">Resorts</li>
          <li className="footer-list-item">Guest houses</li>
          <li className="footer-list-item">Homes</li>
        </ul>
        <ul className="footer-list">
          <li className="footer-list-item">Unique places to stay</li>
          <li className="footer-list-item">Reviews</li>
          <li className="footer-list-item">Unpacked: Travel articles</li>
          <li className="footer-list-item">Travel communities</li>
          <li className="footer-list-item">Seasonal and holiday deals</li>
        </ul>
        <ul className="footer-list">
          <li className="footer-list-item">Car Rental</li>
          <li className="footer-list-item">Flight Finder</li>
          <li className="footer-list-item">Restaurant reservations</li>
          <li className="footer-list-item">Travel Agents</li>
          <li className="footer-list-item">Investor relations</li>
        </ul>
        <ul className="footer-list">
          <li className="footer-list-item">Curtomer Service</li>
          <Link className="text-link" to={"/about"}>
            <li className="footer-list-item">About</li>
          </Link>
          <li className="footer-list-item">Terms & conditions</li>
          <li className="footer-list-item">Investor relations</li>
          <li className="footer-list-item">Partner Help</li>
          <li className="footer-list-item">Safety Resource Center</li>
        </ul>
      </div>
      <div className="footer-text">
        Copyright ©  2023 SnapSeat.All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
