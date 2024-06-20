import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { Box, Button, Container, TextField } from "@mui/material";
import { AuthContext } from "../../context/authContext";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { authUser, setAuthUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const user = {
      username: username,
      password: password,
    };

    localStorage.setItem("user", JSON.stringify(user));
    navigate("/dashboard");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Container maxWidth="xs">
        <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            label="Register"
            required
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            required
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            color="primary"
          />
          <Button
            onSubmit={handleRegister}
            variant="contained"
            color="primary"
            type="submit"
          >
            Register and Login
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Go to Login
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Register;
