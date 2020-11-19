import React from 'react'

export default function Hero() {
    return (
        <>
            <section className="void">
                <div className="pic">
                    <div className="banner">
                        <h1>רוצים אתר מהמם?</h1>
                        <h2>מהרו להירשם :)</h2>
                    </div>
                    <form className="sform" method="POST"
                            action="https://formspree.io/nach666@gmail.com">
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
                                    className="ssubmit">שלחו לי</button>
                        </form>
                </div>   
            </section>
        </>
    );
}
