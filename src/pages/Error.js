import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Error() {
    return (
        <>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <section style={{textAlign:'center'}}>
                <h1>404</h1>
                <h2>אוי! אין עמוד כזה</h2>
                <br/>
                <Link to="/">חזרה לעמוד הבית</Link>
            </section>
        </>
    )
}