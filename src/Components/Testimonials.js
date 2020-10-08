import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import client1 from "../img/clients/chillstudies.JPG";
import client2 from "../img/clients/srimurugansculpture.jpeg";
import client3 from "../img/clients/adile.jpg";

const clients = [
  {
    clientImg: client1,
    review: `Pirates helped to reach study materials widely to students as
  well as teachers.Like this team by doing their well wishing
  activities surely our society will be improved undoubtly....
  Thank you`,
    name: "R.santhi",
    website: "chillstudies.com",
  },
  {
    clientImg: client2,
    review: `Thanks a lot to Pirates for your work , this helps to get my
    business to the next level`,
    name: "V.Senthamizhselvan",
    website: "srimurugansculpture.com",
  },
  {
    clientImg: client3,
    review: ` Hi from Turkey. Great work from Piratescorp, this hosting was
    really good. And also good customer service they have,
    whenever I need help they were always there.`,
    name: "Adile cetinkaya",
    website: "Web Developer.",
  },
];

const Testmonials = () => {
  return (
    <React.Fragment>
      <section id="customers">
        <div className="contanier">
          <h3 className="section-heading">Testimonials</h3>
        </div>

        <OwlCarousel className="owl-theme" loop margin={10} items={1}>
          {clients.map((client, index) => (
            <div key={index} className="container item">
              <div className="testimonial-row">
                <div className="testimonial-pic">
                  <div className="person-bg">
                    <img
                      className="person"
                      src={client.clientImg}
                      alt={client.website}
                    />
                  </div>
                </div>

                <div className="testimonial-review">
                  <p className="review">{client.review}</p>

                  <div className="client-details">
                    <p className="client-name">{client.name}</p>
                    <a
                      href={
                        client.website.includes(".com")
                          ? `https://` + client.website
                          : "/customers"
                      }
                      className="website"
                    >
                      {client.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </section>
    </React.Fragment>
  );
};

export default Testmonials;
