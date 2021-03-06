import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import LangButtons from '../../LangButtons'

export default function Error(props) {
    return (
        <>
            <LangButtons {...props} />                
            <div className="empty-white"/>
            <section style={{textAlign:'center'}}>
                <h1>404</h1>
                <h5 style={{textAlign: 'center'}}>oops</h5>
                <br/>
                <Link to="/en/">Back to homapage</Link>
            </section>
            <div className="empty-white"/>
            <div className="empty-white"/>
            <Footer/>
        </>
    )
}