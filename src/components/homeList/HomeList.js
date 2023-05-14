import React from "react";

function HomeList(props) {
  return (
    <div className="homeList">
      <div className="itemsGeneral">
        <div className="itemsGeneralTitle">상품 리스트</div>
      </div>
      <div className="itemsBookmarked">
        <div className="itemsBookmarkedTitle">북마크 리스트</div>
      </div>
    </div>
  );
}

export default HomeList;
