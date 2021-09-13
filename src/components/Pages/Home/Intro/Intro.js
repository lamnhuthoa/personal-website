import React, { Component } from "react";
import "./Intro.css";
import "animate.css";

export default class Intro extends Component {
  render() {
    let jobTitle = "Front-End Developer";
    let greetings = "Welcome to my website!";

    return (
      <div className="intro-container">
        <section className="container intro-container-section">
          <div className="row">
            <div className="col-6 intro-title-container animate__animated animate__fadeInLeft">
              <h4 className="intro-text">Hello! It's</h4>
              <h1 className="intro-title">Hoa Lam</h1>
              {/* <p className="intro-small-text">Lâm Nhựt Hòa</p> */}
              <h4 className="intro-text">{greetings}</h4>
            </div>
            <div className="col-6 download-container animate__animated animate__fadeIn animate__delay-1s">
              <div className="d-flex flex-column justify-content-center align-items-center download-container-content">
                <div className="text-center">
                  <img src="./img/welcome-image.png" width={350} />
                </div>
                <div className="button-section">
                  <a href="#about">
                    <button className="btn-about">About Me</button>
                  </a>
                  <a href="">
                    <button className="CV-download">View Resume</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
