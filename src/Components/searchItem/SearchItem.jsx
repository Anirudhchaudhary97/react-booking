import "./SearchItem.css";

const SearchItem = () => {
  return (
    <div className="search-item">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square200/480741504.webp?k=e2c3c1273cd87fbdbfaec5bc4a5e9af272da3de472d3d05f063ba054bfe7a39f&o="
        alt=""
        className="search-item-img"
      />
      <div className="search-item-des">
          <h1 className="si-title">Tower Street Apartments</h1> 
          <span className="si-distance">500m from center</span>
          <span className="si-taxi-op">Free airpot taxi</span>
          <span className="si-subtitle">Studio Apartment with Air conditioning</span>
          <span className="si-features">Entire studio . 1 bathroom . 21m<sup>2</sup></span>
          <span className="si-cancel-op">Free cancellation</span>
          <span className="si-cancel-op-subtitle">You can cancel, so lock in this great price today!</span>
      </div>
      <div className="search-item-details">
        <div className="si-rating">
            <span>Excellent</span>
           <button>7.8</button>
        </div>
        <div className="si-detail-texts">
            <span className="si-price">$160</span>
            <span className="si-tax-op">Insluding taxes and fees</span>
            <button className="si-check-button">See Availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
