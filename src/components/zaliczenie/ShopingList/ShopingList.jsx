import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../../context/ProductContext";
import "../commonStyles.css";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

const ShoppingList = () => {
  const {
    shoppingList,
    setShoppingList,
    removeFromShoppingList,
    fetchShoppingList,
  } = useContext(ProductContext);

  useEffect(() => {
    const loadShoppingList = async () => {
      const list = await fetchShoppingList();
      setShoppingList(list);
    };
    loadShoppingList();
  }, []);

  return (
    <div className="App">
      <header className="AppHeader">
        <p style={{ color: "black" }}>Shopping List</p>
        <ul>
          {shoppingList.map((product) => (
            <li
              key={product.id}
              style={{ color: "black", cursor: "pointer" }}
              onClick={() => removeFromShoppingList(product.id)}
            >
              {product.name}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default ShoppingList;
