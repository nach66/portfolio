import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WebList from './components/WebList'
import Start from './components/Start'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function Page () {
    return (
        <>
            <link href='http://serve.fontsproject.com/css?family=Horev:800' rel ='stylesheet' type='text/css'></link>
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
