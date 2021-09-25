import React from 'react'
import Projects from './Projects/Projects'
import "./Experience.css"
import Professional from './Professional/Professional'
import Header from "../../Header/Header"
import Social from '../../Social/Social'
import ButtonBackToTop from '../../ButtonBackToTop/ButtonBackToTop'
import ScrollToTop from '../../ScrollToTop'
import Education from './Education/Education'
import Footer from '../../Footer/Footer'

export default function Experience(props) {
    return (
        <React.Fragment>
            <ScrollToTop/>
            <div className="exp-body-container">
                <Header />
                {/* <Projects/> */}
                <Professional/>
                <Education/>
                <ButtonBackToTop/>
                <Footer/>
            </div>
        </React.Fragment>
    )
}
