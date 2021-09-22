import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import Eror404 from "../Eror404/Eror404";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume-section" style={{ overflow: "hidden" }}>
      {/* <Eror404/> */}
      <div style={{ backgroundColor: "var(--white)", height: "100%" }}>
        {/* Back To Home Button */}
        <div className="container navigation-container">
          <NavLink to="/" className="nav-redirect">
            <button className="border-0 mt-4 mb-4 btn-redirect-to-home">
              <i class="fa fa-arrow-left" aria-hidden="true"></i> Back to Home
            </button>
          </NavLink>
          <button className="border-0 mt-4 mb-4 btn-download-resume ml-5">
            <i class="fa fa-download" aria-hidden="true"></i> Download Resume
          </button>
        </div>
        {/* Back To Home Button */}

        {/* Resume */}
        <div className="container" style={{ padding: "0 0 2rem 0" }}>
          <div className="resume-title">
            <h1>LÂM NHỰT HÒA</h1>
            {/* Resume Contact Info */}
            <div className="resume-contact-info">
              <ul
                style={{ listStyle: "none", fontSize: "14px" }}
                className="p-0 d-flex flex-row justify-content-start"
              >
                <li className="d-flex flex-row align-items-center">
                  <i className="fa fa-map-pin mr-2" aria-hidden="true"></i>
                  <span>Ho Chi Minh City, Vietnam</span>
                </li>
              </ul>
              <ul
                style={{ listStyle: "none", fontSize: "14px" }}
                className="p-0 d-flex flex-row justify-content-start"
              >
                <li className="d-flex flex-row align-items-center mr-5">
                  <i className="fa fa-phone-square mr-2" aria-hidden="true"></i>
                  <span>(+84) 936 122 978</span>
                </li>
                <li className="d-flex flex-row align-items-center mr-5">
                  <i className="fa fa-envelope mr-2" aria-hidden="true"></i>
                  <span>hoalamnhut@gmail.com</span>
                </li>
                <li className="d-flex flex-row align-items-center mr-5">
                  <i className="fas fa-globe-asia mr-2"></i>
                  <span>lamnhuthoa.netlify.app</span>
                </li>
                <li className="d-flex flex-row align-items-center mr-5">
                  <i className="fab fa-linkedin mr-2"></i>
                  <span>linkedin.com/in/lamnhuthoa</span>
                </li>
                <li className="d-flex flex-row align-items-center">
                  <i className="fab fa-github-square mr-2"></i>
                  <span>github.com/lamnhuthoa</span>
                </li>
              </ul>
            </div>
            {/* Resume Contact Info */}
          </div>
          <hr />

          <div className="resume-skill">
            {/* Tech Skill */}
            <h4 className="resume-skill-item-title">Technical</h4>
            <ul style={{ listStyle: "circle" }} className="p-0 ml-3">
              <li>
                <strong>Programming:</strong> JavaScript(ES6), C#, Python, GIT
              </li>
              <li>
                <strong>Website:</strong> HTML/CSS, SASS, React, Angular,
                Express
              </li>
            </ul>
            {/* Other Skill */}
            <h4 className="resume-skill-item-title">Other skills</h4>
            <ul style={{ listStyle: "circle" }} className="p-0 ml-3">
              <li>Music Performance, Photography, Figma, MS Office</li>
            </ul>
          </div>

          {/* Professional experience */}
          <div className="resume-experience professional-experience">
            <h4 className="resume-skill-item-title">Professional Experience</h4>
            <div className="professional-experience-item professional-experience-item--1">
              <div className="professional-experience-item-title d-flex flex-row justify-content-between">
                <h5 className="p-0 m-0">
                  Intern Undergraduate Technical | DXC Technology
                </h5>
                <span style={{ fontSize: "14px" }} className="date">
                  Aug, 2021 - Present
                </span>
              </div>
              <ul style={{ listStyle: "circle" }} className="p-0 ml-3">
                <li>
                  Developing applications, programming functionalities on
                  CLoud-based Application
                </li>
                <li>Front-end Development with Angular</li>
              </ul>
            </div>
          </div>

          {/* Other experience */}
          <div className="resume-experience other-experience">
            <h4 className="resume-skill-item-title">Other Experience</h4>
            {/* Other Exp 1 */}
            <div className="other-experience-item other-experience-item--1">
              <div className="other-experience-item-title d-flex flex-row justify-content-between">
                <h5 className="p-0 m-0">
                  Front-end Development Trainee | CyberSoft Academy
                </h5>
                <span style={{ fontSize: "14px" }} className="date">
                  March, 2021 - Sep, 2021
                </span>
              </div>
              <ul style={{ listStyle: "circle" }} className="p-0 ml-3">
                <li>Created and designed websites with React, Angular</li>
                <li>Responsive Web Design</li>
              </ul>
            </div>
            {/* Other Exp 2 */}
            <div className="other-experience-item other-experience-item--2">
              <div className="other-experience-item-title d-flex flex-row justify-content-between">
                <h5 className="p-0 m-0">
                  Facilities Management Intern | BOSCH
                </h5>
                <span style={{ fontSize: "14px" }} className="date">
                  October, 2020 - April, 2021
                </span>
              </div>
              <ul style={{ listStyle: "circle" }} className="p-0 ml-3">
                <li>
                  Managed employee's database and maintained the Access Control
                  System
                </li>
                <li>
                  Managed database for internal tool - Space Management System.
                </li>
                <li>
                  Created procedures relating to the company's facilities.
                </li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="resume-education">
            <div className="education-content">
              <h4 className="resume-skill-item-title">Education</h4>
              <div className="education-item education--1">
                <div className="other-experience-item-title d-flex flex-row justify-content-between">
                  <h5 className="p-0 m-0">
                    VNU - HCM University of Science |{" "}
                    <span style={{ fontSize: "14px" }} className="major">
                      Information Technology
                    </span>
                  </h5>
                  <span style={{ fontSize: "14px" }} className="date">
                    June, 2021 - Present
                  </span>
                </div>
                <ul style={{ listStyle: "circle" }} className="p-0 ml-3">
                  <li>Bachelor's Degree</li>
                  <li>
                    Courses: Introductory Programming, Computer Network,
                    Computer System, Statistics and Probability
                  </li>
                  <li>Expected graduation: 2023</li>
                </ul>
              </div>

              <div className="education-item education--2">
                <div className="other-experience-item-title d-flex flex-row justify-content-between">
                  <h5 className="p-0 m-0">
                    HCMC University of Economics |{" "}
                    <span style={{ fontSize: "14px" }} className="major">
                      International Business
                    </span>
                  </h5>
                  <span style={{ fontSize: "14px" }} className="date">
                    Sep, 2017 - Mar, 2021
                  </span>
                </div>
                <ul style={{ listStyle: "circle" }} className="p-0 ml-3">
                  <li>Bachelor's Degree</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Languages */}
          <div className="resume-language">
            <div className="language-content">
              <h4 className="resume-skill-item-title">Languages</h4>
              <ul
                className="language-item p-0 ml-3"
                style={{ listStyle: "circle" }}
              >
                <li className="d-flex flex-row align-items-center justify-content-between">
                  <strong className="language">
                    English
                  </strong>
                  <div className="language-level text-left">
                    <span> | Business Proficiency | TOEIC 835</span>
                  </div>
                </li>
                <li className="d-flex flex-row align-items-center justify-content-between">
                  <strong className="language">
                    Vietnamese
                  </strong>
                  <div className="language-level text-left">
                    <span> | Native</span>
                  </div>
                </li>
                <li className="d-flex flex-row align-items-center justify-content-between">
                  <strong className="language">
                    German
                  </strong>
                  <div className="language-level text-left">
                    <span> | Elementary</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
