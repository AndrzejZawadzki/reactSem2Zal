import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container } from "@mui/material";

const Header = ({ children }) => {
  const navigate = useNavigate();
  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <div
      style={{
        height: "100px", // height 100px
        width: "100%", // width 100%
        backgroundColor: "#f8d7da", // background color
        display: "flex", // flexbox
        justifyContent: "center", // center horizontally
        alignItems: "center", // center vertically
        gap: "100px", // gap between elements
      }}
    >
      {children}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Container maxWidth="xs">
          <form
            onSubmit={handleLogout}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Button variant="contained" color="primary" type="submit">
              Logout
            </Button>
          </form>
        </Container>
      </Box>
    </div>
  );
};

export default Header;
