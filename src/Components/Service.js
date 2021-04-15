import React from "react";
import { useHistory } from "react-router-dom";
import server from "../img/service-img/secure_server.svg";
import design from "../img/service-img/design.svg";
import domain from "../img/service-img/Domain.gif";
import website from "../img/service-img/website.svg";

const Service = () => {
  const history = useHistory();
  const push = (e, url) => {
      e.preventDefault();
      if (document.getElementById("check-box")) {
        document.getElementById("check-box").checked = false;
      }
      history.push(url);
    };
  return (
    <React.Fragment>
      <section id="service">
        <div className="container">
          <h3 className="section-heading">Service</h3>

          <div className="service-row ">
            <div className="pic-side">
              <img className="service-img" src={server} alt="webhosting" />
            </div>
            <div className="info-side">
              <h4 className="service-heading">
                Secure and Fastest web hosting
              </h4>
              <p className="service-info">
                We provide a shared hosting service which is more fast and
                secure with excellent user experience.we provide various
                packages according to your business types which is effective and
                highly featured by which handling of websites, database and
                emails was made effort free. Uptime and technical support is
                provided at its best.
              </p>
              <div className="btn-holder">
                <a
                  onClick={(e) => push(e, "contact")}
                  href="/contact"
                  className="pi-btn2"
                >
                  <i className="fas fa-server"></i>Contact for Plans
                </a>
              </div>
            </div>
          </div>

          <div className="service-row">
            <div className="info-side">
              <h4 className="service-heading">Domain Registeration</h4>
              <p className="service-info">
                Domain registration is done once you select the package and
                confirm your payment and we offer all kinds of domain. We
                further offer free ssl and WhoisGuard.technical support is
                provided at its best.
              </p>
              <div className="btn-holder">
                <a
                  onClick={(e) => push(e, "contact")}
                  href="/contact"
                  className="pi-btn2"
                >
                  <i className="fas fa-globe-asia"></i>Get Domain
                </a>
              </div>
            </div>
            <div className="pic-side">
              <img className="service-img" src={domain} alt="domain" />
            </div>
          </div>

          <div className="service-row ">
            <div className="pic-side">
              <img
                className="service-img"
                src={website}
                alt="website development"
              />
            </div>
            <div className="info-side">
              <h4 className="service-heading">website Development</h4>
              <p className="service-info">
                Dynamic and mobile responsive websites are developed with good
                user interface and experience. Designed for different business
                and professionals according to requirements.
              </p>
              <div className="btn-holder">
                <a 
                onClick={(e) => push(e, "contact")}
                href="/contact"
                className="pi-btn2" 
                >
                  <i className="fas fa-window-maximize"> </i>Get Started
                </a>
              </div>
            </div>
          </div>

          <div className="service-row">
            <div className="info-side">
              <h4 className="service-heading">Design Solutions</h4>
              <p className="service-info">
                Wanna design more interactive posters and unique logos for your
                business or advertising purpose? do reach us with content and
                idea we create incredible and good looking designs with great
                user experience
              </p>
              <div className="btn-holder">
                <a
                  onClick={(e) => push(e, "contact")}
                  href="/contact"
                  className="pi-btn2"
                >
                  <i className="fas fa-globe-asia"></i>Get Started
                </a>
              </div>
            </div>
            <div className="pic-side">
              <img className="service-img" src={design} alt="Design" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Service;
