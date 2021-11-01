import React from 'react'
import Hero from '../components/Hero'
import Pro from '../components/Prolog'
import Testi_slider from '../components/Testi_slider'
import HoriForm from '../components/HoriForm'
import Puzzle from '../components/Puzzle'
import Start from '../components/Start'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import LangButtons from '../../LangButtons'

export default function Page (props) {
    return (
        <>
                <LangButtons {...props} />                
                <Hero/>
                <Pro/>
                <Testi_slider/>
                <HoriForm/>
                <Puzzle/>
                <Start/>
                <ContactForm/>
                <Footer/>
            </>
    );
}