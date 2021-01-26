import React from 'react'
import WebList from '../components/WebList'
import Footer from '../components/Footer'
import LangButtons from '../../LangButtons'

export default function Services(props) {
    return (
        <>
            <LangButtons {...props} />                
            <WebList/>
            <Footer/>
        </>
    )
}
