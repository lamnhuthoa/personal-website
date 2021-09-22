import React, { Component, useEffect } from 'react';
import './About.css';
import 'animate.css';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function About(props) {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className="about-container" id="about">
            <div className="container about-container-section">
                <h3 className="text-center about-heading">About Me</h3>
                <div className="row about-title">
                    <div className="col-3 about-title-img">
                        <div className="img-container" data-aos="fade-up">
                            <img className="img-avatar" src="./img/Image-VT-3.jpg"/>
                        </div>
                    </div>
                    <div className="col-9 row about-info-container" data-aos="fade-left">
                        <div className="text-white col-6 about-info-content about-info-content-1">
                            <li><strong>Full Name:</strong> Lâm Nhựt Hòa</li>
                            <li><strong>Education:</strong> University of Science</li>
                            <li><strong>Expected graduation:</strong> 2023</li>
                            <li><strong>Languages:</strong> English, Vietnamese</li>
                        </div>
                        <div className="text-white col-6 about-info-content about-info-content-2">
                            <li><strong>DOB:</strong> May 8, 1999</li>
                            <li><strong>Major:</strong> Information Technology</li>
                            <li><strong>Based in:</strong> Ho Chi Minh City, Vietnam</li>
                            <li><strong>Email:</strong> hoalamnhut@gmail.com</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


// onMouseOver={e => e.currentTarget.src = "./img/av-1.png"} onMouseOut={e => e.currentTarget.src = "./img/av-2.png"}
