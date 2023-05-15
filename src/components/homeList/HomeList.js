import React from "react";
import Item from "../item/Item";
import "./homeList.css";

function HomeList({ items, isBookmarkedToggle }) {
  let generalItemsFour = items.slice(0, 4);
  let bookmarkedItems = items.filter((item) => item.isBookmarked);
  let bookmarkedItemsFour = bookmarkedItems.slice(0, 4);

  return (
    <div className="homeList">
      <div className="itemsGeneral">
        <div className="itemsGeneralTitle">상품 리스트</div>
        <div className="itemGeneralGroup">
          {generalItemsFour.map((item) => {
            return (
              <Item itemData={item} isBookmarkedToggle={isBookmarkedToggle} />
            );
          })}
        </div>
      </div>
      <div className="itemsBookmarked">
        <div className="itemsBookmarkedTitle">북마크 리스트</div>
        <div className="itemBookmarkedGroup">
          {bookmarkedItemsFour.map((item) => {
            return (
              <Item itemData={item} isBookmarkedToggle={isBookmarkedToggle} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeList;
