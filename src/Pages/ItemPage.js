import React, { useState } from "react";
import "./itemPage.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Categories from "../components/categories/Categories";
import SortedList from "../components/sortedList/SortedList";

function ItemPage({ items, isBookmarkedToggle }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const selectedCategoryHandler = (categoryName) => {
    setSelectedCategory(categoryName);
    console.log(`${categoryName} will be applied to selectedCategory`);
  };

  if (selectedCategory === "All") {
    return (
      <div className="itemPage">
        <Header />
        <Categories selectedCategoryHandler={selectedCategoryHandler} />
        <hr className="solid"></hr>
        <SortedList items={items} isBookmarkedToggle={isBookmarkedToggle} />
        <Footer />
      </div>
    );
  }

  if (selectedCategory === "Product") {
    const filteredItems = items.filter((item) => item.type === "Product");
    return (
      <div className="itemPage">
        <Header />
        <Categories selectedCategoryHandler={selectedCategoryHandler} />
        <hr className="solid"></hr>
        <SortedList
          items={filteredItems}
          isBookmarkedToggle={isBookmarkedToggle}
        />
        <Footer />
      </div>
    );
  }

  if (selectedCategory === "Category") {
    const filteredItems = items.filter((item) => item.type === "Category");
    return (
      <div className="itemPage">
        <Header />
        <Categories selectedCategoryHandler={selectedCategoryHandler} />
        <hr className="solid"></hr>
        <SortedList
          items={filteredItems}
          isBookmarkedToggle={isBookmarkedToggle}
        />
        <Footer />
      </div>
    );
  }

  if (selectedCategory === "Exhibition") {
    const filteredItems = items.filter((item) => item.type === "Exhibition");
    return (
      <div className="itemPage">
        <Header />
        <Categories selectedCategoryHandler={selectedCategoryHandler} />
        <hr className="solid"></hr>
        <SortedList
          items={filteredItems}
          isBookmarkedToggle={isBookmarkedToggle}
        />
        <Footer />
      </div>
    );
  }

  const filteredItems = items.filter((item) => item.type === "Brand");
  return (
    <div className="Brand">
      <Header />
      <Categories selectedCategoryHandler={selectedCategoryHandler} />
      <hr className="solid"></hr>
      <SortedList
        items={filteredItems}
        isBookmarkedToggle={isBookmarkedToggle}
      />
      <Footer />
    </div>
  );
}

export default ItemPage;
