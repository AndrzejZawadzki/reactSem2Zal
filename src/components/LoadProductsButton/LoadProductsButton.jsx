import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import { Box, Button, LinearProgress } from "@mui/material";

const LoadProductsButton = () => {
  const { setProducts, setLoading, setError } = useContext(ProductContext);
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  const loadProducts = async () => {
    setLoading(true);
    setError(null);
    setProgress(0);
    setShowProgress(true);
    setProducts([]);

    const totalDuration = 3000; // Total duration of 3 seconds
    const intervalDuration = 100; // Update progress every 100ms
    const increment = 100 / (totalDuration / intervalDuration);

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return newProgress;
      });
    }, intervalDuration);

    try {
      const response = await fetch("http://localhost:4000/api/productsList", {
        headers: {
          accept: "*/*",
        },
      });
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError("Failed to load products");
      console.error("Failed to load products:", error);
    } finally {
      setLoading(false);
      setTimeout(() => setShowProgress(false), 100); // Hide progress bar after 3 seconds
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Button variant="outlined" onClick={loadProducts} disabled={showProgress}>
        Load
      </Button>
      {showProgress && (
        <LinearProgress variant="determinate" value={progress} />
      )}
    </Box>
  );
};

export default LoadProductsButton;
