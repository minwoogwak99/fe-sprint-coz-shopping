import React from "react";

import HomeList from "../components/homeList/HomeList";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

import "./home.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <HomeList />
      <Footer className="footerInHome" />
    </div>
  );
}

export default Home;
