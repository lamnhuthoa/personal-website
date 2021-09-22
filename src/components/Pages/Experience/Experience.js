import React from 'react'
import Projects from './Projects/Projects'
import "./Experience.css"
import Professional from './Professional/Professional'
import Header from "../../Header/Header"
import Social from '../../Social/Social'
import ButtonBackToTop from '../../ButtonBackToTop/ButtonBackToTop'

export default function Experience(props) {
    return (
        <React.Fragment>
            <div className="exp-body-container">
                <Header />
                {/* <Projects/> */}
                <Professional/>
                {/* <Social/> */}
                <ButtonBackToTop/>
            </div>
        </React.Fragment>
    )
}
