import React from 'react'
import PortfolioPro from '../components/PortfolioPro'
import HoriForm from '../components/HoriForm'
import Footer from '../components/Footer'
import TestiSlider from '../components/TestiSlider'

export default function Port(props) {
    return (
        <>
            <div className="empty-blue"/>
            <div className="af"/>
            <PortfolioPro/>
            <div className="bf"/>   
            <TestiSlider/>    
            <HoriForm/>

                                    
            <div className="contact-logof">
                    <div alt="logo" className="logof"/>
                </div>
            <Footer/>
        </>
    )
}
