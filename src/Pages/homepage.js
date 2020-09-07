// import React  from 'react';
// import Home from "../Components/Home";
// import Service from "../Components/Service";
// import Testimonials from "../Components/Testimonials";
// import About from "../Components/About";
// import Contact from "../Components/Contact";
// import Footer from "../Components/Footer";

import React, { Suspense, lazy } from 'react';
const  Home = lazy(()=>import("../Components/Home"));
const  Service  = lazy(()=>import("../Components/Service"));
const  Testimonials  = lazy(()=>import("../Components/Testimonials"));
const  About   = lazy(()=>import("../Components/About"));
const  Contact   = lazy(()=>import("../Components/Contact"));
const  Footer   = lazy(()=>import("../Components/Footer"));



function homepage() {
  return (
    <React.Fragment>
      <Suspense fallback={<p> </p>}>
      <Home />
      <Service />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      </Suspense>
    </React.Fragment>
  );
}

export default homepage;
