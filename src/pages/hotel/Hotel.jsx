import "./Hotel.css";
import Navbar from "../../Components/navbar/Navbar";
import Header from "../../Components/header/Header";
import MailList from "../../Components/mailList/MailList"
import Footer from "../../Components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocation } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber,setSlideNumber]= useState(0)
  const [open,setOpen]= useState(false)
  const images = [
    {
      src: "https://cf.bstatic.com/xdata/images/landmark/max1024/180421.webp?k=c3e3aebec250935477f7cf609cf0e2068353575010eaeca79ee6e68101fac0da&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/228163157.jpg?k=017500fbf96cc2b2cb4c8430b2f2483bbba8fb726a86b6a2cf4410b4e3c74ffc&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/342598151.jpg?k=17ed73cbc80dd5c1b1f21fdaa3bf5eb71b33dc492216400ce039fb7b7aad60f2&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/66669224.jpg?k=7b1e8e15171efe3bbe82925bad0054e048dec5f2220a469b443be74cd4c4d12e&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/228164420.jpg?k=e5c6289c59f401e830d20d1e180263616dee8ac12e608590e68706084fcf07bc&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/66669226.jpg?k=978b575f0fe6cb12948c6344dec4bc51adac30567ab063e1d47f138eaae8b50c&o=&hp=1",
    }
  ];

  const handleOpen=(index)=>{
    setSlideNumber(index)
    setOpen(true)

  }

  const handleMove=(direction)=>{
           let newSlideNumber;
           if(direction==="left"){
            newSlideNumber=slideNumber===0 ? 5:slideNumber-1
           }
           else{
            newSlideNumber=slideNumber===5 ? 0:slideNumber+1
           }
           setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotel-container">
      { open && <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close"
             onClick={()=>setOpen(false)}
            />
            <FontAwesomeIcon icon={faCircleArrowLeft}className="arrow"
              onClick={()=>handleMove("left")}
            />
            
            <div className="slider-wrapper">
              <img src={images[slideNumber].src}alt="" className="slider-img" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow"
            onClick={()=>handleMove("right")}
            />
      </div>}
        <div className="hotel-wrapper">
          <button className="book-now">Reserve or Book Now!</button>
          <h1 className="hotel-title">Grand Hotel</h1>
          <div className="hotel-address">
            <FontAwesomeIcon icon={faLocation} />
            <span>Elton st 125 New york</span>
          </div>
          <span className="hotel-distance">
            Excellent location - 500m from center
          </span>
          <span className="hotel-price-highlight">
            Book a stay over $144 at this property and get a free airport taxi
          </span>
          <div className="hotel-imgs">
            {images.map((image,index) => (
              <div className="hotel-img-wrapper"key={image.src} >
                <img src={image.src} alt="" className="hotel-img" 
                onClick={()=>handleOpen(index)}
                />
              </div>
            ))}
          </div>
          <div className="hotel-details">
            <div className="hotel-details-text">
              <h1 className="hotel-title">Stay in the herat of karkow</h1>
              <p className="hotel-des">
                The Appart'City is located a 5-minute walk from the Cité des
                Sciences de La Villette and a 10-minute walk from the Zénith.
                All well-equipped apartments have a living room, a desk area and
                a satellite TV. They also have a bathroom and a fully equipped
                kitchen with a fridge, hobs and a microvawe, Breakfast is
                composed of various breads, including gluten-free bread,
                pastries, fresh and hot beverages. Fresh fruit and fruit salad,
                as well as cheeses and yogurts are also provided. The
                Appart'City Paris is opposite Ourcq Metro Station which provides
                direct access to Gare du Nord Train Station. This means Paris’s
                main attractions, including the famous Louvre, Montmartre and
                the Eiffel Tower, are all easily accessible. Les Docks de Paris
                Event Venue are 3.3 km away.
              </p>
            </div>
            <div className="hotel-details-price">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of krakow, this property has an excellent score of 9.8!
              </span>
              <h2>
                <b>$555</b> ( 9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Hotel;
