import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import WebList from '../components/WebList'
import Start from '../components/Start'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Page () {
    return (
        <>
                <Hero/>
                <Services/>
                <About/>
                <WebList/>
                <Start/>
                <ContactForm/>
                <Footer/>
            </>
    );
}
