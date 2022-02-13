import React from 'react'
import Blog from '../components/Blog'
import HoriForm from '../components/HoriForm'
import Footer from '../components/Footer'

export default function Error(props) {
    return (
        <>
            <div className="empty-blue"/>
            <div className="af"/>
            <Blog/>
            <div className="empty-blue"/>
            <div className="bf"/> 
            <HoriForm/>      
            <Footer/>
        </>
    )
}