import theme from '../../theme/theme';
import About from '../About/About';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import './App.css';
import { ThemeProvider } from "@mui/material";


function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Header/>
      <Hero/> */}
      <About/>
    </ThemeProvider>

  );
}

export default App;

