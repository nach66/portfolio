import React from 'react'
import {FaRegSmileWink} from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

export default function About() {
    return (
        <>
            <div className="bf"/>                
            <div className="about lang">
                    <Roll bottom>
                        <div className="focused"/>
                    </Roll>

                    <article className="right centerr">
                        <Fade bottom>
                            <h3>
                                Why did I choose to be a web developer?
                            </h3>
                            <h5>
                                I have always loved solving puzzles, and also creating from words and colors. I love how a perfect image is created from all the little details.
                                Web design is a complex and colorful puzzle: from building according to the customer's vision, through assembling the most innovative and fast technologies, to completing cosmetic renovations.
                            </h5>
                        </Fade>
                    </article>

                    <article className="left centerr">
                        <Fade bottom>
                            <h3>
                                Why should you make this journey, specifically with me?
                            </h3>
                            <ul>
                                <li><h5>
                                    Professionalism - I have a bachelor's degree in computer science and psychology, and have experience in developing open source and WordPress websites.
                                </h5></li>
                                <li><h5>
                                    Personal attitude - my business is boutique and young. Unlike businesses that are industrial production lines, every project with me gets the maximum attention. I will be by your side in the process, I will listen, and together we will reach the perfect result.                                    
                                </h5></li>
                                <li><h5>
                                    Launch prices pay off - the prices are also young and fresh.
                                    <FaRegSmileWink style={{fontSize:'1.5rem', color:'wheat'}}/>
                                </h5></li>
                            </ul>
                        </Fade>
                    </article>                      

                    <Roll bottom>
                        <div className="choose"/>
                    </Roll>
                
            </div>
            <div className="af"/>                
        </>
    )
}
