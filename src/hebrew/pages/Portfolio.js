import React from 'react'
import Portfolio from '../components/Portfolio'
import HoriForm from '../components/HoriForm'
import Footer from '../components/Footer'

export default function Port(props) {
    return (
        <>
            <div className="empty-blue"/>
            <div className="af"/>
            <Portfolio/>
            <div className="bf"/>       
            <HoriForm/>

                                    
            <div className="contact-logof">
                    <div alt="logo" className="logof"/>
                </div>
            <Footer/>
        </>
    )
}
