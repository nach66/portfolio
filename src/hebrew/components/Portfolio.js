import React, { Component } from 'react'
import DividerWithText from './DividerWithText'
import Zoom from 'react-reveal/Zoom';

import wall from '../../images/reco/walll.png'
import hostel from '../../images/reco/hostel.png'
import peace from '../../images/reco/peace.png'
import zar from '../../images/reco/zar.png'
import japan from '../../images/reco/japan.png'
import tokio from '../../images/reco/tokio.png'
import adam from '../../images/reco/adam.png'
import arie from '../../images/reco/שטומפכר.png'
import alex from '../../images/reco/alex.jpeg'
import miri2 from '../../images/reco/miri2.jpeg'
import beni from '../../images/reco/beni.png'
import heshel from '../../images/reco/heshel1.jpeg'
import offismart from '../../images/reco/offismart.png'
import gonen from '../../images/reco/gonen.png'
import baguru from '../../images/reco/baguru.jpeg'
import tlv from '../../images/reco/tlv.jpeg'
import yaar from '../../images/reco/yaar.png'
import wip from '../../images/reco/wip.jpeg'
import nahat from '../../images/reco/nahat.jpeg'
import kineret from '../../images/reco/kineret.jpeg'
import minami from '../../images/reco/minami2.jpeg'
import gali from '../../images/reco/gali.jpeg'
import gali2 from '../../images/reco/gali2.jpeg'
import gali3 from '../../images/reco/gali3.jpeg'

import pilpel from '../../images/reco/pilpel.jpeg'
import goa from '../../images/reco/goa.png'
import carmel from '../../images/reco/carmel.jpeg'
import bambino from '../../images/reco/bambino.png'
import ritco from '../../images/reco/ritco.jpeg'
import anan from '../../images/reco/anan2.jpeg'
import wordplay from '../../images/reco/word.png'
import wiwo from '../../images/reco/wiwo.png'
import leah from '../../images/reco/leah.jpeg'
import orr from '../../images/reco/orr2.jpeg'
import reutdafna from '../../images/reco/reutdafna.jpeg'

export default class Portfolio extends Component {
    state={

        fix: [
            {
                icon:nahat,
                link:"https://www.nahatcoffee.com/he/",
                title:"קפה נחת - חנות פולי קפה איכותיים, אביזרים וסדנאות"
            },
            {
                icon:offismart,
                link:"https://www.offismart.co.il/",
                title:"offismart - משרדים להשכרה עם מערכת איתור ופילטור מותאם"
            },
            {
                icon:heshel,
                link:"https://heschel.org.il/",
                title:"מרכז השל ללימודי קיימות - אתר תדמית, בלוג, ומכירת קורסים"
            },

            {
                icon:yaar,
                link:"https://yaaracacao.co.il/he/",
                title:"יער הקקאו - חנות שוקולד וסדנאות"
            },
            {
                icon:carmel,
                link:"https://www.carmelph.co.il/",
                title:"הוצאת כרמל ירושלים - חנות ספרים"
            },

            {
                icon:bambino,
                link:"https://www.bambinoshoes.co.il/",
                title:"במבינו - חנות נעליים"
            },
            {
                icon:ritco,
                link:"https://ritco.co.il/",
                title:"ריטקו - חנות צעצועים"
            },
            {
                icon:beni,
                link:"https://he.zipperbags.online/",
                title:"Zipper bags - חנות תיקים"
            },  
            {
                icon:goa,
                link:"https://goa-log.com/",
                title:"גואה לוגיסטיק - אתר תדמית בוויקס"
            },

            {
                icon:pilpel,
                link:"https://pilpelseeds.com/",
                title:"pilpel seeds - פיתוח זני פלפל"
            },            
            {
                icon:kineret,
                link:"https://kinneretdl.co.il/",
                title:"פסיכותרפיסטית ישאלית ביפן"
            },
            {
                icon:adam,
                link:"https://adambeamalo.co.il/",
                title:"אדם בעמלו - פיתוח ארגוני"
            }
        ],

        courses: [
            {
                icon:wiwo,
                link:"https://wiwo.co.il/",
                title:"wiwo - קורס להשקעה בשוק ההון"
            },
            {
                icon:wip,
                link:"https://racheliebner.com/",
                title:"WIP - סדנאות ניהול זמן"
            },
            {
                icon:baguru,
                link:"https://mybaguru.com/",
                title:"הגורו שלך לבגרות - אתר קורסים"
            },
                        {
                icon:anan,
                // link:"https://camp-be.com/",
                title:"קמפוס בענן - פאנל לפילוח נתונים ומעקב עבור ההנהלה והצוות החינוכי"
            },
            {
                icon:wordplay,
                link:"https://wordplay.org.il/",
                title:"wordplay - לימוד אנגלית - פיתוח מורכב של בדיקות, מתן ציון וייצוא"
            },
        ],
        
        pro: [            
            {
                icon:reutdafna,
                link:"https://reutdafna.com/",
                title:"רעות דפנא - גלריית יצירות וחנות"
            },
            {
                icon:minami,
                link:"https://mynami.co.il/",
                title:"מינאמי - חנות צעצועים למבוגרים"
            },  
            {
                icon:peace,
                link:"https://peace-boards.com/",
                title:"Peace Boards - חנות סקייטבורדים"
            },
            {
                icon:tlv,
                link:"https://tlvgym.co.il/",
                title:"tlvgym - אתר תדמית ומערכת חוגים"
            },
            {
                icon:hostel,
                link:"https://hosteltiberias.co.il/",
                title:"אכסניית טבריה - אתר תדמית + הזמנות"
            },

            {
                icon:japan,
                link:"https://hebrewtourguidejapan.com/",
                title:"סיורי יום ביפן - תדמית + הזמנות"
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
            }
        ],

        tadmit: [
            {
                icon:gali,
                link:"https://galiness.com/he/",
                title:"גלי נס - מיינדפולנס ויוגה לארגונים"
            },            
            {
                icon:gali3,
                link:"https://galiness.com/he/beneficial-habits-conference/",
                title:"דף נחיתה - כנס לשינויי הרגלים"
            },            
            {
                icon:gali2,
                link:"https://galiness.com/he/ritrit/",
                title:"דף נחיתה - ריטריט יוגה ובריאות"
            },

            {
                icon:leah,
                link:"https://leahalmogarazi.com/",
                title:"Leah Almog Arazi - אתר תדמית לאדריכלית"
            },            
            {
                icon:orr,
                link:"https://oordesignbuild.com/",
                title:"Oor design build - אתר תדמית לחברת בנייה"
            },
                        {
                icon:arie,
                link:"https://stofmacher.co.il/",
                title:"שטופמכר בדק בית"
            },    
            
            {
                icon:miri2,
                link:"https://mima-meyaldot.com/",
                title:"מימה מיילדות פרטית - אתר תדמית"
            },
            {
                icon:gonen,
                link:"https://www.eyalgonen.com/",
                title:"אייל גונן - בלוג מנהיגות"
            }, 
            {
                icon:alex,
                link:"https://alexkatch.com/",
                title:"אנימציה - אתר תדמית ותיק עבודות"
            },            
    
            // {
            //     icon:yariv,
            //     link:"https://yarivconsultant.com/",
            //     title:"ייעוץ ארגוני פיתוח מנהלים"
            // }
        ],

    }
    
    render () {
        return (
                <>
                    <div className="services">
                        <h1>טעימה מהפרוייקטים</h1>

                        <br/>
                        <br/>
                        <br/>
                        <DividerWithText><h2>אתרים ששיפצתי – שדרוג העיצוב, תיקון תקלות, ניהול ותחזוקה</h2></DividerWithText>                    
                        <div className="services-center">
                            {this.state.fix.map(
                                (item, index) => {return (
                                    <article key={index}>
                                        <Zoom>
                                        <article className="grid">
                                            <figure class="effect-chico">
                                                <img style={{ height: '200px' }} src={item.icon} alt="web img"/>
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
                        <DividerWithText><h2>אתרי קורסים ומערכות למידה</h2></DividerWithText>                    
                        <div className="services-center">
                            {this.state.courses.map(
                                (item, index) => {return (
                                    <article key={index}>
                                        <Zoom>
                                        <article className="grid">
                                            <figure class="effect-chico">
                                                <img style={{ height: '200px' }} src={item.icon} alt="web img"/>
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
                        <DividerWithText><h2>אתרי ווקומרס ומערכות הזמנות</h2></DividerWithText>                    
                        <div className="services-center">
                            {this.state.pro.map(
                                (item, index) => {return (
                                    <article key={index}>
                                        <Zoom>
                                        <article className="grid">
                                            <figure class="effect-chico">
                                                <img style={{ height: '200px' }} src={item.icon} alt="web img"/>
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
                        <DividerWithText><h2>אתרי תדמית ודפי נחיתה</h2></DividerWithText>                    
                        <div className="services-center">
                            {this.state.tadmit.map(
                                (item, index) => {return (
                                    <article key={index}>
                                        <Zoom>
                                        <article className="grid">
                                            <figure class="effect-chico">
                                                <img style={{ height: '200px' }} src={item.icon} alt="web img"/>
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
