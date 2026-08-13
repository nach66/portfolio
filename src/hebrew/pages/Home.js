import React from 'react'
import Hero from '../components/Hero'
import Pro from '../components/Prolog'
import TestiSlider from '../components/TestiSlider'
import Puzzle from '../components/Puzzle'
import Ycube from '../components/Ycube'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default class Page extends React.Component {
    render () {
        return (
            <>
                <Hero/>
                <Pro/>

                <div className="empty-blue"/>
                <div className="bf"/>

                <TestiSlider/>

                <br/>

                <div className="af"/>

                <Puzzle/>
                <Ycube/>
                <h2 style={{background:'var(--color-section-bg)', paddingTop:'10px'}}>יצירת קשר</h2>
                <ContactForm/>

                <div className="empty-blue"/>

                <div className="contact-logof">
                    <div className="logof"/>
                </div>

                <Footer/>
            </>
        );
    }
}