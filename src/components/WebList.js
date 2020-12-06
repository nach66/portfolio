import React, { Component } from 'react'
import Web from "./Web";
import a from '../images/reco/pet.png'
import b from '../images/reco/hostel.png'
import c from '../images/reco/flowers.png'

export default class WebList extends Component {
        state={
            webs: [
                {
                    icon:a,
                    link:"https://petisitti.netlify.app/",
                    title:"דף נחיתה",
                    text:"מנחית את הלקוח ישר למרכז העניינים: מה אנחנו מציעים, למה כדאי, ואיפה נרשמים. דף הנחיתה הינו אתר בעל עמוד אחד בלבד, מעוצב וממוקד היטב. לעומת אתר רגיל בו אפשר ללכת לאיבוד בין כל התוכן, כאן נעזור ללקוח לגשת אלינו, בלי הרבה שיטוט וקריאה. התוכן יהיה שיווקי ומניע לפעולה, והמטרה תהיה ליצור לידים (פניות) על ידי טופס מקוון להשארת פרטים."
                },
                {
                    icon:b,
                    link:"https://hosteltiberias.co.il/",
                    title:"אתר תדמית",
                    text:"כרטיס ביקור של העסק, ואפילו מעין ביקור וירטואלי בו: מי אנחנו, מה אנחנו עושים, איך זה נראה וכמה כדאי. באתר התדמית נכתוב את כל המידע הרלוונטי ללקוח כדי ללמוד עלינו, להתרשם וליצור קשר. האתר צריך להיות מקיף אך ענייני, להעביר מעט מהאווירה שאנחנו מעוניינים ליצור באמצעות העיצוב והתוכן יחד, ולגרום לגולשים להישאר בו ולרצות לדעת עלינו יותר."
                },
                {
                    icon:c,
                    link:"http://www.happyflowers.webing.co.il/",
                    title:"חנות",
                    text:"בעולם של היום ובעיקר בשנת הקורונה, עסקים רבים מעוניינים למכור אונליין. מכירה כזו, במקום או בנוסף לחנות פיזית – מגדילה משמעותית את העסקאות וחוסכת בהתעסקות וגם בעלויות. אתר כזה צריך להיות בנוי בצורה מקצועית, מותאמת לנייד, ובעלת ביצועים מהירים כדי שהלקוח יישאר באתר. נדאג גם לעיצוב מותאם, מעניין ומניע לפעולה, שיעשה לגולשים חשק לרכוש ולרכוש!"
                }
            ]
        }
        render () {
            return (
                <section className="weblist">
                    <h2 style={{ textAlign:'center' }}>
                    אתרים שכבר בניתי כדי להרשים -</h2>
                    <div className="weblist-center">
                        {this.state.webs.map(web => {
                            return <Web key={web.id} reco={web}/>;
                        })}
                    </div>
                </section>
            );
        }
}
