import React from 'react'
import Fade from 'react-reveal/Fade';

export default function Program({reco}) {
    const {list, title, price} = reco;
    const noteItems = list.map((note) =>
        <li>{note}</li>
    );
    
    return (
        <>
                <Fade bottom>            
                    <article className="grid">
                        <h1>{title}</h1>                   
                        {/* <h6 style={{fontWeight:'bold'}}>{price}</h6> */}
                        <h2 style={{fontSize:'1.1em'}}>{price}</h2>
                        <ol class="gradient-list">{noteItems}</ol>
                    </article>
                </Fade>
        </>
    );
}