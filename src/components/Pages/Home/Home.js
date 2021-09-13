import React from "react";
import About from "./About/About";
import Intro from "./Intro/Intro";

export default function Home(props) {
  return (
    <React.Fragment>
        <Intro/>
        <About/>
    </React.Fragment>
  );
}
