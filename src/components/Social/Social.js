import React, { Component } from 'react'
import './Social.css'

export default class Social extends Component {
    render() {
        return (
            <div style={{ position: 'fixed', bottom: 0, right: '25px' }}>
                <div className="social text-white">
                    <a target="_blank" href="https://www.facebook.com/hoa.lam.888">
                        <div className="social-item social-item-facebook">
                            <i class="fab fa-facebook-f"></i>
                        </div>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/lamnhuthoa/">
                        <div className="social-item social-item-insta">
                            <i class="fab fa-instagram"></i>
                        </div>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/lamnhuthoa">
                        <div className="social-item social-item-linkedin">
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                    </a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCukW1Um0W4I_xgJH-UIRC9w">
                        <div className="social-item social-item-youtube">
                            <i class="fab fa-youtube"></i>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}
