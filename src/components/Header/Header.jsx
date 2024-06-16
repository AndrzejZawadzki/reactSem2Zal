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

// import "./Header.css";

// const Header = () => {
//   return (
//     <div
//       style={{
//         height: "100px", // wysokość 100px
//         width: "100%", // szerokość 100%
//         backgroundColor: "#f8d7da", // kolor tła
//         display: "flex", // flexbox
//         justifyContent: "center", // wyśrodkowanie w poziomie
//         alignItems: "center", // wyśrodkowanie w pionie
//         gap: "100px", // odstęp między elementami
//       }}
//     >
//       Header
//     </div>
//   );
// };

// export default Header;
