import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Contact(props) {
    return (
        <>
            <br/>
            <div className="saf"/>
            <h1 style={{background:'var(--color-section-bg)', paddingTop:'10px'}}>יצירת קשר</h1>
            <ContactForm/>
            <div className="sbf"/>

                                    
            <div className="contact-logof">
                <div alt="logo" className="logof"/>
            </div>
            <Footer/>
        </>
    )
}
