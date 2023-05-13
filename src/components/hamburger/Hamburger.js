import React from "react";
import "./hamburger.css";

function Hamburger(props) {
  return props.isTopMenu ? (
    <div className="hamburger">
      <div className="hamburgerEl">ooo님 안녕하세요</div>
      <a className="hamburgerEl" href="/">
        <i class="fa-solid fa-gift"></i>
        상품리스트 페이지
      </a>
      <a className="hamburgerEl" href="/">
        <i class="fa-regular fa-star"></i>
        북마크 페이지
      </a>
    </div>
  ) : (
    <></>
  );
  // return <div className="hamburger">Hamburger</div>;
}

export default Hamburger;
