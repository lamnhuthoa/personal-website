import React, { Component } from 'react'
import './Intro.css'

export default class Intro extends Component {

    render() {
        let jobTitle = "Front-End Developer"
        let greetings = "Welcome to my website!"

        return (
            <div style={{ backgroundImage: 'url(./img/jasper-garratt-unsplash.jpg)', backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', width: '100%', height: '100vh', zIndex: '2', backgroundAttachment: 'fixed' }}>
                <section className="container" style={{ paddingTop: '150px' }}>
                    <div className="row" style={{ height: '500px' }}>
                        <div className="col-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h4 style={{ color: '#fff', fontSize: '50px', fontFamily: 'Josefin Sans' }}>Hello! I'm</h4>
                            <h1 style={{ color: '#FFC93C', fontSize: '150px', fontFamily: 'Dancing Script' }}>Hoa Lam</h1>
                            <h4 style={{ color: '#fff', fontSize: '50px', fontFamily: 'Josefin Sans' }}>{greetings}</h4>
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
