import React from "react";
import logo from "../img/logo-about.png";

const About = (props) => {
  return (
    <React.Fragment>
      <section id="about" name="about">
        <div className="container">
          <div className="about-row">
            <div className="logo-box">
              <img className="logo-box" src={logo} alt="pirates" />
            </div>
            <div className="about-info">
              <h3 className="about-heading">About Us</h3>
              <p id="about-text">
                We provide a reliable and affordable platform for engaging
                business applications. We have mainly enabled web hosting
                services to customers by offering different packages with more
                fast and secure cPanel. Check out our packages and features it
                covers, we offer bandwidth and website host limit according to
                package and you can select based on your requirement.
              </p>
              <div className="Social-media-holder">
                <a
                  className="soc-round"
                  href="https://api.whatsapp.com/send?phone=919840793240&text=Hi&lang=en"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a
                  className="soc-round"
                  href="https://www.instagram.com/pirates.corp/"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="soc-round"
                  href="https://www.youtube.com/channel/UCzqYgiEVLt5HqqkbUKQqfuQ"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                {/* <a className="soc-round" href="/insta"><i className="fab fa-linkedin-in"></i></a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
