import React from "react";
import { Link } from "react-scroll";
import logo from "../img/logo.png";
import navbtn from "../img/nav.svg";
const Navbar = () => {
  const close = () => {
    if (document.getElementById("check-box")) {
      document.getElementById("check-box").checked = false;
    }
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
              <Link
                onClick={close}
                to="about"
                smooth={true}
                offset={0}
                delay={0}
                duration={500}
              >
                About
              </Link>
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
              <Link
                onClick={close}
                to="customers"
                smooth={true}
                offset={0}
                delay={0}
                duration={100}
              >
                Customers
              </Link>
            </li>

            <li>
              <Link
                onClick={close}
                to="contact"
                smooth={true}
                offset={0}
                delay={0}
                duration={100}
              >
                Contact
              </Link>
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
