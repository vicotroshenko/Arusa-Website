import theme from "../../theme/theme";
import About from "../About/About";
import ArticleCard from "../ArticleCard/ArticleCard";
import Details from "../Details/Details";
import Footer from "../Footer/Footer";
import RoomWithCards from "../RoomWithCards/RoomWithCards";
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
import Lenis from '@studio-freight/lenis'
import { useEffect } from "react";


const lenis = new Lenis()

function App() {

  useEffect(() => {
    lenis.on('scroll', (e:any) => {
    })

    function raf(time:any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])
  
  return (
    <ThemeProvider theme={theme}>
    <Header />
          <main style={{overflow: "hidden"}}>
            <Hero />
            <About />
            <ProductListPrimary />
            <ProductExample />
            <RoomWithCards />
            <Lookbook />
            <ProductListSecondary />
            <Details />
            <PhotoCenter />
            <StoriesBlock />
            <ArticleCard />
            <Subscribe />
          </main>
          <Footer />
    </ThemeProvider>
  );
}

export default App;
