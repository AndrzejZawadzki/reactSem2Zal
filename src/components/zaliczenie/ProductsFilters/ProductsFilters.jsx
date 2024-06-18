import React, { useContext, useState } from "react";
import "../commonStyles.css";
import { ProductContext } from "../../../context/ProductContext";
import { TextField } from "@mui/material";

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
      <TextField
        label="Filter products"
        variant="outlined"
        onChange={handleFilterChange}
        value={filter}
      />
    </div>
  );
};

export default ProductFilters;
