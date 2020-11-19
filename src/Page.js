import React from 'react'
import Hero from './components/Hero'
import Beach from './components/Beach'
import About from './components/About'
import RecoList from './components/RecoList'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function Page () {
    return (
        <>
                <Hero/>
                <Beach/>
                <About/>
                <RecoList/>
                <ContactForm/>
                <Footer/>
            </>
    );
}
