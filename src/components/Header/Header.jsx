import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div
      style={{
        height: "100px", // height 100px
        width: "100%", // width 100%
        backgroundColor: "#f8d7da", // background color
        display: "flex", // flexbox
        justifyContent: "center", // center horizontally
        alignItems: "center", // center vertically
        gap: "100px", // gap between elements
      }}
    >
      <div>Header</div>
    </div>
  );
};

export default Header;
