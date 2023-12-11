import "./Home.css";
import Navbar from "../../Components/navbar/Navbar";
import Header from "../../Components/header/Header"
import Featured from "../../Components/featured/Featured";
import PropertyList from "../../Components/propertyList/PropertyList";
import Featuredproperties from "../../Components/featuredproperties/Featuredproperties";
import MailList from "../../Components/mailList/MailList";
import Footer from "../../Components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      
      <div className="home-container">
        <Featured/>
        <h1 className="home-title">Browse by property type</h1>
        <PropertyList/>
        <h1 className="home-title">Homes guests love</h1>
        <Featuredproperties/>
        <MailList/>
       <Footer/>
      </div>
    </div>
  )
}

export default Home
