import React, { Component } from 'react'
import './About.css'

export default class About extends Component {
    render() {
        return (
            <div style={{ backgroundImage: 'url(./img/patrick-hodskins-unsplash.jpg)', backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100%', height: '100vh', backgroundAttachment: 'fixed' }} id="about">
                <div className="container" style={{ paddingTop: '150px' }}>
                    <h3 className="text-center about-title">About Me!</h3>
                    <div className="row mt-5" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <div className="col-3">
                            <div className="img-container">
                                <img className="img-avatar" src="./img/Snap-Chat-avatar.png" />
                            </div>
                        </div>
                        <div className="col-9 row" style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '10px', fontFamily: 'Josefin Sans', fontSize: '18px', height: '175px' }}>
                            <ul className="text-white col-6" style={{ listStyleType: 'circle', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                                <li><strong>Full Name:</strong> Lâm Nhựt Hòa</li>
                                <li><strong>Education:</strong> University of Science</li>
                                <li><strong>Expected graduation:</strong> 2023</li>
                                <li><strong>Languages:</strong> English, Vietnamese</li>
                                <li><strong>Hobbies:</strong> Coding, Traveling, Music, Movies</li>
                            </ul>
                            <ul className="text-white col-6" style={{ listStyleType: 'circle', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                                <li><strong>DOB:</strong> May 8, 1999</li>
                                <li><strong>Major:</strong> Information Technology</li>
                                <li><strong>Based in:</strong> Saigon, Vietnam</li>
                                <li><strong>Email:</strong> hoalamnhut@gmail.com</li>
                                <li><strong>Favorite colours:</strong> Black, White, Grey</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
