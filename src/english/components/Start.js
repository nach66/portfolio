import React from 'react'
import a from '../../images/mobile.png'
import Fade from 'react-reveal/Fade';
export default function Start() {
    return (
        <>
        <div className="sbf"/>
            <div className="sec lang">
                <Fade bottom>            
                    <article className="centerr">
                        <img src={a} alt="icon"/>
                    </article>
                    <article className="centerr lang">
                        <h3>
                            Sooooo ... where do you start?
                        </h3>
                        <h5>First of all, we will arrange an introductory meeting in will understand your needs and desires.</h5>
                        <h5>It does not have to be a physical meeting; at Corona times you can do everything by phone or zoom -</h5>
                        <h5>The main thing is that together we characterize the requested site, and build the most correct work process.</h5>
                    </article>
                </Fade>
            </div> 
        <div className="saf"/>
        </>
    )
}
