import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./item.css";
import Modal from "../modal/Modal";

function Item({ itemData, isBookmarkedToggle }) {
  let item = itemData;
  const [isModal, setIsModal] = useState(false);

  const notify = () => {
    if (item.isBookmarked) {
      return toast("북마크에 추가되었습니다");
    }

    return toast("북마크에 제거되었습니다.");
  };

  const isModalToggle = () => {
    setIsModal(!isModal);
  };

  if (item && item["type"] === "Product") {
    return (
      <div className="item">
        <ToastContainer />
        <Modal
          isModal={isModal}
          isModalToggle={isModalToggle}
          item={item}
          isBookmarkedToggle={isBookmarkedToggle}
        />
        <div className="itemWrapper">
          <div className="itemImageWrapper">
            <img
              onClick={isModalToggle}
              className="itemPic"
              src={item.image_url}
              alt=""
              draggable="false"
            />
            {item.isBookmarked ? (
              <i
                onClick={() => {
                  isBookmarkedToggle(item.id);
                  notify();
                }}
                className="fa-solid fa-star"
              ></i>
            ) : (
              <i
                onClick={() => {
                  isBookmarkedToggle(item.id);
                  notify();
                }}
                className="fa-regular fa-star"
              ></i>
            )}
          </div>
          <div className="productDesc">
            <div onClick={isModalToggle} className="productTitle">
              {item.title}
            </div>
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
        <Modal
          isModal={isModal}
          isModalToggle={isModalToggle}
          item={item}
          isBookmarkedToggle={isBookmarkedToggle}
        />
        <div className="itemWrapper">
          <div className="itemImageWrapper">
            <img
              onClick={isModalToggle}
              className="itemPic"
              src={item.image_url}
              alt=""
              draggable="false"
            />
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
            <div onClick={isModalToggle} className="categoryDescTitle">
              #{item.title}
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (item && item["type"] === "Exhibition") {
    return (
      <div className="item">
        <Modal
          isModal={isModal}
          isModalToggle={isModalToggle}
          item={item}
          isBookmarkedToggle={isBookmarkedToggle}
        />
        <div className="itemWrapper">
          <div className="itemImageWrapper">
            <img
              onClick={isModalToggle}
              className="itemPic"
              src={item.image_url}
              alt=""
              draggable="false"
            />
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
          <div onClick={isModalToggle} className="exhibitionDescTitle">
            {item.title}
          </div>
          <div>{item.sub_title}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="item">
      <Modal
        isModal={isModal}
        isModalToggle={isModalToggle}
        item={item}
        isBookmarkedToggle={isBookmarkedToggle}
      />
      <div className="itemWrapper">
        <div className="itemImageWrapper">
          <img
            onClick={isModalToggle}
            className="itemPic"
            src={item && item.brand_image_url}
            alt=""
            draggable="false"
          />
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
          <div onClick={isModalToggle} className="branddescTitle">
            {item && item.brand_name}
          </div>
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
