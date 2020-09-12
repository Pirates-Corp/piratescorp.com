// import React  from 'react';
// import Home from "../Components/Home";
// import Service from "../Components/Service";
// import Testimonials from "../Components/Testimonials";
// import About from "../Components/About";
// import Contact from "../Components/Contact";
// import Footer from "../Components/Footer";

import React, { Suspense, lazy} from 'react';
// import * as Scroll from 'react-scroll'
const  Home = lazy(()=>import("../Components/Home"));
const  Service  = lazy(()=>import("../Components/Service"));
const  Testimonials  = lazy(()=>import("../Components/Testimonials"));
const  About   = lazy(()=>import("../Components/About"));
const  Contact   = lazy(()=>import("../Components/Contact"));
const  Footer   = lazy(()=>import("../Components/Footer"));


const scroll = (url,thread,props) => {


    const elementId = url.substring(1).toLowerCase()
    const element = document.getElementById(elementId) 

    if( element!=null ){
      window.scrollTo(0,element.offsetTop)
      clearInterval(thread)
  
     
    }  else if(elementId.length ===0 ) {
      clearInterval(thread)
    }
}

function Homepage(props) {

  const url = props.history.location.pathname+""

  const thread = setInterval(()=>{
    scroll(url,thread,props)
  }, 500);
  
  return (
    <React.Fragment>
      <Suspense fallback={<p> </p>}>
      <Home/>
      <Service />
      <Testimonials />
      <About/>
      <Contact />
      <Footer />
      </Suspense>
    </React.Fragment>
  );
}

export default Homepage;
