import React, { useState } from "react";
import "./itemPage.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Categories from "../components/categories/Categories";
import SortedList from "../components/sortedList/SortedList";

function BookmarkPage({ items, isBookmarkedToggle }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const bookmarkedItems = items.filter((item) => item.isBookmarked === true);

  const selectedCategoryHandler = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  if (selectedCategory === "All") {
    return (
      <div className="itemPage">
        <Header />
        <Categories selectedCategoryHandler={selectedCategoryHandler} />
        <hr className="solid"></hr>
        <SortedList
          items={bookmarkedItems}
          isBookmarkedToggle={isBookmarkedToggle}
        />
        <Footer />
      </div>
    );
  }

  if (selectedCategory === "Product") {
    const filteredItems = bookmarkedItems.filter(
      (item) => item.type === "Product"
    );
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
    const filteredItems = bookmarkedItems.filter(
      (item) => item.type === "Category"
    );
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
    const filteredItems = bookmarkedItems.filter(
      (item) => item.type === "Exhibition"
    );
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

  const filteredItems = bookmarkedItems.filter((item) => item.type === "Brand");
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

export default BookmarkPage;
