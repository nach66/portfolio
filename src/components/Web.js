import React from 'react'

export default function Web({reco}) {
    const {icon,link} = reco;
    
    return (
        <>
            <section className="web">
                <a href={link} rel="noopener noreferrer" target="_blank">
                    <img src={icon} alt="pic"/>
                </a>
            </section>
        </>
    );
}