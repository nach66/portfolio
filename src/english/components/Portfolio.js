import React, { Component } from 'react'
import a from '../../images/reco/noam.png'
import b from '../../images/reco/hostel.png'
import c from '../../images/reco/flowers.png'
import d from '../../images/reco/walll.png'
import e from '../../images/reco/pet.png'

export default class Portfolio extends Component {
        state={
            port: [
                {
                    icon:a,
                    link:"https://noamacrame.com/",
                    title:"Noam Macrame"
                },
                {
                    icon:b,
                    link:"https://hosteltiberias.co.il/",
                    title:"Tiberias hostel"
                },
                {
                    icon:c,
                    link:"https://very-happy-flowers.com/",
                    title:"Happy flowers"
                },
                {
                    icon:d,
                    link:"https://wordpress-531388-1693511.cloudwaysapps.com/",
                    title:"Wall express"
                },
                {
                    icon:e,
                    link:"https://petisitti.netlify.app/",
                    title:"Peti sitter"
                },
            ]
        }
        render () {
            return (
                <>
                    <div className="services lang">
                        <h2 style={{ textAlign:'center' }}>
                        Tasting from the projects
                        </h2>
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
