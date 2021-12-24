import React, { Component } from 'react'
import DividerWithText from './DividerWithText'
import Zoom from 'react-reveal/Zoom';

import hostel from '../../images/reco/hostel.png'
import flower from '../../images/reco/flowers.png'
import noam from '../../images/reco/noam.png'

import wall from '../../images/reco/walll.png'
import door from '../../images/reco/door.png'
import peace from '../../images/reco/peace.png'

import avi from '../../images/reco/avi.png'
import sharon from '../../images/reco/sharon.png'
import beni from '../../images/reco/beni.png'
import heshel from '../../images/reco/heshel.png'

import zar from '../../images/reco/zar.png'
import japan from '../../images/reco/japan.png'
import tokio from '../../images/reco/tokio.png'

import roi from '../../images/reco/roi.png'
import moshe from '../../images/reco/moshe.png'
import yogev from '../../images/reco/yogev.png'
import wayin from '../../images/reco/wayin.png'
import adam from '../../images/reco/adam.png'
import yariv from '../../images/reco/יריב.png'
import sima from '../../images/reco/סימה.png'
import arie from '../../images/reco/שטומפכר.png'

import vladi from '../../images/reco/vladi.png'
import vladi1 from '../../images/reco/vladi1.png'
import idit from '../../images/reco/idit.png'
import raw from '../../images/reco/raw.png'



export default class Portfolio extends Component {
    state={
        store: [
            {
                icon:japan,
                link:"https://hebrewtourguidejapan.com/",
                title:"סיורי יום ביפן - אתר תדמית + מערכת הזמנות"
            },
            {
                icon:zar,
                link:"https://zarabeyapan.com/",
                title:"זרה ביפן - חנות ספרים"
            },
            {
                icon:tokio,
                link:"https://www.hebrewtourguidetokyo.com/",
                title:"טיולי בוטיק בטוקיו - רכישת סיורים"
            },

            {
                icon:wall,
                link:"https://wall-express.co.il/",
                title:"Wall express - חנות טפטים"
            },
            {
                icon:flower,
                link:"https://very-happy-flowers.com/",
                title:"happy flowers - חנות פרחים"
            },
            {
                icon:vladi1,
                link:"https://congressbulaim.co.il/",
                title:"קונגרס הבולאים - חנות בולים"
            },

            {
                icon:peace,
                link:"https://peace-boards.com/",
                title:"Peace Boards - חנות סקייטבורדים"
            },
            {
                icon:wayin,
                link:"https://wayin.co.il/",
                title:"wayin - לוח חיפוש עובדים/עבודה"
            },
            {
                icon:hostel,
                link:"https://hosteltiberias.co.il/",
                title:"אכסניית טבריה - אתר תדמית + הזמנות"
            }

            // {
            //     icon:noam,
            //     link:"https://noamacrame.com/",
            //     title:"noaMacreme - חנות תכשיטים"
            // },
        ],

        tadmit: [          
            {
                icon:idit,
                link:"https://idit-or.com/",
                title:"עדית אור - תדמית ובלוג"
            },
            {
                icon:yogev,
                link:"https://ysolutions.info/",
                title:"ysolutions מערכות מידע ותוכנה"
            },
            {
                icon:adam,
                link:"https://adambeamalo.co.il/",
                title:"אדם בעמלו - פיתוח ארגוני"
            },

            {
                icon:moshe,
                link:"https://sp.systems/",
                title:"Shieldpro systems"
            },
            {
                icon:yariv,
                link:"https://yarivconsultant.com/",
                title:"ייעוץ ארגוני ופיתוח מנהלים"
            },
            {
                icon:roi,
                link:"https://www.legaltalking.com/",
                title:"legaltalking - בלוג משפטי"
            },

            {
                icon:door,
                link:"http://www.commercialdoorrepairontario.ca/",
                title:"Commercial Doors"
            },
            {
                icon:sima,
                link:"https://simanissani.com/",
                title:"סימה ניסני, מורת דרך - אתר תדמית"
            },
        ],

        fix: [
            {
                icon:raw,
                link:"https://raw-planet.dog/",
                title:"Raw planet - חנות חיות"
            },  
            {
                icon:arie,
                link:"https://stofmacher.co.il/",
                title:"שטופמכר בדק בית - אתר תדמית"
            },
            {
                icon:avi,
                link:"https://homeland-agency.com/",
                title:"Homeland - אתר תדמית"
            },
            {
                icon:heshel,
                link:"https://heschel.org.il/",
                title:"מרכז השל ללימודי קיימות - אתר תדמית, בלוג, ומכירת קורסים"
            },
            {
                icon:sharon,
                link:"https://sharonperfumes.com/",
                title:"SharonPerfume - בלוג וחנות בשמים"
            },
            {
                icon:beni,
                link:"https://he.zipperbags.online/",
                title:"Zipper bags - חנות תיקים"
            },
        ]
    }
    
    render () {
        return (
                <>
                    <div className="services">
                        <h2 style={{ textAlign:'center' }}>טעימה מהפרוייקטים</h2>

                        <br/>
                        <br/>
                        <br/>
                        <DividerWithText><h4>אתרי מכירה ומערכות</h4></DividerWithText>                    
                        <div className="services-center">
                            {this.state.store.map(
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
                        <br/>
                        <br/>
                        <DividerWithText><h4>אתרי תדמית</h4></DividerWithText>                    
                        <div className="services-center">
                            {this.state.tadmit.map(
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
                        <br/>
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