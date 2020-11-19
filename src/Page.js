import React from 'react'
import Hero from './components/Hero'
import Beach from './components/Beach'
import WebList from './components/WebList'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function Page () {
    return (
        <>
                <Hero/>
                <Beach/>
                <WebList/>
                <ContactForm/>
                <Footer/>
            </>
    );
}
