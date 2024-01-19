import theme from "../../theme/theme";
import About from "../About/About";
import ArticleCard from "../ArticleCard/ArticleCard";
import ButtonDivider from "../ButtonDivider/ButtonDivider";
import Details from "../Details/Details";
import Footer from "../Footer/Footer";
import RoomWithCards from "../FurnitureRoom/RoomWithCards";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Lookbook from "../Lookbook/Lookbook";
import PhotoCenter from "../PhotoCenter/PhotoCenter";
import ProductExample from "../ProductExample/ProductExample";
import ProductListPrimary from "../ProductListPrimary/ProductListPrimary";
import ProductListSecondary from "../ProductListSecondary/ProductListSecondary";
import StoriesBlock from "../StoriesBlock/StoriesBlock";
import Subscribe from "../Subscribe/Subscribe";
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
        <PhotoCenter/> 
        <StoriesBlock/>
        <ArticleCard/>
        <Subscribe/>
      </main>
      <Footer/>
     
    </ThemeProvider>
  );
}

export default App;
