import theme from "../../theme/theme";
import About from "../About/About";
import ArticleCard from "../ArticleCard/ArticleCard";
import Details from "../Details/Details";
import RoomWithCards from "../FurnitureRoom/RoomWithCards";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Lookbook from "../Lookbook/Lookbook";
import ProductExample from "../ProductExample/ProductExample";
import ProductListPrimary from "../ProductListPrimary/ProductListPrimary";
import ProductListSecondary from "../ProductListSecondary/ProductListSecondary";
import "./App.css";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <Hero />
        <About />
        <ProductListPrimary/>
        <ProductExample/>
        <RoomWithCards/>
        <Lookbook/>
        <ProductListSecondary/>
        <Details/>
        <ArticleCard/>
      </main>

    </ThemeProvider>
  );
}

export default App;
