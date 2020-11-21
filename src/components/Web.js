import React from 'react'

export default function Web({reco}) {
    const {icon,link, title, text} = reco;
    
    return (
        <>
            <section className="websec">
                <article>
                    <h2>{title}</h2>
                    <h6>{text}</h6>
                </article>
                <article className="grid">
                    <figure class="effect-chico">
                        <img src={icon} alt="web img"/>
                            <figcaption>
                                <a href={link} rel="noopener noreferrer" target="_blank">לצפייה באתר</a>
                            </figcaption>
                    </figure>
                </article>
            </section>
        </>
    );
}