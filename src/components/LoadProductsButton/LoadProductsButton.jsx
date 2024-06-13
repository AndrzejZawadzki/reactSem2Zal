import React, { useContext } from "react";
import "./LoadProductsButton.css";
import { ProductContext } from "../../context/productsContext";

const LoadProductsButton = () => {
  const { setProducts } = useContext(ProductContext);
  const loadProducts = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/productsList", {
        headers: {
          Accept: "*/*",
        },
      });

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to load products: ", error);
    }
  };
  return <button onClick={loadProducts}>Load</button>;
};

export default LoadProductsButton;
