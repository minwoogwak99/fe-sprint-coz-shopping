import React from "react";

import Item from "../item/Item";
import "./sortedList.css";

function SortedList({ items, isBookmarkedToggle }) {
  return (
    <div className="itemPageListAll">
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            itemData={item}
            isBookmarkedToggle={isBookmarkedToggle}
          />
        );
      })}
    </div>
  );
}

export default SortedList;
