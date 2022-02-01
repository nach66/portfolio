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
                        <h5>{title}</h5>                   
                        {/* <h6 style={{fontWeight:'bold'}}>{price}</h6> */}
                        <h4 style={{fontSize:'1.1em'}}>{price}</h4>
                        <ol class="gradient-list">{noteItems}</ol>
                    </article>
                </Fade>
        </>
    );
}