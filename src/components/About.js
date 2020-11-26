import React from 'react'
import {FaRegSmile, FaRegSmileWink, FaSmileWink} from 'react-icons/fa';

export default function About() {
    return (
        <>
            <div className="bf"/>

            <div className="about">
                
                <article className="down">
                    <div className="focused"/>
                    <h2>למה בחרתי להתעסק בבניית אתרים?</h2>
                    <h5>
                        אני אוהבת לפתור פאזלים, להרכיב תוכנות, וגם להתעסק במילים וצבעים. באופן הכללי אני אוהבת לדאוג שדברים יסתדרו בצורה מושלמת עד לפרטים הקטנים, ויהיו מעניינים ויפים. 
                        בניית אתרים משלבת את כל הדברים האלו, ויכולה להיות פרנסה משמחת עבורי, תוך כדי יצירה אישית ומעניינת - עבור מישהו אחר. <FaRegSmile style={{fontSize:'1.5rem', paddingTop: '0px', color:'var(--primaryColor)'}}/></h5>
                </article>
                <article className="up">
                    <h2>למה לבחור בי לבניית האתר שלכם?</h2>
                    <ul>
                        <li>
                            <h5>מקצועיות - אני בוגרת תואר ראשון במדעי המחשב ובפסיכולוגיה, ובעלת ניסיון בבניית אתרים.</h5>
                        </li>
                        <li>
                            <h5>יחס אישי - העסק שלי צעיר, אז עוד יש לי את ההתרגשות להשקיע באתר לפחות כאילו הוא ירק בגינה שלי. אני באמת אהיה אתכם בתהליך ואהנה מליצור אתר בעל אופי שיתאים לכם בדיוק, ולא סתם יעבור אצלי על פס ייצור.</h5>
                        </li>
                        <li>
                            <h5>מחירי השקה משתלמים - גם המחירים עוד צעירים ורעננים. <FaRegSmileWink style={{fontSize:'1.5rem', color:'var(--primaryColor)'}}/></h5>
                        </li>
                        <li>
                            <h5>צבעוניות - אני מתרגלת כתיבה באוניברסיטה של החיים מאז כיתה א' ומרגישה בשלה לעבור לכתיבה שיווקית, כך שאוכל לעזור לכם גם בתחום הזה. דוגמאות לכתיבה שלי ניתן למצוא באתרים לדוגמא.</h5>
                        </li>
                    </ul>
                    <div className="choose"/>
                </article>
            </div>

            <div className="af"/>
        </>
    )
}
