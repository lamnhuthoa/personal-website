import React from 'react'
import Projects from './Projects/Projects'
import "./Experience.css"
import Professional from './Professional/Professional'
import Header from "../../Header/Header"
import Social from '../../Social/Social'
import ButtonBackToTop from '../../ButtonBackToTop/ButtonBackToTop'
import ScrollToTop from '../../ScrollToTop'

export default function Experience(props) {
    return (
        <React.Fragment>
            <ScrollToTop/>
            <div className="exp-body-container">
                <Header />
                {/* <Projects/> */}
                <Professional/>
                <ButtonBackToTop/>
            </div>
        </React.Fragment>
    )
}
