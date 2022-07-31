import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) =>{
  return(
      <React.Fragment>
      <header>
        <nav className="nav2">
          
        <Link to="/">
        <i className="fas fa-chevron-circle-left"></i>
        </Link>   
        <h2>{props.heading}</h2>
        </nav>
      </header>
      </React.Fragment>
  )
}

export default Navbar;