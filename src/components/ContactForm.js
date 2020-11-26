import { faMicroscope } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import {FaFacebookMessenger, FaFileWord, FaGlasses, FaLink, FaMagento, FaMailBulk, FaMale, FaMicroscope, FaPaw, FaSkype, FaSms, FaSpeakap, FaStaylinked} from 'react-icons/fa';
import {FaEnvelope,FaPhone, FaWhatsapp} from 'react-icons/fa';
import ReactWhatsapp from 'react-whatsapp';
export default function ContactForm() {

    return (
        <>
            <div className="spikes"/>
            <div className="col">

                <article className="icon-sec">
                    <div class="gradient-border">
                        <h1 style={{textAlign: 'center', paddingTop:'30px'}}>צרו קשר</h1>              
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
                                            style={{color:'var(--primaryColor)'}}/>
                                        <a>nach666@gmail.com</a>
                                    </article>
                            </a>
                        </div>
                    </div>
                </article>
            
                <article className="contact-sec">
                        <h1>אפשר להשאיר הודעה</h1>
                        <FaMailBulk style={{
                            marginBottom: '4px',
                            fontSize: '20px',
                            color: 'var(--blue)'
                        }}/>
                        
                        <form className="cform" method="POST"
                            action="https://formspree.io/nach666@gmail.com">
                                <input
                                    type="text"
                                                name="firstName"
                                                className="form-control"
                                                placeholder="שם"/>
                                <input
                                    type="phone"
                                                name="phone"
                                                className="form-control"
                                                placeholder="מספר טלפון"/>
                                <textarea
                                    name="message"
                                                className="form-control long"
                                                rows="11"
                                                placeholder="היי, אני בעניין :)"/>
                                <button type="submit"
                                    className="s ssubmit">שלחו לי</button>
                        </form>
                </article>
            </div>
        </>
    );
}