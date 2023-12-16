import "./About.css";
import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/footer/Footer";
import Header from "../../Components/header/Header";
import MailList from "../../Components/mailList/MailList";

const About = () => {
  return (
    
    <div>
      <Navbar />
      <Header type="list" />

      <div className="about-us">
        <h2>About Us</h2>
        <p>
          Welcome to SnapSeat, your gateway to unforgettable travel
          experiences!
        </p>

        <section className="mission">
          <h3>Our Mission</h3>
          <p>
            At SnapSeat, our mission is to provide an effortless and
            personalized booking experience for travelers. We offer a diverse
            selection of accommodations, ensuring everyone finds their perfect
            stay.
          </p>
        </section>

        <section className="what-sets-us-apart">
          <h3>What Sets Us Apart</h3>
          <ul>
            <li>
              Diverse Accommodation Options: Hotels, Resorts, Apartments, and
              more.
            </li>
            <li>
              User-Friendly Booking System: Easy-to-use interface for seamless
              reservations.
            </li>
            <li>
              24/7 Customer Support: Dedicated support to assist with any
              inquiries or concerns.
            </li>
            <li>
              Trust and Security: Secure transactions and partnerships with
              trusted providers.
            </li>
          </ul>
        </section>

        <section className="list-property">
          <h3>List Your Property</h3>
          <p>
            Are you a property owner? List your accommodation with us and reach
            millions of travelers worldwide!
          </p>
          <button className="list-property-button">List Your Property</button>
        </section>

        <section className="get-in-touch">
          <h3>Get in Touch</h3>
          <p>
            Have any questions or need assistance? Contact us. We're here to help!
          </p>
        </section>
      </div>
      <MailList />
      <Footer />
    </div>
  );
};

export default About;
