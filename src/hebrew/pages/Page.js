import React from 'react'
import Hero from '../components/Hero'
import Pro from '../components/Prolog'
import Testi_slider from '../components/Testi_slider'
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
                
                <Testi_slider/>
                {/* <About/> */}

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