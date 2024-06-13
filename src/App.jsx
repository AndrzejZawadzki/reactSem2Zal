import "./App.css";
import Paragraph from "./components/Paragraph/Paragraph";
import { Outlet } from "react-router-dom";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import { ProductProvider } from "./context/productsContext";
import ProductsList from "./components/zaliczenie/ProductsList/ProductsList";
import LoadProductsButton from "./components/LoadProductsButton/LoadProductsButton";

function App() {
  return (
    <ProductProvider>
      <AppWrapper>
        <Header />
        <Content>
          <LoadProductsButton />
          {/* <ProductsList /> */}
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
