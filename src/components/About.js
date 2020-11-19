import React from 'react'
import {FaEnvelope,FaPhone, FaWhatsapp} from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faThumbsUp, faThumbsDown} from "@fortawesome/free-solid-svg-icons";
import ReactWhatsapp from 'react-whatsapp';

export default function About() {
    return (
        <>
            <div className="about">

                <article className="pink-sec">
                    <div className="icon-align">
                        <ReactWhatsapp className="wtsp" 
                            number="+972-556617145" 
                            style={{textDecoration: 'underline'}}
                            message="היי, אשמח להתעניין">
                                <FaWhatsapp 
                                    className="contact-icon" 
                                    style={{color:'rgb(7, 161, 58)'}}/>
                                דברו איתי בוואטספ
                        </ReactWhatsapp>

                        <a href="tel:055-555-5555">
                            <article style={{display: 'inline-block',  textDecoration: 'underline'}}>
                                    <FaPhone className="contact-icon"
                                        style={{color:'var(--blue)'}}/>
                                    <a>055-555-5555</a>
                                </article>
                        </a>                        

                        <a href={"mailto:nach666@gmail.com"} rel="noopener noreferrer" target="_blank">
                            <article style={{display: 'inline-block',  textDecoration: 'underline'}}>
                                    <FaEnvelope className="contact-icon"
                                        style={{color:'var(--yellow)'}}/>
                                    <a>nach666@gmail.com</a>
                                </article>
                        </a>

                    </div>
                    <h3 style={{textAlign: 'center', paddingTop:'30px'}}>כי גם חיות יכולות לעשות כיף חיים!</h3>              
                </article>

                <article className="white-sec" style={{  textAlign: 'right'}}>
                    <h3>נעים מאוד, פטי.</h3>
                    <h5><FontAwesomeIcon icon={faThumbsUp} /> פטסיטרית אחראית ומנוסה.</h5>
                </article>
            </div>
        </>
    )
}
