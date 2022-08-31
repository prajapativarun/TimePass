import React, { Component } from 'react'

// Stateless Function Component
const NavBar = props => {
    console.log('NavBar - Rendered');

    return ( 
        <nav className="navbar navbar-red bg-dark">
        <a className="navbar-brand" href="#">
            <b>Shoping List</b>{" "}
            <span className='badge badge-pill badge-secondary'>
                {props.totalCounters}
            </span>
        </a>
        <a>
            <label >Search here    :    
            <input type="search" />
            </label>
        </a>
        </nav>
     );
};

export default NavBar;