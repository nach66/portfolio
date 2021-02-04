import React, { Component } from 'react'
import Web from "./Web";

export default class WebList extends Component {
    state={
        webs: [
                {
                    ltr: false,
                    title:"דף נחיתה",
                    list: [
                        'עיצוב אישי ומותאם לאופי העסק',
                        'Google Analytics, Facebook Pixel',
                        'תשתית לקידום האתר',
                        'טופס לידים מתקדם',
                        'התאמה למובייל'
                    ],
                    text:"מנחית את הלקוח ישר למרכז העניינים: מה אנחנו מציעים, למה כדאי, ואיפה נרשמים. דף הנחיתה הינו אתר בעל עמוד אחד בלבד, מעוצב וממוקד היטב. לעומת אתר רגיל בו אפשר ללכת לאיבוד בין כל התוכן, כאן נעזור ללקוח לגשת אלינו במינימום מאמץ של שיטוט וקריאה. ממש כמו שעולה מהשם שלו, זהו מסלול שנוח לנחות בו מקישורי השיווק שלכם ברחבי האינטרנט. כאן הלקוח ישר ירגיש שמצא את מה שחיפש. התוכן יהיה שיווקי ומניע לפעולה, והמטרה תהיה ליצור לידים (פניות) על ידי טופס מקוון להשארת פרטים."
                },
                {
                    ltr: true,
                    title:"אתר תדמית",
                    list: [
                        'עמודי תוכן שונים: אודות, גלריה, צור קשר, ועוד',
                        'הדרכה פרטנית לתפעול המערכת',
                        'עיצוב לפי אפיון חווית משתמש',
                        'תשתית לקידום האתר',
                        'טופס לידים מתקדם',
                        'התאמה למובייל'
                    ],
                    text:"כרטיס ביקור של העסק, ואפילו מעין ביקור וירטואלי בו: מי אנחנו, מה אנחנו עושים, איך זה נראה וכמה כדאי. באתר התדמית נכתוב את כל המידע הרלוונטי ללקוח כדי ללמוד עלינו, להתרשם וליצור קשר. האתר צריך להיות מקיף אך ענייני, להעביר מעט מהאווירה שאנחנו מעוניינים ליצור באמצעות העיצוב והתוכן יחד, ולגרום לגולשים להישאר בו ולרצות לדעת עלינו יותר."
                },
                {
                    ltr: false,
                    title:"חנות",
                    list: [
                        'כל מה שיש באתר התדמית, ובנוסף -',
                        'חנות מעוצבת לחווית קניה שמשאירה טעם של עוד',
                        'מערכת לעדכון, הוספה והסרה של מוצרים',
                        'חיבור לסליקת אשראי ולהפקת דוחות',
                    ],
                    text:"בעולם של היום ובעיקר בשנת הקורונה, עסקים רבים מעוניינים למכור אונליין. מכירה כזו, במקום או בנוסף לחנות פיזית – מגדילה משמעותית את העסקאות וחוסכת בהתעסקות וגם בעלויות. אתר כזה צריך להיות בנוי בצורה מקצועית, מותאמת לנייד, ובעלת ביצועים מהירים. נדאג גם לעיצוב מותאם, מעניין ומניע לפעולה, שיעשה לגולשים חשק לרכוש ולרכוש!"
                },
                {
                    ltr: true,
                    title:"שיפוצים",
                    list: [
                        'הוספת עמודים',
                        'שינוי עיצוב וסגנון',
                        'העלאת תכנים ותמונות ',
                        'פיתוח תוספים לוורדפרס',
                        'שיפור נוכחות במנועי חיפוש'
                    ],
                    text:"כבר יש לכם אתר, אבל הוא עדיין לא מושלם? באלכם להוסיף אליו משהו מסוים שראיתם באתר אחר ורציתם גם? אני אעזור לו להפוך להיות האתר שחלמתם עליו."
                }
                
        ]
    }

    render () {
        return (
            <>
                <div className="bf"/>
                <section className="weblist">
                    <h1>אז מה בתפריט?</h1>
                    <div className="weblist-center">
                        {this.state.webs.map(web => {
                            return <Web key={web.id} reco={web}/>;
                        })}
                    </div>
                </section>
                <div className="af"/>
            </>
        );
    }
}