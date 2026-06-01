import React, { Component } from 'react'
import DividerWithText from './DividerWithText'
import Zoom from 'react-reveal/Zoom';

import roi from '../../images/reco/roi.png'
import hostel from '../../images/reco/hostel.png'
import peace from '../../images/reco/peace.png'
import tokio from '../../images/reco/tokyo.jpeg'
import arie from '../../images/reco/שטומפכר.png'
import alex from '../../images/reco/alex.jpeg'
import miri from '../../images/reco/miri.jpeg'
import beni from '../../images/reco/beni.png'
import heshel from '../../images/reco/heshel1.jpeg'
import offismart from '../../images/reco/offismart.png'
import gonen from '../../images/reco/gonen.png'
import tlv from '../../images/reco/tlv.jpeg'
import yaar from '../../images/reco/yaar.png'
import wip from '../../images/reco/wip2.jpeg'
import nahat from '../../images/reco/nahat.jpeg'
import minami from '../../images/reco/minami2.jpeg'
import gali from '../../images/reco/gali2.jpeg'
import pilpel from '../../images/reco/pilpel.jpeg'
import carmel from '../../images/reco/carmel.jpeg'
import bambino from '../../images/reco/bambino.png'
import ritco from '../../images/reco/ritco.jpeg'
import anan from '../../images/reco/anan.jpeg'
import wordplay from '../../images/reco/word.png'
import wiwo from '../../images/reco/wiwo.png'
import orr from '../../images/reco/orr2.jpeg'
import reutdafna from '../../images/reco/reutdafna.jpeg'

export default class Portfolio extends Component {
state = {
featured: [
  {
    icon: anan,
    // link: "https://camp-be.com/",
    title: "קמפוס בענן - אתר למעקב, פילוח וניתוח נתונים עבור צוותי הוראה והנהלה"
  },
  {
    icon: wordplay,
    link: "https://wordplay.org.il/",
    title: "Wordplay - פאנלים לניהול משימות, בדיקת מבחנים ומעקב תלמידים בזמן אמת"
  },
],

  systems: [
    {
      icon: wip,
      link: "https://racheliebner.com/",
      title: "WIP - סדנאות ניהול זמן"
    },
    {
      icon: tlv,
      link: "https://tlvgym.co.il/",
      title: "tlvgym - אתר תדמית ומערכת חוגים"
    },
    {
      icon: tokio,
      link: "https://www.hebrewtourguidetokyo.com/",
      title: "טיולי בוטיק בטוקיו - רכישת סיורים"
    },
    {
      icon: peace,
      link: "https://peace-boards.com/",
      title: "Peace Boards - חנות סקייטבורדים"
    },
    {
      icon: reutdafna,
      link: "https://reutdafna.com/",
      title: "רעות דפנא - גלריית יצירות וחנות"
    },
    {
      icon: hostel,
      link: "https://hosteltiberias.co.il/",
      title: "אכסניית טבריה - אתר תדמית + הזמנות"
    },
  ],

  tadmit: [
    {
      icon: gali,
      link: "https://galiness.com/he/",
      title: "גלי נס יוגה ומיינדפולנס - אתר תדמית ותוכן"
    },
    {
      icon: alex,
      link: "https://alexkatch.com/",
      title: "אנימציה - אתר תדמית ותיק עבודות"
    },
    {
      icon: miri,
      link: "https://mima-meyaldot.com/",
      title: "מימה מיילדות פרטית - אתר תדמית ותוכן"
    },
    {
    icon: roi,
    link: "https://www.legaltalking.com/",
    title: "Legal Talking - אתר תוכן"
    },
    {
      icon: gonen,
      link: "https://www.eyalgonen.com/",
      title: "אייל גונן - בלוג מנהיגות"
    },
    {
      icon: orr,
      link: "https://oordesignbuild.com/",
      title: "Oor design build - תדמית לחברת בנייה"
    },
  ],

upgrade: [
  {
    icon: nahat,
    link: "https://www.nahatcoffee.com/he/",
    title: "קפה נחת - חנות וסדנאות"
  },
  {
    icon: heshel,
    link: "https://heschel.org.il/",
    title: "מרכז השל  - תדמית, בלוג, ומכירת קורסים"
  },
  {
    icon: minami,
    link: "https://mynami.co.il/",
    title: "מינאמי - חנות ומערכת מכירה מותאמת"
  },
    {
    icon: yaar,
    link: "https://yaaracacao.co.il/he/",
    title: "יער הקקאו - חנות שוקולד וסדנאות"
  },
  {
    icon: offismart,
    link: "https://www.offismart.co.il/",
    title: "offismart - חיפוש משרדים עם פילטור"
  },
  {
    icon: carmel,
    link: "https://www.carmelph.co.il/",
    title: "הוצאת כרמל ירושלים - חנות ספרים"
  },
  {
    icon: bambino,
    link: "https://www.bambinoshoes.co.il/",
    title: "במבינו - חנות נעליים"
  },
    {
    icon: beni,
    link: "https://he.zipperbags.online/",
    title: "Zipper bags - חנות תיקים"
  },
  {
    icon: ritco,
    link: "https://ritco.co.il/",
    title: "ריטקו - חנות צעצועים"
  },
  {
    icon: wiwo,
    link: "https://wiwo.co.il/",
    title: "wiwo - קורס להשקעה בשוק ההון"
  },
  {
    icon: arie,
    link: "https://stofmacher.co.il/",
    title: "שטופמכר בדק בית - אתר תדמית"
  },
  {
    icon: pilpel,
    link: "https://pilpelseeds.com/",
    title: "pilpel seeds - קטלוג זני פלפל"
  },
],

removed_low_priority: [
//   {
//     icon: zar,
//     link: "https://zarabeyapan.com/",
//     title: "זרה ביפן - חנות ספרים"
//   },
    // {
    //   icon: leah,
    //   link: "https://leahalmogarazi.com/",
    //   title: "Leah Almog Arazi - תדמית לאדריכלית"
    // },
    //     {
//     icon: japan,
//     link: "https://hebrewtourguidejapan.com/",
//     title: "סיורי יום ביפן - תדמית + הזמנות"
//   },
    //   {
//     icon: goa,
//     link: "https://goa-log.com/",
//     title: "גואה לוגיסטיק - אתר תדמית בוויקס"
//   },
//   {
//     icon: kineret,
//     link: "https://kinneretdl.co.il/",
//     title: "פסיכותרפיסטית ישראלית ביפן"
//   },
//   {
//     icon: sima,
//     link: "https://simanissani.com/",
//     title: "סימה ניסני - אתר תדמית"
//   },
//   {
//     icon: yariv,
//     link: "https://yarivconsultant.com/",
//     title: "יריב ייעוץ ארגוני - אתר תדמית"
//   },
],

removed_changed_too_much: [
//   {
//     icon: baguru,
//     link: "https://mybaguru.com/",
//     title: "הגורו שלך לבגרות - אתר קורסים"
//   },
//   {
//     icon: adam,
//     link: "https://adambeamalo.co.il/",
//     title: "אדם בעמלו - פיתוח ארגוני"
//   },
]

}

render () {
    return (
        <>
            <div className="services">
                <h1>טעימה מהפרוייקטים</h1>

                <br/>
                <br/>
                <br/>

                <DividerWithText>
                    <h2>פיתוח פאנלים מותאמים אישית בקוד</h2>
                </DividerWithText>

                <div className="services-center  featured-row">
                    {this.state.featured.map((item, index) => {
                        return (
                            <article key={index}>
                                <Zoom>
                                    <article className="grid">
                                        <figure className="effect-chico">
                                            <img style={{ height: '200px' }} src={item.icon} alt="web img"/>
                                            <figcaption>
                                                {item.link ? (
                                                    <a href={item.link} rel="noopener noreferrer" target="_blank">
                                                        לצפייה באתר
                                                    </a>
                                                ) : (
                                                    <span style={{color:'#fff'}}>
                                                        פרויקט מותאם אישית
                                                    </span>
                                                )}
                                            </figcaption>
                                        </figure>
                                    </article>
                                </Zoom>
                                <p>{item.title}</p>
                            </article>
                        )
                    })}
                </div>

<div className="pro-btn-wrap">
    <a href="/portfolio2">
        <button className="submit pro-btn">
            לפירוט אודות המערכות &gt;
        </button>
    </a>
</div>

                <br/>
                <br/>
                <br/>

                <DividerWithText><h2>אתרי למידה, חנויות ווקומרס והזמנות לפי תאריך</h2></DividerWithText>

                <div className="services-center">
                    {this.state.systems.map((item, index) => {
                        return (
                            <article key={index}>
                                <Zoom>
                                    <article className="grid">
                                        <figure className="effect-chico">
                                            <img style={{ height: '200px' }} src={item.icon} alt="web img"/>
                                            <figcaption>
                                                <a href={item.link} rel="noopener noreferrer" target="_blank">
                                                    לצפייה באתר
                                                </a>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </Zoom>
                                <p>{item.title}</p>
                            </article>
                        )
                    })}
                </div>

                <br/>
                <br/>
                <br/>

                <DividerWithText><h2>אתרי תדמית ותוכן</h2></DividerWithText>

                <div className="services-center">
                    {this.state.tadmit.map((item, index) => {
                        return (
                            <article key={index}>
                                <Zoom>
                                    <article className="grid">
                                        <figure className="effect-chico">
                                            <img style={{ height: '200px' }} src={item.icon} alt="web img"/>
                                            <figcaption>
                                                <a href={item.link} rel="noopener noreferrer" target="_blank">
                                                    לצפייה באתר
                                                </a>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </Zoom>
                                <p>{item.title}</p>
                            </article>
                        )
                    })}
                </div>

                <br/>
                <br/>
                <br/>

                <DividerWithText>
                    <h2>אתרים ששדרגתי: שיפור עיצוב, פיתוחים נוספים וטיפול בתקלות לאורך זמן</h2>
                </DividerWithText>

                <div className="services-center">
                    {this.state.upgrade.map((item, index) => {
                        return (
                            <article key={index}>
                                <Zoom>
                                    <article className="grid">
                                        <figure className="effect-chico">
                                            <img style={{ height: '200px' }} src={item.icon} alt="web img"/>
                                            <figcaption>
                                                <a href={item.link} rel="noopener noreferrer" target="_blank">
                                                    לצפייה באתר
                                                </a>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </Zoom>
                                <p>{item.title}</p>
                            </article>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

}
