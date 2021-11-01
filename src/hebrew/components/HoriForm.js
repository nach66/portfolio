import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default class HoriForm extends React.Component {
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
                <div className="hori-form">
                        <form method="POST"
                            className="cform form-inline"
                            onSubmit={this.submitForm}
                            action="https://formspree.io/f/xeqpljye">
                                <article className="h2-hori">
                                    <h2>צרו קשר</h2>
                                </article>
                                <article>
                                    <input
                                        type="text"
                                        name="Name"
                                        className="form-control"
                                        placeholder="שם:"/>
                                </article>
                                <article>
                                    <input
                                        type="phone"
                                        name="phone"
                                        className="form-control"
                                        placeholder="מספר טלפון:"/>
                                </article>
                                <article>
                                    <textarea
                                        name="message"
                                        className="form-control long"
                                        rows="1"
                                        placeholder="רציתי לשאול.."/>
                                </article>
                                <article className="submit-hori">
                                    {status === "SUCCESS" ? <h2>תודה!</h2> : <button type="submit" className="s submit">שליחה</button>}
                                    {status === "ERROR" && <p>אוי! קרתה תקלה, אנא נסו שוב.</p>}                                    
                                </article>                          
                            </form>
                </div>

                <div className="af"/>       
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