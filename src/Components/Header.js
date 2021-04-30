import React from "react";
import "./Header.css";

import logo from '../assets/teslaLogo.svg'

const Header = () => {
  return (
    <div>
      <div className="header">
        <div style={{backgroundImage:`URL(${logo})`}} className="image">
          
        </div>
        <div className="center">
          <p>MODEL S</p>
          <p>MODEL 3</p>
          <p>MODEL X</p>
          <p>MODEL Y</p>
          <p>SOLAR ROOF</p>
          <p>SOLAR PANELS</p>
        </div>
        <div className="right">
          <p>SHOP</p>
          <p>TESLA ACCOUNT</p>
        </div>
        <div className="burger">
          
        </div>
      </div>
    </div>
  );
};

export default Header;
