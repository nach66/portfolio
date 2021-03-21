import React from 'react'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'
import LangButtons from '../../LangButtons'

export default function Port(props) {
    return (
        <>
            <LangButtons {...props} />                
            <div className="empty-blue"/>
            <div className="af"/>
            <Portfolio/>
            <div className="bf"/>
            <Footer/>
        </>
    )
}
