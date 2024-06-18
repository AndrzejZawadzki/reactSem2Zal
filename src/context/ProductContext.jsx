import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState("");
  const [shoppingList, setShoppingList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [shoppingLoading, setShoppingLoading] = useState(false);
  const [error, setError] = useState(null);

  const filterProducts = (criteria) => {
    setFilterCriteria(criteria);
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(criteria.toLowerCase())
      )
    );
    // }
  };

  const addToShoppingList = async (product) => {
    setShoppingLoading(true);
    try {
      const response = await fetch("http://localhost:4000/api/shoppingList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) throw new Error("Failed to add product");
      const newShoppingList = await fetchShoppingList();
      setShoppingList(newShoppingList);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setShoppingLoading(false);
    }
  };

  const removeFromShoppingList = async (id) => {
    setShoppingLoading(true);
    try {
      const response = await fetch(
        `http://localhost:4000/api/shoppingList/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) throw new Error("Failed to remove product");
      const removedProduct = await response.json();
      setShoppingList((prevList) =>
        prevList.filter((item) => item.id !== removedProduct.id)
      );
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setShoppingLoading(false);
    }
  };

  const fetchShoppingList = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/shoppingList");
      if (!response.ok) throw new Error("Failed to fetch shopping list");
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  return (
    <ProductContext.Provider
      value={{
        setFilteredProducts,
        filteredProducts,
        shoppingList,
        setShoppingList,
        loading,
        setLoading,
        shoppingLoading,
        setError,
        addToShoppingList,
        removeFromShoppingList,
        fetchShoppingList,
        filterProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
