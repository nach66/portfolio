import React from 'react'
import ContactForm from '../components/ContactForm'
import Start from '../components/Start'
import Footer from '../components/Footer'
import LangButtons from '../../LangButtons'

export default function Contact(props) {
    return (
        <>
            <LangButtons {...props} />                
            <Start/>
            <ContactForm/>
            <Footer/>
        </>
    )
}
