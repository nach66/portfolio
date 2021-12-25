import React from 'react'
import Prices from '../components/Prices'
import HoriForm from '../components/HoriForm'
import Footer from '../components/Footer'

export default function Price(props) {
    return (
        <>
            <div className="empty-blue"/>
            <div className="af"/>      
            <Prices/>
            <div className="bf"/>       
            <HoriForm/>
            <Footer/>
        </>
    )
}