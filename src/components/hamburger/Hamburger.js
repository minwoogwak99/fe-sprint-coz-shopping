import React from "react";
import { Link } from "react-router-dom";
import "./hamburger.css";

function Hamburger(props) {
  return (
    props.isTopMenu && (
      <div className="hamburger">
        <div className="hamburgerEl">ooo님 안녕하세요</div>
        <Link className="hamburgerEl" to="/items">
          <i className="fa-solid fa-gift"></i>
          상품리스트 페이지
        </Link>
        <Link className="hamburgerEl" to="/bookmarked">
          <i className="fa-regular fa-star-half-stroke"></i>
          북마크 페이지
        </Link>
      </div>
    )
  );
  // return <div className="hamburger">Hamburger</div>;
}

export default Hamburger;
