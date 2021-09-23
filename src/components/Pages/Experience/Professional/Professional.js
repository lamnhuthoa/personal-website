import React from 'react'
import './Professional.css'

export default function Professional() {
    return (
        <div className="work-exp-container">
            <h3 className="text-center work-exp-title">Work Experiences</h3>
            <div className="work-exp-job-container mt-5">
                <div className="work-exp-job-content">
                    <div className="work-exp-job-item item--1">
                        <div className="work-exp-job-info">
                            <h3 className="p-0 m-0">DXC Technology <span style={{fontSize:"20px"}}>Intern Undergraduate Technical</span></h3>
                            <p className="p-0 m-0" style={{color:"var(--grey)"}}>Aug, 2021 - Present / Ho Chi Minh City, Vietnam</p>
                            {/* <ul>
                                <li></li>
                            </ul> */}
                        </div>
                        <div className="work-exp-job-image">
                            <img src="./img/dxc-logo-min.png" alt="dxc-logo"/>
                        </div>
                    </div>
                    <hr/>
                    <div className="work-exp-job-item item--2">
                        <div className="work-exp-job-info">
                            <h3 className="p-0 m-0">BOSCH <span style={{fontSize:"20px"}}>Facilities Management Intern</span></h3>
                            <p className="p-0 m-0" style={{color:"var(--grey)"}}>October, 2020 - Mar, 2021 / Ho Chi Minh City, Vietnam</p>
                            <ul>
                                <li>Managed employee database and the Access Control System.</li>
                                <li>Managed and maintained database for the internal tool - Space Management System.</li>
                                <li>Responsible for keeping the company's premises secured.</li>
                                <li>Responsible for reporting temperature checklist during pandemic periods.</li>
                                <li>Maintained and followed up the CCTV system.</li>
                            </ul>
                        </div>
                        <div className="work-exp-job-image">
                            <img src="./img/bosch-logo-min.png" alt="bosch-logo"/>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="text-center work-exp-title">Other Experiences</h3>
            <div className="work-exp-job-container mt-5">
                <div className="work-exp-job-content">
                    <div className="work-exp-job-item item--2">
                        <div className="work-exp-job-info">
                            <h3 className="p-0 m-0">CyberSoft Academy <span style={{fontSize:"20px"}}>Front-End Development Trainee</span></h3>
                            <p className="p-0 m-0" style={{color:"var(--grey)"}}>March, 2021 - Sep, 2021 / Ho Chi Minh City, Vietnam</p>
                            <ul>
                                <li>Designed and built responsive websites.</li>
                                <li>Languages: JavaScript (ES6), TypeScript</li>
                                <li>Libraries and Frameworks: React, Angular 2, Bootstrap, Tailwind CSS</li>
                                <li>Tools and Platforms: Git, Material UI, AntDesign</li>
                            </ul>
                        </div>
                        <div className="work-exp-job-image">
                            <img src="./img/cybersoft-academy-logo-min.png" alt="cybersoft-academy-logo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
