import React from 'react'
import {FaEnvelope,FaPhone, FaWhatsapp, FaMailBulk} from 'react-icons/fa';
import ReactWhatsapp from 'react-whatsapp';


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
                <div className="spikes"/>
                <div className="col">

                    <article className="icon-sec">
                            <div class="gradient-border">
                                <h2 style={{textAlign: 'center', paddingTop:'30px'}}>צרו קשר</h2>              
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

                                    <a href="tel:055-6617145">
                                        <article style={{display: 'inline-block',  textDecoration: 'underline'}}>
                                                <FaPhone className="contact-icon"
                                                    style={{color:'var(--blue)'}}/>
                                                <a href="tel:055-6617145">055-6617145</a>
                                            </article>
                                    </a>                        

                                    <a href={"mailto:nach666@gmail.com"} rel="noopener noreferrer" target="_blank">
                                        <article style={{display: 'inline-block',  textDecoration: 'underline'}}>
                                                <FaEnvelope className="contact-icon"
                                                    style={{color:'var(--primaryColor)'}}/>
                                                <a href={"mailto:nach666@gmail.com"} rel="noopener noreferrer" target="_blank">nach666@gmail.com</a>
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
                                    onSubmit={this.submitForm}
                                    action="https://formspree.io/f/xeqpljye">
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
                                    {status === "SUCCESS" ? <h2>תודה!</h2> : <button type="submit" className="s ssubmit">שליחה</button>}
                                    {status === "ERROR" && <p>אוי! קרתה תקלה, אנא נסו שוב.</p>}                                    
                                </form>
                        </article>
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