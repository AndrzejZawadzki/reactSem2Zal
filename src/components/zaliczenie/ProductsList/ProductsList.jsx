import React, { useContext } from "react";
import "../commonStyles.css";
import { ProductContext } from "../../../context/productsContext";

const ProductsList = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="App">
      <header className="AppHeader">
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </header>
    </div>
  );
};

export default ProductsList;
