import "./App.css";
import Paragraph from "./components/Paragraph/Paragraph";
import { Outlet } from "react-router-dom";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";

import { ProductProvider } from "./context/ProductContext";
import useAuth from "./hooks/useAuth";

function App() {
  useAuth();
  const storedUserName = JSON.parse(localStorage.getItem("user"))?.username;

  return (
    <ProductProvider>
      <AppWrapper>
        <Header>
          <Paragraph
            paragraphText={`Cześć, jesteś zalogowany jako: ${storedUserName}`}
          />
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer>
          <Paragraph paragraphText="Zadanie zaliczeniowe - sem 2" />
        </Footer>
      </AppWrapper>
    </ProductProvider>
  );
}

export default App;
