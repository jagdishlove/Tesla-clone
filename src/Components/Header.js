import React from "react";
import "./Header.css";
import Burger from "./Burger";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="image">
          <img src="../assets/teslaLogoSmall.svg" alt=""></img>
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
          <Burger/>
        </div>
      </div>
    </div>
  );
};

export default Header;
