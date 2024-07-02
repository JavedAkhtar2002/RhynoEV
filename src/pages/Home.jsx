import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";

import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";


import Testimonial from "../components/UI/Testimonial";
import "../styles/floatingbutton.css";
import BlogList from "../components/UI/BlogList";
import { Link } from "react-router-dom";

const Home = () => {

  const handlePrebook = () => {
    
    <Link to="/cars">Check-Out</Link>
  };

  return (
    <Helmet title="Home">
      <div className="prebook-button-container">
        <button className="prebook-button" onClick={handlePrebook}>
        <Link to="/cars">Prebook Now</Link>
        </button>
      </div>
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

       
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">See what </h6>
              <h2 className="section__title">Our Customers says</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* =============== blog section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Knowledge Center </h6>
              <h2 className="section__title"> Articles for our esteemed customers</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
