import React from "react";

import "./categories.css";

function Categories({ selectedCategoryHandler }) {
  return (
    <div className="categories">
      <div className="categoriesWrapper">
        <div
          onClick={() => {
            selectedCategoryHandler("All");
          }}
          className="category"
        >
          <i className="categoryIcon fa-solid fa-border-all"></i>
          <div className="div categoryTitle">전체</div>
        </div>
        <div
          onClick={() => {
            selectedCategoryHandler("Product");
          }}
          className="category"
        >
          <i className="categoryIcon fa-brands fa-product-hunt"></i>
          <div className="div categoryTitle">상품</div>
        </div>
        <div
          onClick={() => {
            selectedCategoryHandler("Category");
          }}
          className="category"
        >
          <i className="categoryIcon fa-solid fa-list"></i>
          <div className="div categoryTitle">카테고리</div>
        </div>
        <div
          onClick={() => {
            selectedCategoryHandler("Exhibition");
          }}
          className="category"
        >
          <i className="categoryIcon fa-solid fa-calendar-day"></i>
          <div className="div categoryTitle">기획전</div>
        </div>
        <div
          onClick={() => {
            selectedCategoryHandler("Brand");
          }}
          className="category"
        >
          <i className="categoryIcon fa-brands fa-bandcamp"></i>
          <div className="div categoryTitle">브랜드</div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
