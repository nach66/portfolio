import React from 'react'
import ReactTypingEffect from 'react-typing-effect';

export default class Hero extends React.Component {

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
                <section className="void">
                    <div className="pic">
                        <div className="banner">
<h1>
  <ReactTypingEffect
    typingDelay={300}
    speed={80}
    eraseDelay={999999}
    eraseSpeed={0}
    text={["כשהעסק גדל, האתר משתכלל"]}
    cursorClassName="hero-cursor"
  />
</h1>                       </div>

                        <form className="sform" method="POST"
                            onSubmit={this.submitForm}
                            action="https://formspree.io/f/xeqpljye"
                        >
                                <input
                                    type="text"
                                                name="Name"
                                                className="sform-control"
                                                placeholder="שם"/>
                                <input
                                    type="tel"
                                                name="phone"
                                                className="sform-control"
                                                placeholder="טלפון"/>
                                <input
                                    type="email"
                                                name="email"
                                                className="sform-control"
                                                placeholder="אימייל"/>
                                
                                {status === "SUCCESS" ? 
                                    <><br/><br/><h2>תודה!</h2></> : 
<button className="submit" type="submit">
יאללה, נדבר!</button>
                                }

                        <div className="form-bug">
                            {status === "ERROR" && <p className="submit-error">אוי! קרתה תקלה, אנא נסו שוב.</p>}
                        </div>

                        </form>

                    </div>   
                </section>
                <div className="curved"></div>
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