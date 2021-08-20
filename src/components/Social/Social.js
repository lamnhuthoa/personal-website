import React, { Component } from 'react'
import './Social.css'

export default class Social extends Component {
    render() {
        return (
            <div className="social-container">
                <div className="social text-white">
                    <a href="https://github.com/lamnhuthoa">
                        <div className="social-item social-item-github">
                            <i class="fab fa-github"></i>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/lamnhuthoa/">
                        <div className="social-item social-item-insta">
                            <i class="fab fa-instagram"></i>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/lamnhuthoa">
                        <div className="social-item social-item-linkedin">
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/channel/UClQL9itFq83tZ0oxrsZAF4w">
                        <div className="social-item social-item-youtube">
                            <i class="fab fa-youtube"></i>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}
