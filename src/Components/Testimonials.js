import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import client1 from '../img/clients/chillstudies.JPG';
import client2 from '../img/clients/srimurugansculpture.jpeg';


const Testmonials = () => {
    return (
        <React.Fragment>

            <section id="customers">
                <div className="contanier">
                <h3 className="section-heading">What Our Customers Say..</h3>
                </div>
               


                <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={10}
                    items={1}
                >

                    <div className="container item">
                        <div className="testimonial-row">

                            <div className="testimonial-pic">
                                <div className="person-bg">
                                    <img className="person" src={client1} alt="chillstudies" />
                                </div>
                            </div>

                            <div className="testimonial-review">

                                <p className="review">Pirates helped to reach study materials widely to students as well as
                                            teachers. Like this team by doing their
                                            well wishing activities surely our society will be improved undoubtly....
                                            Thank you. </p>

                                <div className="client-details">
                                    <p className="client-name">R.santhi</p>
                                    <a href="/chillstudies.com" className="website">chillstudies.com</a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="container item">
                        <div className="testimonial-row">

                            <div className="testimonial-pic">
                                <div className="person-bg">
                                    <img className="person" src={client2} alt="chillstudies" />
                                </div>
                            </div>

                            <div className="testimonial-review">

                                <p className="review">Thanks a lot to Pirates for your work , this helps to get my business to the next level.</p>

                                <div className="client-details">
                                    <p className="client-name">V.Senthamizhselvan</p>
                                    <a href="/srimurugansculpture.com" className="website">srimurugansculpture.com</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </OwlCarousel>


            </section>
        </React.Fragment>
    )
}

export default Testmonials;