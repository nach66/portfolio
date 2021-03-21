import React, { Component } from 'react'
import noam from '../../images/reco/noam.png'
import hostel from '../../images/reco/hostel.png'
import flower from '../../images/reco/flowers.png'
import wall from '../../images/reco/walll.png'
import pet from '../../images/reco/pet.png'
import port from '../../images/reco/port1.png'
import door from '../../images/reco/door.png'
import peace from '../../images/reco/peace.png'
import zar from '../../images/reco/zar.png'
import DividerWithText from './DividerWithText'

export default class Portfolio extends Component {
        state={
            react: [
                {
                    icon:hostel,
                    link:"https://hosteltiberias.co.il/",
                    title:"Tiberias hostel"
                },
                {
                    icon:pet,
                    link:"https://petisitti.netlify.app/",
                    title:"Peti sitter - landing page"
                },
                {
                    icon:port,
                    link:"https://portfolyoni.com/",
                    title:":) This website"
                }
            ],
    
            wordpress: [
                    {
                        icon:noam,
                        link:"https://noamacrame.com/",
                        title:"noaMacreme - store"
                    },
                    {
                        icon:flower,
                        link:"https://very-happy-flowers.com/",
                        title:"happy flowers - store"
                    },
                    {
                        icon:zar,
                        link:"https://zarabeyapan.com/",
                        title:"zara beyapan - book store"
                    },
                    {
                        icon:wall,
                        link:"https://wall-express.co.il/",
                        title:"Wall express - store"
                    },
                    {
                        icon:door,
                        link:"http://www.commercialdoorrepairontario.ca/",
                        title:"Commercial Doors"
                    },
                    {
                        icon:peace,
                        link:"http://peace-boards.s887.upress.link/",
                        title:"Peace Boards - store"
                    }
                ]
            }

        render () {
            return (
                <>
                    <div className="services lang">
                        <h2 style={{ textAlign:'center' }}>
                        Tasting from the projects
                        </h2>

                        <br/>

                        <DividerWithText><h4>Wordpess websites</h4></DividerWithText>
                        <div className="services-center">
                            {this.state.wordpress.map(
                                (item, index) => {return (
                                    <article key={index}>
                                        <article className="grid">
                                            <figure class="effect-chico">
                                                <img src={item.icon} alt="web img"/>
                                                    <figcaption>
                                                        <a href={item.link} rel="noopener noreferrer" 
                                                            target="_blank">let's see</a>
                                                    </figcaption>
                                            </figure>
                                        </article>
                                        <p>{item.title}</p>
                                    </article>
                                )}
                            )}
                        </div>
                        <br/>

                        <DividerWithText><h4>created with React</h4></DividerWithText>
                        <div className="services-center">
                            {this.state.react.map(
                                (item, index) => {return (
                                    <article key={index}>
                                        <article className="grid">
                                            <figure class="effect-chico">
                                                <img src={item.icon} alt="web img"/>
                                                    <figcaption>
                                                        <a href={item.link} rel="noopener noreferrer" 
                                                            target="_blank">let's see</a>
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
