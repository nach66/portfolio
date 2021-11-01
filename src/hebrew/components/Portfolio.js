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
import sharon from '../../images/reco/sharon2.png'
import beni from '../../images/reco/beni.png'
import heshel from '../../images/reco/heshel.png'

import zar from '../../images/reco/zar.png'
import japan from '../../images/reco/גפן רחב.png'
import tokio from '../../images/reco/טוקיו רחב.png'

import roi from '../../images/reco/roi3.png'
import moshe from '../../images/reco/moshe.png'
import yogev from '../../images/reco/yogev.png'
import wayin from '../../images/reco/wayin4.png'
import adam from '../../images/reco/adam.png'
import yariv from '../../images/reco/יריב3.png'
import sima from '../../images/reco/סימה.png'



export default class Portfolio extends Component {
    state={
        store: [
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
                icon:japan,
                link:"https://hebrewtourguidejapan.com/",
                title:"סיורי יום ביפן - אתר תדמית + מערכת הזמנות"
            },
            {
                icon:wall,
                link:"https://wall-express.co.il/",
                title:"Wall express - חנות טפטים"
            },
            {
                icon:noam,
                link:"https://noamacrame.com/",
                title:"noaMacreme - חנות תכשיטים"
            },
            {
                icon:peace,
                link:"https://peace-boards.com/",
                title:"Peace Boards - חנות סקייטבורדים"
            },
            {
                icon:flower,
                link:"https://very-happy-flowers.com/",
                title:"happy flowers - חנות פרחים"
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
        ],

        build: [
            {
                icon:yogev,
                link:"https://ysolutions.info/",
                title:"ysolutions מערכות מידע ותוכנה - אתר תדמית"
            },
            {
                icon:moshe,
                link:"https://sp.systems/",
                title:"Shieldpro systems - אתר תדמית"
            },
            {
                icon:door,
                link:"http://www.commercialdoorrepairontario.ca/",
                title:"Commercial Doors - אתר תדמית"
            },
            {
                icon:adam,
                link:"https://adambeamalo.co.il/",
                title:"אתר תדמית - פיתוח ארגוני"
            },
            {
                icon:yariv,
                link:"https://yarivconsultant.com/",
                title:"ייעוץ ארגוני ופיתוח מנהלים - אתר תדמית"
            },
            {
                icon:roi,
                link:"https://www.legaltalking.com/",
                title:"legaltalking - בלוג משפטי"
            }
        ],

        fix: [
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
            {
                icon:sima,
                link:"https://simanissani.com/",
                title:"סימה ניסני, מורת דרך - אתר תדמית"
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