import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Contact(props) {
    return (
        <>
            <br/>
            <div className="saf"/>
            <ContactForm/>
            <div className="sbf"/>

                                    
            <div className="contact-logof">
                <div alt="logo" className="logof"/>
            </div>
            <Footer/>
        </>
    )
}
