import React from 'react'
import Portfolio from '../components/Portfolio'
import Service from '../components/Newservice'
import Footer from '../components/Footer'
import puzzle from '../images/icons/puzzle.png'

export default function Services() {
    return (
        <>
            <div className="empty-blue"/>
            <div className="af"/>
            <Portfolio/>
            <div className="services" style={{ paddingTop: '0px'}}>
                <img src={puzzle} className="puzzle"/>
            </div>
            <Service/>
            <div className="bf"/>
            <Footer/>
        </>
    )
}
