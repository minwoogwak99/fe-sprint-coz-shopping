import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Pages/Home";

function App() {
  const [itemData, setItemData] = useState([]);

  const fetchData = () => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItemData(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {itemData.map((user) => (
        <div>{user.title}</div>
      ))}
    </div>
  );
}

export default App;
