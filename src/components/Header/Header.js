import React from 'react';
import './Header.css';

function Header({ restaurantInfo }) {
    return (
      <header>
        <h1>{restaurantInfo.name}</h1>
        <p>{restaurantInfo.address1}, {restaurantInfo.address2}, {restaurantInfo.city}, {restaurantInfo.state}, {restaurantInfo.zip}</p>
        <p>Phone: {restaurantInfo.phone}</p>
      </header>
    );
  }
  
  export default Header;
  