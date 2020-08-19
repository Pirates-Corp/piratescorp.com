import React from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <React.Fragment>
      <header>
        <nav>
          <div className="logo">Pirates</div>

          <input id="check-box" type="checkbox" />
          <label htmlFor="check-box">
            <div id="wheel-img"></div>
          </label>
          <ul id="holder">
            <li>
              <Link  to="about"  smooth={true} offset={0} delay={0} duration={500}>About</Link>
            </li>
            <li>
              <a href="https://piratescorp.com/hosting/clientarea.php">Login</a>
            </li>
            <li>
              <a href="https://piratescorp.com/hosting/register.php">Sign up</a>
            </li>
            <li>
              <Link to="customers"  smooth={true} offset={0} delay={0} duration={100}>Customers</Link>
            </li>

            <li>
              <Link to="contact"  smooth={true} offset={0} delay={0} duration={100}>Contact</Link>
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
