import React from "react";
import "./itemPage.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function ItemPage() {
  return (
    <div className="itemPage">
      <Header />
      <div className="itemPageWrapper">
        <div className="categories">
          <div className="category">
            <i className="categoryIcon fa-solid fa-border-all"></i>
            <div className="div categoryTitle">전체</div>
          </div>
          <div className="category">
            <i className="categoryIcon fa-brands fa-product-hunt"></i>
            <div className="div categoryTitle">상품</div>
          </div>
          <div className="category">
            <i className="categoryIcon fa-solid fa-list"></i>
            <div className="div categoryTitle">카테고리</div>
          </div>
          <div className="category">
            <i className="categoryIcon fa-solid fa-calendar-day"></i>
            <div className="div categoryTitle">기획전</div>
          </div>
          <div className="category">
            <i className="categoryIcon fa-brands fa-bandcamp"></i>
            <div className="div categoryTitle">브랜드</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ItemPage;
