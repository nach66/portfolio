import React from 'react'
import Fade from 'react-reveal/Fade';
import DividerWithText from './DividerWithText'

export default function Web({reco}) {
    const {ltr, title, text} = reco;
    // const noteItems = list.map((note) =>
    //     <li>{note}</li>
    // );
    
    return (
        <>
            <section className={ltr? "ltr websec " : "websec" }>
                <Fade bottom>            
                    <article>
                    <DividerWithText><h2>{title}</h2></DividerWithText>                    
                        <p style={{direction:'rtl'}}>{text}</p>
                    </article>

                    <article className="grid">
                        {/* <ol class="gradient-list">{noteItems}</ol> */}
                    </article>
                </Fade>
            </section>
        </>
    );
}