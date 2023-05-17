import React from "react";
import "./modal.css";

function Modal({ isModal, isModalToggle, item, isBookmarkedToggle }) {
  if (isModal) {
    return (
      <div className="modalWrapper">
        {item.image_url ? (
          <img className="modalItemImg" src={item.image_url} alt="" />
        ) : (
          <img className="modalItemImg" src={item.brand_image_url} alt="" />
        )}
        {item.isBookmarked ? (
          <i
            onClick={() => {
              isBookmarkedToggle(item.id);
            }}
            className="fa-solid fa-star"
          ></i>
        ) : (
          <i
            onClick={() => {
              isBookmarkedToggle(item.id);
            }}
            className="fa-regular fa-star"
          ></i>
        )}

        <div className="titleWrapper">
          {item.title ? (
            <div className="modalItemTitle">{item.title}</div>
          ) : (
            <div className="modalItemTitle">{item.brand_name}</div>
          )}
          <button className="modalbuttonClose" onClick={isModalToggle}>
            닫기
          </button>
        </div>
      </div>
    );
  }

  return;
}

export default Modal;
