import React from 'react'
import Abouts from '../components/About'
import HoriForm from '../components/HoriForm'
import Footer from '../components/Footer'

export default function About(props) {
    return (
        <>
            <div className="empty-blue"/>
            <div className="bf"/>       
            <Abouts/>
            <br/>
            <br/>
            <br/>
            <HoriForm/>
            <div className="af"/>                
            <Footer/>
        </>
    )
}
