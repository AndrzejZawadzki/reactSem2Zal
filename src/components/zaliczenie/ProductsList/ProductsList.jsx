import { ProductContext } from "../../../context/ProductContext";
import LoadProductsButton from "../../LoadProductsButton/LoadProductsButton";
import "../commonStyles.css";
import React, { useContext } from "react";

const ProductsList = () => {
  const { products, error } = useContext(ProductContext);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="App">
      <header className="AppHeader">
        <p style={{ color: "black" }}>Products List</p>
        <LoadProductsButton />
        <ul>
          {products.map((product) => (
            <li key={product.id} style={{ color: "black" }}>
              {product.name}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default ProductsList;
