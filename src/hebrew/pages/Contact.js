import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import LangButtons from '../../LangButtons'

export default function Contact(props) {
    return (
        <>
            <LangButtons {...props} />                
            <br/>
            <div className="saf"/>
            <ContactForm/>
            <div className="sbf"/>
            <Footer/>
        </>
    )
}
