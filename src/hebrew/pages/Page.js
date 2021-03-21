import React from 'react'
import Hero from '../components/Hero'
import Pro from '../components/Prolog'
import About from '../components/About'
import Puzzle from '../components/Puzzle'
import Start from '../components/Start'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import LangButtons from '../../LangButtons'
import puzzle from '../../images/puzzle.png'

export default function Page (props) {
    return (
        <>
                <LangButtons {...props} />                
                <Hero/>
                <Pro/>

                <About/>

                <div className="services" style={{ paddingTop: '0px'}}>
                    <img src={puzzle} className="puzzle"/>
                </div>
                <Puzzle/>

                <Start/>
                <ContactForm/>
                <Footer/>
            </>
    );
}
