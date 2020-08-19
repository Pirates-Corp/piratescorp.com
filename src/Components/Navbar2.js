import React from 'react';

const Navbar = (props) =>{
  return(
      <React.Fragment>
      <header>
        <nav className="nav2">
          

        <a href="/" >
        <i className="fas fa-chevron-circle-left"></i>
                </a>
        <h2>{props.heading}</h2>
        </nav>
      </header>
      </React.Fragment>
  )
}

export default Navbar;