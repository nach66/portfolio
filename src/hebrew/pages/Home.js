import React from 'react'
import Hero from '../components/Hero'
import Pro from '../components/Prolog'
import TestiSlider from '../components/TestiSlider'
import HoriForm from '../components/HoriForm'
import Puzzle from '../components/Puzzle'
import Ycube from '../components/Ycube'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Page (props) {
    return (
        <>
                <Hero/>
                <Pro/>

                <div className="empty-blue"/>
                <div className="bf"/>    
                <TestiSlider/>
                <HoriForm/>
                <div className="af"/>  

                <Puzzle/>
                <Ycube/>
                <ContactForm/>
                <div className="empty-blue"/>
                <Footer/>
            </>
    );
}