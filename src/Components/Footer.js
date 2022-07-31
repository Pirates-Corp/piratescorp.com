import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import logo_white from "../img/logo-footer.png";
const Footer = () => {
  const history = useHistory();

  const close = (e, url) => {
    e.preventDefault();
    if (document.getElementById("check-box")) {
      document.getElementById("check-box").checked = false;
    }
    history.push(url);
  };

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
                    <a href="/contact">Web hosting</a>
                  </li>
                  <li>
                    <a href="/contact">Domain Registeration</a>
                  </li>
                  <li>
                    <a href="/contact">Website Development</a>
                  </li>
                  <li>
                    <a href="/contact">Graphic and Web Designing</a>
                  </li>
                </ul>
              </div>

              <div className="footer-sec">
                <h4 className="footer-heading">company</h4>
                <ul className="footer-list">
                  <li>
                    <a
                      href="/about"
                      onClick={(e) => {
                        close(e, "about");
                      }}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <Link to="/terms-and-conditions">terms and Conditions</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">privacy policy</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-sec">
                <h4 className="footer-heading">Support</h4>
                <ul className="footer-list">
                  <li>
                    <a href="tel:+919840793240">
                      <i className="fas fa-phone-alt"></i>+91 98407 93240
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
