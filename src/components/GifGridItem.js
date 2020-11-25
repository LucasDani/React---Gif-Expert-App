import React from "react";
import "animate.css";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card  animate__animated animate__fadeInRightBig">
      <img src={url} alt={title} className="center" />
      <p>{title}</p>
    </div>
  );
};
