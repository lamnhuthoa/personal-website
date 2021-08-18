import React, { Component, useState } from 'react'
import './Header.css'

export default function Header(props) {

    const [navbar, setNavbar] = useState(false);
    const [navlink, setNavlink] = useState(false)

    const changeBackground = () => {
        if(window.scrollY > 20){
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={navbar ? "navbar navbar-expand-sm active" : "navbar navbar-expand-sm"}>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav m-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a activeStyle={{ color: '#FFC93C' }} className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a activeStyle={{ color: '#FFC93C' }} className="nav-link" href="#experience">Experience</a>
                    </li>
                    <li className="nav-item nav-item--brand">
                        <a activeStyle={{ color: '#FFC93C' }} className="navbar-brand mr-0 p-2" href="#">H.</a>
                    </li>
                    <li className="nav-item">
                        <a activeStyle={{ color: '#FFC93C' }} className="nav-link" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a activeStyle={{ color: '#FFC93C' }} className="nav-link" href="#connect">Connect</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

