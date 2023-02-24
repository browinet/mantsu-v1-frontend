import React from "react";

function Banner() {
  return (
    <div
      className="banner-container"
      style={{
        backgroundImage: `url(imgs/assets/banner.jpg)`,
      }}
    >
      <div className="banner">
        <p>YOUR NEW SHOP TO GET MANGA</p>
      </div>
    </div>
  );
}

export default Banner;
