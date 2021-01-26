import React from 'react'
import {FaEnvelope,FaPhone, FaWhatsapp, FaMailBulk} from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

export default class ContactForm extends React.Component {
        constructor(props) {
            super(props);
            this.submitForm = this.submitForm.bind(this);
            this.state = {
                status: ""
            };
        }
    
    render() {
        const { status } = this.state;
        return (
            <>
                <div className="col">
                    <Fade right>
                        <article className="icon-sec">
                                <h1>במרחק לחיצה מכאן</h1>              
                                <div className="icon-align">
                                    <a href="https://api.whatsapp.com/send?phone=+972556617145" rel="noopener noreferrer" target="_blank">
                                        <article style={{display: 'inline-block'}}>
                                                <FaWhatsapp className="contact-icon"
                                                    style={{color:'rgb(7, 161, 58)'}}/>                                            
                                            דברו איתי בוואטספ
                                        </article>
                                    </a> 

                                    <a href="tel:055-6617145" rel="noopener noreferrer">
                                        <article style={{display: 'inline-block'}}>
                                                <FaPhone className="contact-icon"/>
                                                055-6617145
                                        </article>
                                    </a>                        

                                    <a href={"mailto:nach666@gmail.com"} rel="noopener noreferrer">
                                        <article style={{display: 'inline-block'}}>
                                                <FaEnvelope className="contact-icon"
                                                    style={{color:'var(--primaryColor)'}}/>
                                                nach666@gmail.com
                                        </article>
                                    </a>
                                </div>
                        </article>
                    </Fade>

                    <Fade left>
                        <article className="contact-sec">
                            <h2 style={{textAlign: 'center', paddingTop:'30px'}}>צרו קשר</h2>
                            <FaMailBulk style={{
                                    marginBottom: '4px',
                                    fontSize: '20px',
                                    color: 'var(--lgreen)'
                            }}/>
                                
                            <form className="cform" method="POST"
                                    onSubmit={this.submitForm}
                                    action="https://formspree.io/f/xeqpljye">
                                    <input
                                        type="text"
                                        name="Name"
                                        className="form-control"
                                        placeholder="שם:"/>
                                    <input
                                        type="phone"
                                                        name="phone"
                                                        className="form-control"
                                                        placeholder="מספר טלפון:"/>
                                    <textarea
                                        name="message"
                                                        className="form-control long"
                                                        rows="2"
                                                        placeholder="רציתי לשאול.."/>
                                    {status === "SUCCESS" ? <h2>תודה!</h2> : <button type="submit" className="s submit">אשמח אם תחזרי אליי :)</button>}
                                    {status === "ERROR" && <p>אוי! קרתה תקלה, אנא נסו שוב.</p>}                                    
                            </form>
                        </article>
                    </Fade>
                </div>
            </>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}