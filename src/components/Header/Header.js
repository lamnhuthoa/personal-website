import React, { Component, useState } from 'react'
import './Header.css'

export default function Header(props) {

    const [navbar, setNavbar] = useState(false);
    const [navlink, setNavlink] = useState(false)

    const changeBackground = () => {
        if (window.scrollY > 20) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={navbar ? "navbar navbar-expand-sm active" : "navbar navbar-expand-sm"}>
            {/* <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button> */}
            <div className="navbar-container-section">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                        <a activeStyle={{ color: '#FFC93C' }} className="nav-link" href="#">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a activeStyle={{ color: '#FFC93C' }} className="nav-link" href="#experience">EXPERIENCE</a>
                    </li>
                    <li className="nav-item">
                        <a activeStyle={{ color: '#FFC93C' }} className="nav-link" href="#connect">CONNECT</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

