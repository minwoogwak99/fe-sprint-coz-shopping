import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Item from "./components/item/Item";

function App() {
  const [itemData, setItemData] = useState([]);

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
      <Home items={itemData} />
    </div>
  );
}

export default App;
