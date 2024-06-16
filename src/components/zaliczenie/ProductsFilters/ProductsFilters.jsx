import React, { useContext, useState } from "react";
import "../commonStyles.css";
import { ProductContext } from "../../../context/ProductContext";

const ProductFilters = () => {
  const { filterProducts } = useContext(ProductContext);
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter(value);
    filterProducts(value);
  };

  return (
    <div className="Wrapper">
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter products..."
        style={{ padding: "8px", fontSize: "16px" }}
      />
    </div>
  );
};

export default ProductFilters;

// / import "../commonStyles.css";

// const ProductsFilters = () => {
//   return <div className="Wrapper">Products Filters</div>;
// };

// export default ProductsFilters;
