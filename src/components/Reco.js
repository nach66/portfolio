import React from 'react'

export default function Reco({reco}) {
    const {icon,name,description,stars} = reco;
    
    return (
        <>
                    <section class="triangle">

            <section className="reco">
                <article style={{textAlign: 'center'}}>
                    <img src={icon} alt="pic"/>
                    <h4>{name}</h4>
                </article>

                <article>
                    <p>"{description}"</p>
                    <br/>
                    <div>{stars}</div>
                </article>
            </section>

            </section>
        </>
    );
}