import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Social from "./components/Pages/Social/Social";
import Header from "./components/Pages/Header/Header";
import Footer from "./components/Pages/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import Experience from "./components/Pages/Experience/Experience";
import ScrollToTop from "./components/ScrollToTop";
import ButtonBackToTop from "./components/Pages/ButtonBackToTop/ButtonBackToTop";

function App() {
  return (
    <Router className="App" style={{ position: "relative" }}>
      <ScrollToTop/>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}>
        </Route>
        <Route exact path="/experience" component={Experience}></Route>
      </Switch>
      <Social />
      <ButtonBackToTop/>
      <Footer />
    </Router>
  );
}

export default App;
