import { React, useState } from "react";
import "./header.css";
import logoImage from "../../logo.svg";
import Hamburger from "../hamburger/Hamburger";

function Header() {
  let [isTopMenu, setIsTopMenu] = useState(false);

  let menuToggle = () => {
    setIsTopMenu(!isTopMenu);
  };

  return (
    <div className="header">
      <div className="left">
        <a href="/">
          <img src={logoImage} alt="" className="logoImage" />
        </a>
        <div className="logoTitle">5 Stars Shopping</div>
      </div>
      <div className="right" onClick={menuToggle}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <Hamburger isTopMenu={isTopMenu} />
    </div>
  );
}

export default Header;
