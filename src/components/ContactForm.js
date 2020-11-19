import React from 'react'
import {FaPaw} from 'react-icons/fa';

export default function ContactForm() {

    return (
        <>
            <section className="contact-sec">
                <article>
                    <h1>מעדיפים שאני אחפש אתכם?</h1>
                    <FaPaw style={{
                        margin: '2px',
                        fontSize: '20px',
                        color: 'var(--lightblue)'
                    }}/>
                    <FaPaw style={{
                        margin: '2px',
                        fontSize: '20px',
                        color: 'var(--secblue)'
                    }}/>
                    <FaPaw style={{
                        margin: '2px',
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
                                            placeholder="נשמעת אחלה, דברי איתי"/>
                            <button type="submit"
                                className="submit">שלחו לי</button>
                    </form>
                </article>
                
                {/* <div className="cicon"/> */}
            </section>
        </>
    );
}