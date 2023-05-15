import React from "react";
import "./item.css";

function Item({ itemData, isBookmarkedToggle }) {
  let item = itemData;

  if (item && item["type"] === "Product") {
    return (
      <div className="item">
        <div className="itemWrapper">
          <div className="itemImageWrapper">
            <img className="itemPic" src={item.image_url} alt="" />
            {item.isBookmarked ? (
              <i
                onClick={() => isBookmarkedToggle(item.id)}
                className="fa-solid fa-star"
              ></i>
            ) : (
              <i
                onClick={() => isBookmarkedToggle(item.id)}
                className="fa-regular fa-star"
              ></i>
            )}
          </div>
          <div className="productDesc">
            <div className="productTitle">{item.title}</div>
            <div className="productDescRight">
              <div className="productDescPerc">{item.discountPercentage} %</div>
              <div>{item.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (item && item["type"] === "Category") {
    return (
      <div className="item">
        <div className="itemWrapper">
          <div className="itemImageWrapper">
            <img className="itemPic" src={item.image_url} alt="" />
            {item.isBookmarked ? (
              <i
                onClick={() => isBookmarkedToggle(item.id)}
                className="fa-solid fa-star"
              ></i>
            ) : (
              <i
                onClick={() => isBookmarkedToggle(item.id)}
                className="fa-regular fa-star"
              ></i>
            )}
          </div>
          <div className="productDesc">
            <div className="categoryDescTitle">#{item.title}</div>
          </div>
        </div>
      </div>
    );
  }
  if (item && item["type"] === "Exhibition") {
    return (
      <div className="item">
        <div className="itemWrapper">
          <div className="itemImageWrapper">
            <img className="itemPic" src={item.image_url} alt="" />
            {item.isBookmarked ? (
              <i
                onClick={() => isBookmarkedToggle(item.id)}
                className="fa-solid fa-star"
              ></i>
            ) : (
              <i
                onClick={() => isBookmarkedToggle(item.id)}
                className="fa-regular fa-star"
              ></i>
            )}
          </div>
          <div className="exhibitionDescTitle">{item.title}</div>
          <div>{item.sub_title}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="item">
      <div className="itemWrapper">
        <div className="itemImageWrapper">
          <img className="itemPic" src={item && item.brand_image_url} alt="" />
          {item && item.isBookmarked ? (
            <i
              onClick={() => isBookmarkedToggle(item.id)}
              className="fa-solid fa-star"
            ></i>
          ) : (
            <i
              onClick={() => isBookmarkedToggle(item.id)}
              className="fa-regular fa-star"
            ></i>
          )}
        </div>
        <div className="productDesc">
          <div className="branddescTitle">{item && item.brand_name}</div>
          <div className="brandDescRight">
            <div className="follower">관심 고객수</div>
            <div>{item && item.follower}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
