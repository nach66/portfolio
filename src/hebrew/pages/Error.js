import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Error(props) {
    return (
        <>
            <div className="empty-white"/>
            <section style={{textAlign:'center'}}>
                <h1>404</h1>
                <h2>אוי! אין עמוד כזה</h2>
                <br/>
                <Link to="/he/">חזרה לעמוד הבית</Link>
            </section>
            <div className="empty-white"/>
            <div className="empty-white"/>
            <Footer/>
        </>
    )
}