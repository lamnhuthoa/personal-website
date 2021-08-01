import React, { Component } from 'react'
import './About.css'

export default class About extends Component {
    render() {
        let jobTitle = "Associate Tester @ FPT Software"

        return (
            <div style={{ backgroundImage: 'url(./img/sirisvisual-unsplash.jpg)', backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100%', height: '100vh' }}>
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
                            <h4 style={{ color: '#A19882' }}>Hello! I'm</h4>
                            <h1 style={{ color: '#fff', fontSize: '100px', fontFamily: 'Dancing Script' }}>Hoa Lam</h1>
                            <h4 style={{ color: '#A19882' }}>{jobTitle}</h4>
                        </div>
                        <div className="col-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div className="card" style={{ background: 'transparent' }}>
                                <img width={200} className="my-2" style={{ borderRadius: '50%', alignSelf: 'center', border: '5px solid transparent', boxShadow: 'inset 0 0 0.1rem 0.1rem rgba(0,0,0,.05), 0 0 0.1rem 0.1rem rgba(0,0,0,.05)' }} src="./img/avt-img-removebg.png" />
                                <h3 className="text-center">Lâm Nhựt Hòa</h3>
                                <div className="card-body" style={{ background: '#fff' }}></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
