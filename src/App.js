import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import ItemPage from "./Pages/ItemPage";
import BookmarkPage from "./Pages/BookmarkPage";

function App() {
  const [itemData, setItemData] = useState([]);

  let isBookmarkedToggle = (id = 999) => {
    console.log(`isbookmardToggle executed: ${id}`);
    const updatedData = itemData.map((item) => {
      if (item.id === id) {
        item.isBookmarked = !item.isBookmarked;
        console.log(
          `id ${id} is changing the isBookmarked into ${item.isBookmarked}`
        );
        return item;
      }
      return item;
    });
    setItemData(updatedData);
  };

  const fetchData = () => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let dataToPut = data.map((item) => {
          return {
            isBookmarked: false,
            ...item,
          };
        });
        setItemData(dataToPut);
        console.log(dataToPut);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home items={itemData} isBookmarkedToggle={isBookmarkedToggle} />
            }
          />
          <Route
            path="/items"
            element={
              <ItemPage
                items={itemData}
                isBookmarkedToggle={isBookmarkedToggle}
              />
            }
          />
          <Route
            path="/bookmarked"
            element={
              <BookmarkPage
                items={itemData}
                isBookmarkedToggle={isBookmarkedToggle}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
