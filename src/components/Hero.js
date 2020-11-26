import React from 'react'

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
                            <h1>רוצים אתר מהמם?</h1>
                        </div>

                        <form className="sform" method="POST"
                            onSubmit={this.submitForm}
                            action="https://formspree.io/f/xeqpljye"
                        >
                            <input
                                    type="text"
                                                name="firstName"
                                                className="sform-control"
                                                placeholder="שם"/>
                                <input
                                    type="phone"
                                                name="phone"
                                                className="sform-control"
                                                placeholder="טלפון"/>
                                <input
                                    type="email"
                                                name="email"
                                                className="sform-control"
                                                placeholder="אימייל"/>
                                {status === "SUCCESS" ? <h2>תודה!</h2> : <button type="submit" className="ssubmit">מהרו להירשם</button>}
                                {status === "ERROR" && <p>אוי! קרתה תקלה, אנא נסו שוב.</p>}
                        </form>
                    </div>   
                </section>
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




{/*
                    <form className="sform" method="POST"
                            action="https://formspree.io/f/xeqpljye">
                            <input
                                    type="text"
                                                name="firstName"
                                                className="sform-control"
                                                placeholder="שם"/>
                                <input
                                    type="phone"
                                                name="phone"
                                                className="sform-control"
                                                placeholder="טלפון"/>
                                <input
                                    type="email"
                                                name="email"
                                                className="sform-control"
                                                placeholder="אימייל"/>
                                <button type="submit"
                                    className="ssubmit">מהרו להירשם</button>
                        </form>
*/}
