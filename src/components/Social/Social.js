import React, { Component } from 'react'
import './Social.css'

export default class Social extends Component {
    render() {
        return (
            <div className="social-container">
                <div className="social text-white">
                    <a href="https://github.com/lamnhuthoa">
                        <div className="social-item social-item-github">
                            <i className="fab fa-github"></i>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/lamnhuthoa/">
                        <div className="social-item social-item-insta">
                            <i className="fab fa-instagram"></i>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/lamnhuthoa">
                        <div className="social-item social-item-linkedin">
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/channel/UCukW1Um0W4I_xgJH-UIRC9w">
                        <div className="social-item social-item-youtube">
                            <i className="fab fa-youtube"></i>
                        </div>
                    </a>
                    <a href="https://soundcloud.com/lamnhuthoa">
                        <div className="social-item social-item-soundcloud">
                            <i class="fab fa-soundcloud"></i>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}
