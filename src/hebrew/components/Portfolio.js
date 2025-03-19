import React, { Component } from 'react'
import DividerWithText from './DividerWithText'
import Zoom from 'react-reveal/Zoom';

import hostel from '../../images/reco/hostel.png'
import wall from '../../images/reco/walll.png'
// import door from '../../images/reco/door.png'
import peace from '../../images/reco/peace.png'

import zar from '../../images/reco/zar.png'
import japan from '../../images/reco/japan.png'
import tokio from '../../images/reco/tokio.png'
import roi from '../../images/reco/roi.png'
import adam from '../../images/reco/adam.png'
import yariv from '../../images/reco/יריב.png'
import sima from '../../images/reco/סימה.png'
import arie from '../../images/reco/שטומפכר.png'
import raw from '../../images/reco/raw.png'
import bari from '../../images/reco/bari.jpeg'
import gali from '../../images/reco/gali.jpeg'
import alex from '../../images/reco/alex.jpeg'
import miri2 from '../../images/reco/miri2.jpeg'

import sharon from '../../images/reco/sharon.png'
import beni from '../../images/reco/beni.png'
import heshel from '../../images/reco/heshel.png'
import offismart from '../../images/reco/offismart.png'
import shani from '../../images/reco/shani.png'
import shap from '../../images/reco/shap.png'
import gonen from '../../images/reco/gonen.png'
import baguru from '../../images/reco/baguru.jpeg'
import tlv from '../../images/reco/tlv.jpeg'
import yaar from '../../images/reco/yaar.png'
import wip from '../../images/reco/wip.jpeg'
import nahat from '../../images/reco/nahat.jpeg'
import kineret from '../../images/reco/kineret.jpeg'
import minami from '../../images/reco/minami2.jpeg'

export default class Portfolio extends Component {
    state={

        pro: [
            {
                icon:heshel,
                link:"https://heschel.org.il/",
                title:"מרכז השל ללימודי קיימות - אתר תדמית, בלוג, ומכירת קורסים"
            },
            
            {
                icon:wip,
                link:"https://racheliebner.com/",
                title:"WIP - סדנאות ניהול זמן"
            },
            {
                icon:shani,
                link:"http://shanisurfart.com/",
                title:"shani surf art - חנות תכשיטים"
            },
            {
                icon:minami,
                link:"https://mynami.co.il/",
                title:"מינאמי - חנות צעצועים למבוגרים"
            },  
            {
                icon:tlv,
                link:"https://tlvgym.co.il/",
                title:"tlvgym - אתר תדמית ומערכת חוגים"
            },
            {
                icon:peace,
                link:"https://peace-boards.com/",
                title:"Peace Boards - חנות סקייטבורדים"
            },
            {
                icon:hostel,
                link:"https://hosteltiberias.co.il/",
                title:"אכסניית טבריה - אתר תדמית + הזמנות"
            },
            {
                icon:wall,
                link:"https://wall-express.co.il/",
                title:"Wall express - חנות טפטים"
            },
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
            }
        ],

        tadmit: [
            {
                icon:miri2,
                link:"https://mima-meyaldot.com/",
                title:"מימה מיילדות פרטית - אתר תדמית"
            },

            {
                icon:alex,
                link:"https://alexkatch.com/",
                title:"אנימציה - אתר תדמית ותיק עבודות"
            },            
            {
                icon:gali,
                link:"https://galiness.com/he/",
                title:"גלי נס - מיינדפולנס ויוגה לארגונים"
            },
            {
                icon:gonen,
                link:"https://www.eyalgonen.com/",
                title:"אייל גונן - בלוג מנהיגות"
            },         
            {
                icon:adam,
                link:"https://adambeamalo.co.il/",
                title:"אדם בעמלו - פיתוח ארגוני"
            },
            {
                icon:yariv,
                link:"https://yarivconsultant.com/",
                title:"ייעוץ ארגוני ופיתוח מנהלים"
            }
        ],

        fix: [
            {
                icon:kineret,
                link:"https://kinneretdl.co.il/",
                title:"פסיכותרפיסטית ישאלית ביפן - אתר תדמית"
            },
            {
                icon:nahat,
                link:"https://www.nahatcoffee.com/he/",
                title:"קפה נחת - אתר חנות"
            },
            {
                icon:baguru,
                link:"https://mybaguru.com/",
                title:"הגורו שלך לבגרות - אתר קורסים"
            },
            {
                icon:yaar,
                link:"https://yaaracacao.co.il/he/",
                title:"יער הקקאו - חנות וסדנאות שוקולד :)"
            },
            {
                icon:raw,
                link:"https://raw-planet.dog/",
                title:"Raw planet - חנות חיות"
            },
            {
                icon:offismart,
                link:"https://www.offismart.co.il/",
                title:"offismart - תיווך נדלן"
            },  
            {
                icon:arie,
                link:"https://stofmacher.co.il/",
                title:"שטופמכר בדק בית - אתר תדמית"
            },
            {
                icon:beni,
                link:"https://he.zipperbags.online/",
                title:"Zipper bags - חנות תיקים"
            },
        ]

        // spam: [
            // {
            //     icon:yoav,
            //     link:"https://yoav-bulshtein.com/",
            //     title:"קידום אתרים - אתר תדמית"
            // },
            // {
            //     icon:bari,
            //     link:"https://bariplumbing.com/",
            //     title:"ברי אינסטלציה - דף נחיתה"
            // },
            // {
            //     icon:door,
            //     link:"http://www.commercialdoorrepairontario.ca/",
            //     title:"Commercial Doors"
            // },
            // {
            //     icon:sima,
            //     link:"https://simanissani.com/",
            //     title:"סימה ניסני, מורת דרך - אתר תדמית"
            // },
            // {
            //     icon:roi,
            //     link:"https://www.legaltalking.com/",
            //     title:"legaltalking - בלוג משפטי"
            // }
            // {
            //     icon:sharon,
            //     link:"https://sharonperfumes.com/",
            //     title:"SharonPerfume - בלוג וחנות בשמים"
            // },
            // {
            //     icon:shap,
            //     link:"https://www.shaptop.com/",
            //     title:"תרגום תבנית - חנות שופיפיי"
            // },
        //     {
        //         icon:flower,
        //         link:"https://very-happy-flowers.com/",
        //         title:"happy flowers - חנות פרחים"
        //     },
        //     {
        //         icon:vladi,
        //         link:"https://congressbulaim.co.il/",
        //         title:"קונגרס הבולאים - חנות בולים"
        //     },
                // {
                //     icon:idit,
                //     link:"https://idit-or.com/",
                //     title:"עדית אור - תדמית ובלוג"
                // },
                // {
                //     icon:avi,
                //     link:"https://homeland-agency.com/",
                //     title:"Homeland - אתר תדמית"
                // },
                // {
                //     icon:shabat,
                //     link:"https://shabbatunplugged.org/",
                //     title:"שבת אנפלאגד - אתר תדמית"
                // },
        // ],
    }
    
    render () {
        return (
                <>
                    <div className="services">
                        <h1>טעימה מהפרוייקטים</h1>
                        
                        <br/>
                        <br/>
                        <br/>
                        <DividerWithText><h2>אתרי מכירה ומערכות</h2></DividerWithText>                    
                        <div className="services-center">
                            {this.state.pro.map(
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
                        <DividerWithText><h2>אתרים ששיפצתי – שדרוג העיצוב, הוספת עמודים ותכנים</h2></DividerWithText>                    
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

                        <br/>
                        <br/>
                        <br/>
                        <DividerWithText><h2>אתרי תדמית</h2></DividerWithText>                    
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

                    </div>
                </>
            );
        }
}
