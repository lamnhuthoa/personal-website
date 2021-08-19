import React, { Component } from 'react'
import './Intro.css'

export default class Intro extends Component {

    render() {
        let jobTitle = "Front-End Developer"
        let greetings = "Welcome to my website!"

        return (
            <div className="intro-container">
                <section className="container intro-container-section">
                    <div className="row">
                        <div className="col-6 intro-title-container">
                            <h4 className="intro-text">Hello! I'm</h4>
                            <h1 className="intro-title">Hoa Lam</h1>
                            <h4 className="intro-text">{greetings}</h4>
                        </div>
                        <div className="col-6 download-container">
                            <button className="CV-download">Download CV</button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
