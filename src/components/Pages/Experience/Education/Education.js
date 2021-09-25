import React from 'react';
import './Education.css'

export default function Education() {
    return (
        <div className="edu-container">
            <h3 className="text-center edu-title">Education</h3>
            <div className="edu-exp-container">
                <div className="edu-exp-content">
                    <div className="edu-exp-item">
                        <div className="edu-exp-info">
                            <h3 className="p-0 m-0">HCMC University of Science</h3>
                            <p className="p-0 m-0" style={{color:"var(--grey)"}}>June, 2021 - Present / Ho Chi Minh City, Vietnam</p>
                            <ul>
                                <li>Major: Information Technology</li>
                                <li>Expected graduation: 2023</li>
                            </ul>
                        </div>
                        <div className="edu-exp-image">
                            <img src="https://www.k4all.org/wp-content/uploads/logos/Academia/Asia_Vietnam_University_Vietnam%20National%20University%20Ho%20Chi%20Minh%20City_logo.png" alt="cybersoft-academy-logo"/>
                        </div>
                    </div>
                </div>
                <div className="edu-exp-content">
                    <div className="edu-exp-item">
                        <div className="edu-exp-info">
                            <h3 className="p-0 m-0">HCMC University of Economics</h3>
                            <p className="p-0 m-0" style={{color:"var(--grey)"}}>Sep, 2017 - March, 2021 / Ho Chi Minh City, Vietnam</p>
                            <ul>
                                <li>Major: International Business</li>
                                <li>GPA: 7.8/10</li>
                            </ul>
                        </div>
                        <div className="edu-exp-image">
                            <img src="https://dsa.ueh.edu.vn/wp-content/uploads/2021/01/Logo-UEH-ngang-Xanh-1.png" alt="ueh-logo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
