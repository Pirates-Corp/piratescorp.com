import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../img/logo.png";
import navbtn from "../img/nav.svg";
const Navbar = (props) => {
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
      <header>
        <nav id="nav">
          <div className="logo">
            <img src={logo} alt="Pirates" />
          </div>

          <input id="check-box" type="checkbox" />
          <label htmlFor="check-box" id="menu-img">
            <img src={navbtn} alt="-" />
          </label>

          <ul id="holder">
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
              <a href="https://piratescorp.com/hosting/clientarea.php">Login</a>
            </li>
            <li>
              <a href="https://piratescorp.com/hosting/register.php">
                Register
              </a>
            </li>
            <li>
              <a
                href="/customers"
                onClick={(e) => {
                  close(e, "customers");
                }}
              >
                Customers
              </a>
            </li>

            <li>
              <a
                href="/contact"
                onClick={(e) => {
                  close(e, "contact");
                }}
              >
                Contact
              </a>
            </li>

            <label htmlFor="check-box" id="close-menu">
              <i className="fas fa-times" />
            </label>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
