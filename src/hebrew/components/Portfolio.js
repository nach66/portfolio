import React, { Component } from 'react'
import DividerWithText from './DividerWithText'
import Zoom from 'react-reveal/Zoom';

import noam from '../../images/reco/noam.png'
import pet from '../../images/reco/pet.png'
import port from '../../images/reco/port1.png'

import hostel from '../../images/reco/hostel.png'
import flower from '../../images/reco/flowers.png'
import wall from '../../images/reco/walll.png'
import door from '../../images/reco/door.png'
import peace from '../../images/reco/peace.png'
import zar from '../../images/reco/zar.png'

import adam from '../../images/reco/adam.png'
import avi from '../../images/reco/avi.png'
import sharon from '../../images/reco/sharon.png'
import sharon2 from '../../images/reco/sharon2.png'
import beni from '../../images/reco/beni.png'
import heshel from '../../images/reco/heshel.png'

import roi3 from '../../images/reco/roi3.png'
import moshe from '../../images/reco/moshe.png'
import yogev from '../../images/reco/yogev.png'

export default class Portfolio extends Component {
    state={
        fix: [
            {
                icon:avi,
                link:"https://homeland-agency.com/",
                title:"Homeland - סוכנות"
            },
            {
                icon:adam,
                link:"https://adambeamalo.co.il/",
                title:"אדם בעמלו - פיתוח ארגוני"
            },
            {
                icon:heshel,
                link:"https://heschel.org.il/",
                title:"מרכז השל - עמותה ללימודי קיימות"
            },
            {
                icon:sharon2,
                link:"https://sharonperfumes.com/",
                title:"SharonPerfume - בלוג וחנות בשמים"
            },
            {
                icon:beni,
                link:"https://he.zipperbags.online/",
                title:"Zipper bags - חנות תיקים"
            },
        ],

        build: [
            /*{
                icon:pet,
                link:"https://petisitti.netlify.app/",
                title:"Peti sitter - דף נחיתה"
            },
            {
                icon:noam,
                link:"https://noamacrame.com/",
                title:"noaMacreme - חנות תכשיטים"
            },*/

            {
                icon:yogev,
                link:"https://ysolutions.info/",
                title:"ysolutions - מערכות מידע ותוכנה"
            },
            {
                icon:zar,
                link:"https://zarabeyapan.com/",
                title:"זרה ביפן - אתר תדמית ומכירה לספר"
            },
            {
                icon:roi3,
                link:"https://www.legaltalking.com/",
                title:"legaltalking - בלוג משפטי"
            },

            {
                icon:wall,
                link:"https://wall-express.co.il/",
                title:"Wall express - חנות טפטים"
            },
            {
                icon:moshe,
                link:"https://sp.systems/",
                title:"Shieldpro systems - אתר תדמית"
            },
            {
                icon:peace,
                link:"https://peace-boards.com/",
                title:"Peace Boards - חנות סקייטבורדים"
            },

            {
                icon:door,
                link:"http://www.commercialdoorrepairontario.ca/",
                title:"Commercial Doors - אתר תדמית"
            },
            {
                icon:hostel,
                link:"https://hosteltiberias.co.il/",
                title:"אתר תדמית והזמנות - אכסניית טבריה"
            },
            {
                icon:flower,
                link:"https://very-happy-flowers.com/",
                title:"happy flowers - חנות פרחים"
            },
        ]
    }
    
    render () {
        return (
                <>
                    <div className="services">
                        <h2 style={{ textAlign:'center' }}>טעימה מהפרוייקטים</h2>

                        <br/>
                        <DividerWithText><h4>אתרים שבניתי</h4></DividerWithText>                    
                        <div className="services-center">
                            {this.state.build.map(
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
                        <DividerWithText><h4>אתרים ששיפצתי – שינויי עיצוב, הוספת עמודים ותכנים</h4></DividerWithText>                    
                        <div className="services-center">
                            {this.state.fix.map(
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