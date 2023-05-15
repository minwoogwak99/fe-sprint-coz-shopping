import React from "react";

import HomeList from "../components/homeList/HomeList";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Item from "../components/item/Item";

import "./home.css";
import Toast from "../components/toast/Toast";

function Home({ items, isBookmarkedToggle }) {
  return (
    <div className="home">
      <Header />
      <HomeList items={items} isBookmarkedToggle={isBookmarkedToggle} />
      <Footer className="footerInHome" />
    </div>
  );
}

export default Home;
