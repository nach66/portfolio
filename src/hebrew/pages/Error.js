import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Error(props) {
    return (
        <>
            <section style={{textAlign:'center'}}>
            <br/>
            <br/>
            <br/>
            <br/>
                <h1>404</h1>
                <br/>
                <h2>אוי! אין עמוד כזה</h2>
                <br/>                
                <Link to="/">חזרה לעמוד הבית</Link>
                <br/>                
                <br/>
            </section>

                        
            <div className="contact-logof">
                <div alt="logo" className="logof"/>
            </div>
            <Footer/>
        </>
    )
}