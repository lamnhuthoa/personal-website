import React from "react";
import ButtonBackToTop from "../../ButtonBackToTop/ButtonBackToTop";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import ScrollToTop from "../../ScrollToTop";
import Social from "../../Social/Social";
import About from "./About/About";
import Intro from "./Intro/Intro";

export default function Home(props) {
  return (
    <React.Fragment>
      <ScrollToTop />
      <Header />
      <Intro />
      <About />
      <Social />
      <ButtonBackToTop />
      <Footer />
    </React.Fragment>
  );
}
