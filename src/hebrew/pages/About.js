import React from 'react'
import Abouts from '../components/About'
import Footer from '../components/Footer'
import LangButtons from '../../LangButtons'

export default function About(props) {
    return (
        <>
            <LangButtons {...props} />                
            <Abouts/>
            <Footer/>
        </>
    )
}
