import React from 'react'
import a from '../../images/icons/Cube2.svg'
import Fade from 'react-reveal/Fade';
export default function Ycube() {
    return (
        <>
        <div className="sbf"/>
            <div className="sec">
                <Fade bottom>            
                    <article className="centerr ycube">
                        <img src={a} alt="icon"/>
                    </article>
                    <article className="centerr">
                        <h3>למה קוביה?</h3>
                        <p>
                            תמיד אהבתי לפתור פאזלים, וגם להתעסק במילים וצבעים. אני מתה על לעשות סדר בבלגן, לשבץ כל חלק לתיקיה הנכונה ואז לשלוף אותו בזמן ובמקום שלו. כיף לראות איך מכל הפרטים הקטנים, נוצרת תמונה מושלמת. הקובייה ההונגרית שמדגמנת בלוגו – נראית אולי כמו סיוט עבור מי שלא יודע איך לגשת, אבל מי שמכיר את הנוסחה? יכול לפתור אותה תיקתק.
                        </p>
                        <br/>
                        <p>
                            בניית אתר עלולה להיראות כך בתחילת התהליך. קשה להחליט במי לבחור למשימה הזו כשלא יודעים מה בכלל צריך, או להבין מההצעות שקיבלת - מה הציעו לך באמת. והיא גם פאזל מורכב וצבעוני: החל משלב האפיון על פי משאלות הלקוח, דרך הרכבה של הטכנולוגיות החדשניות ביותר, ועד לעיצוב המושלם.
                        </p>
                        <p>
                            למדתי את הנוסחה, ואני יכולה להסביר גם לך.
                            <a style={{margin:'10px', color:'var(--lgreen)'}} href="/contact">
                                שנדבר?
                            </a>
                        </p>

                    </article>
                </Fade>
            </div> 
        <div className="saf"/>
        </>
    )
}
