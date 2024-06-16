import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [shoppingLoading, setShoppingLoading] = useState(false);

  const addToShoppingList = async (product) => {
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
    }
  };

  const removeFromShoppingList = async (id) => {
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
        products,
        setProducts,
        shoppingList,
        setShoppingList,
        loading,
        setLoading,
        error,
        setError,
        addToShoppingList,
        removeFromShoppingList,
        fetchShoppingList,
        shoppingLoading,
        setShoppingLoading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
