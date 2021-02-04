import React, { Component } from 'react'
import a from '../../images/reco/pet.png'
import b from '../../images/reco/hostel.png'
import c from '../../images/reco/flowers.png'
import d from '../../images/reco/noam.png'
import g from '../../images/reco/walll.png'

export default class Portfolio extends Component {
        state={
            port: [
                {
                    icon:a,
                    link:"https://petisitti.netlify.app/",
                    title:"peti-sitter"
                },
                {
                    icon:b,
                    link:"https://hosteltiberias.co.il/",
                    title:"אכסניית טבריה"
                },
                {
                    icon:c,
                    link:"https://very-happy-flowers.com/",
                    title:"פרחים משמחים"
                },
                {
                    icon:g,
                    link:"https://very-happy-flowers.com/",
                    title:"wall-expert"
                },
                {
                    icon:d,
                    link:"https://very-happy-flowers.com/",
                    title:"תכשיטי מקרמה"
                },
            ]
        }
        render () {
            return (
                <>
                    <div className="services">
                        <h2 style={{ textAlign:'center' }}>טעימה מהפרוייקטים</h2>
                        <div className="services-center">
                            {this.state.port.map(
                                (item, index) => {return (
                                    <article key={index}>
                                        <article className="grid">
                                            <figure class="effect-chico">
                                                <img src={item.icon} alt="web img"/>
                                                    <figcaption>
                                                        <a href={item.link} rel="noopener noreferrer" 
                                                            target="_blank">לצפייה באתר</a>
                                                    </figcaption>
                                            </figure>
                                        </article>
                                        <p>{item.title}</p>
                                    </article>
                                )}
                            )}
                        </div>
                    </div>
                </>
            );
        }
}