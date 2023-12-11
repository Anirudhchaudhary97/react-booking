import "./list.css";
import Navbar from "../../Components/navbar/Navbar";
import Header from "../../Components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../Components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const initialDestination = location.state ? location.state.destination : "";
  const initialDate = location.state
    ? location.state.date
    : [{ startDate: new Date(), endDate: new Date() }];
  const initialOptions = location.state
    ? location.state.options
    : { adult: "", children: "", room: "" };

  const [destination, setDestination] = useState(initialDestination);
  const [date, setDate] = useState(initialDate);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(initialOptions);

  // const location = useLocation();
  // const [destination, setDestination] = useState(location.state.destination);
  // const [date, setDate] = useState(location.state.date);
  // const [openDate, setOpenDate] = useState(false);
  // const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="list-container">
        <div className="list-wrapper">
          <div className="list-search">
            <h1 className="list-search-title">Search</h1>
            <div className="list-search-item">
              <label htmlFor="destination">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="list-search-item">
              <label htmlFor="check-in-date">Check-in-date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to 
            ${format(date[0].endDate, "MM/dd/yyyy")} `}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="list-search-item">
              <label htmlFor="options">Options</label>
              <div className="list-search-option">
                <div className="option-item">
                  <span className="option-item-price">
                    Min Price <small>per night</small>
                  </span>
                  <input type="number" className="option-item-input" />
                </div>
                <div className="option-item">
                  <span className="option-item-price">
                    Max Price <small>per night</small>
                  </span>
                  <input type="number" className="option-item-input" />
                </div>
                <div className="option-item">
                  <span className="option-item-price">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="option-item-input"
                    placeholder={options.adult}
                  />
                </div>
                <div className="option-item">
                  <span className="option-item-price">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="option-item-input"
                    placeholder={options.children}
                  />
                </div>
                <div className="option-item">
                  <span className="option-item-price">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="option-item-input"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="list-result">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
