import React from "react";
import Item from "../item/Item";
import "./homeList.css";

function HomeList(props) {
  let generalItemsFour = props.items.slice(0, 4);
  let bookmarkedItems = props.items.filter((item) => item.isBookmarked);
  console.log(`bookmark:`, bookmarkedItems);
  let bookmarkedItemsFour = bookmarkedItems.slice(0, 4);
  return (
    <div className="homeList">
      <div className="itemsGeneral">
        <div className="itemsGeneralTitle">상품 리스트</div>
        <div className="itemGeneralGroup">
          {generalItemsFour.map((item) => {
            return <Item itemData={item} />;
          })}
        </div>
      </div>
      <div className="itemsBookmarked">
        <div className="itemsBookmarkedTitle">북마크 리스트</div>
        <div className="itemBookmarkedGroup">
          {bookmarkedItemsFour.map((item) => {
            return <Item itemData={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeList;
