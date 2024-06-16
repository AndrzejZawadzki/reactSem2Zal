import React, { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";
import "../commonStyles.css";
import LoadProductsButton from "../../LoadProductsButton/LoadProductsButton";

const ProductsList = () => {
  const { filteredProducts, addToShoppingList } = useContext(ProductContext);

  return (
    <div className="App">
      <header className="AppHeader">
        <p style={{ color: "black" }}>Products List</p>
        <LoadProductsButton />
        <ul>
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              style={{ color: "black", cursor: "pointer" }}
              onClick={() => addToShoppingList(product)}
            >
              {product.name}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default ProductsList;
