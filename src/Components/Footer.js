import React from "react";
import { Link } from "react-scroll";
import logo_white from "../img/logo-footer.png";

const Footer = () => {
  return (
    <React.Fragment>
      <footer id="footer">
        <div className="footer-bg">
          <div className="container">
            <div className="footer-row">
              <div className="footer-sec">
                <div className="footer-logo">
                  <img src={logo_white} alt="pirates" />
                </div>
              </div>

              <div className="footer-sec">
                <h4 className="footer-heading">Service</h4>
                <ul className="footer-list">
                  <li>
                    <a href="https://piratescorp.com/hosting/cart.php">
                      Web hosting
                    </a>
                  </li>
                  <li>
                    <a href="https://piratescorp.com/hosting/">
                      Domain Registeration
                    </a>
                  </li>
                  <li>
                    <Link
                      to="contact"
                      smooth={true}
                      offset={0}
                      delay={0}
                      duration={500}
                    >
                      Website Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="contact"
                      smooth={true}
                      offset={0}
                      delay={0}
                      duration={500}
                    >
                      Graphic and Web Designing
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="footer-sec">
                <h4 className="footer-heading">company</h4>
                <ul className="footer-list">
                  <li>
                  <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/terms-and-conditions">terms and Conditions</a>
                  </li>
                  <li>
                    <a href="/privacy-policy">privacy policy</a>
                  </li>
                </ul>
              </div>

              <div className="footer-sec">
                <h4 className="footer-heading">Support</h4>
                <ul className="footer-list">
                  <li>
                    <a href="tel:+918428015452">
                      <i className="fas fa-phone-alt"></i>+91 84280 15452
                    </a>
                  </li>
                  <li>
                    <a href="mailto:support@piratescorp.com">
                      <i className="fas fa-envelope-open"></i>
                      support@piratescorp.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyrigths">
          <p id="copyrigths-text">
            {" "}
            Pirates &copy; {new Date().getFullYear()}{" "}
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
