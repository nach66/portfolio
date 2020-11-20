import React from 'react'

export default function Web({reco}) {
    const {icon,link, title, text} = reco;
    
    return (
        <>
            <section className="websec">
                <article>
                    <h2>{title}</h2>
                    <h5>{text}</h5>
                </article>
                <article className="web">
                    <a href={link} rel="noopener noreferrer" target="_blank">
                        <img src={icon} alt="pic"/>
                    </a>
                </article>
            </section>
        </>
    );
}