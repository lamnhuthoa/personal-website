import React, { Component } from 'react'
import './Intro.css'

export default class Intro extends Component {
    render() {
        let jobTitle = "Front-End Developer"

        return (
            <div style={{ backgroundImage: 'url(./img/jasper-garratt-unsplash.jpg)', backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100%', height: '100vh' }}>
                <nav className="navbar navbar-fixed-top navbar-expand-sm">
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav m-auto mt-2 mt-lg-0" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Experience</a>
                            </li>
                            <li className="nav-item nav-item--brand">
                                <a className="navbar-brand mr-0 p-2" href="#">H.</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Connect</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <section className="container mt-5">
                    <div className="row" style={{ height: '500px' }}>
                        <div className="col-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h4 style={{ color: '#fff', fontSize: '50px', fontFamily: 'Josefin Sans' }}>Hello! I'm</h4>
                            <h1 style={{ color: '#FFC93C', fontSize: '150px', fontFamily: 'Dancing Script' }}>Hoa Lam</h1>
                            <h4 style={{ color: '#fff', fontSize: '50px', fontFamily: 'Josefin Sans' }}>{jobTitle}</h4>
                        </div>
                        <div className="col-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <button className="CV-download">Download CV</button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
