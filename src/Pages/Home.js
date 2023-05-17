import React from "react";

import HomeList from "../components/homeList/HomeList";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

import "./home.css";

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
