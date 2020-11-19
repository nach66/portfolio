import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import WebList from './components/WebList'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function Page () {
    return (
        <>
                <Hero/>
                <Services/>
                <WebList/>
                <ContactForm/>
                <Footer/>
            </>
    );
}
