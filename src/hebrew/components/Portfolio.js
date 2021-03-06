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
import Zoom from 'react-reveal/Zoom';

export default class Portfolio extends Component {
    state={
        react: [
            {
                icon:hostel,
                link:"https://hosteltiberias.co.il/",
                title:"אתר תדמית והזמנות - אכסניית טבריה"
            },
            {
                icon:pet,
                link:"https://petisitti.netlify.app/",
                title:"Peti sitter - דף נחיתה"
            },
            {
                icon:port,
                link:"https://portfolyoni.com/",
                title:"האתר הזה ממש :)"
            }
        ],

        wordpress: [
                {
                    icon:noam,
                    link:"https://noamacrame.com/",
                    title:"noaMacreme - חנות תכשיטים"
                },
                {
                    icon:flower,
                    link:"https://very-happy-flowers.com/",
                    title:"happy flowers - חנות פרחים"
                },
                {
                    icon:zar,
                    link:"https://zarabeyapan.com/",
                    title:"זרה ביפן - אתר תדמית ומכירה לספר"
                },
                {
                    icon:wall,
                    link:"https://wall-express.co.il/",
                    title:"Wall express - חנות טפטים"
                },
                {
                    icon:door,
                    link:"http://www.commercialdoorrepairontario.ca/",
                    title:"Commercial Doors - אתר תדמית"
                },
                {
                    icon:peace,
                    link:"https://peace-boards.com/",
                    title:"Peace Boards - חנות סקייטבורדים"
                }
            ]
        }
        render () {
            return (
                <>
                    <div className="services">
                        <h2 style={{ textAlign:'center' }}>טעימה מהפרוייקטים</h2>

                        <br/>
                        <DividerWithText><h4>אתרי Wordpess</h4></DividerWithText>                    
                        <div className="services-center">
                            {this.state.wordpress.map(
                                (item, index) => {return (
                                    <article key={index}>
                                        <Zoom>
                                        <article className="grid">
                                            <figure class="effect-chico">
                                                <img src={item.icon} alt="web img"/>
                                                    <figcaption>
                                                        <a href={item.link} rel="noopener noreferrer" 
                                                            target="_blank">לצפייה באתר</a>
                                                    </figcaption>
                                            </figure>
                                        </article>
                                        </Zoom>
                                        <p>{item.title}</p>
                                    </article>
                                )}
                            )}
                        </div>
                        
                        <br/>
                        <DividerWithText><h4>אתרי קוד פתוח - React</h4></DividerWithText>                    
                        <div className="services-center">
                            {this.state.react.map(
                                (item, index) => {return (
                                    <article key={index}>
                                        <Zoom>
                                        <article className="grid">
                                            <figure class="effect-chico">
                                                <img src={item.icon} alt="web img"/>
                                                    <figcaption>
                                                        <a href={item.link} rel="noopener noreferrer" 
                                                            target="_blank">לצפייה באתר</a>
                                                    </figcaption>
                                            </figure>
                                        </article>
                                        </Zoom>
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