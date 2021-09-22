import React, { Component, useState, useEffect } from "react";
import "./Intro.css";
import "./IntroSLider.css";
import "animate.css";
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Intro() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <React.Fragment>
      <div className="intro-container">
        <section className="container intro-container-section">
          <div className="row">
            <div className="col-6 intro-title-container" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
              <h4 className="intro-text">Hello! It's</h4>
              <h1 className="intro-title">Hoa Lam</h1>
              <h4 className="intro-text">Software Developer who plays guitar</h4>
            </div>

            <div className="col-6 download-container" data-aos="fade" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <div className="d-flex flex-column justify-content-center align-items-center download-container-content">
                <div className="text-center">
                  <img src="./img/guitar-player.png" width={350} />
                </div>
                <div className="button-section">
                  <a href="#about">
                    <button className="btn-about">About Me</button>
                  </a>
                  <a>
                    <button className="CV-download">View Resume</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
