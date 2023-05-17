import React from "react";

import "./toast.css";

function Toast({ isToast }) {
  if (isToast) {
    console.log(isToast);
    return <div className="toastRemove toast">북마크에 제거되었습니다.</div>;
  }
  return <div className="toastAdd toast">북마크에 추가되었습니다.</div>;
}

export default Toast;
