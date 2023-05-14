import React from "react";

import HomeList from "../components/homeList/HomeList";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Item from "../components/item/Item";

import "./home.css";

function Home(props) {
  return (
    <div className="home">
      <Header />
      <HomeList items={props.items} />
      <Footer className="footerInHome" />
    </div>
  );
}

export default Home;
