import React from 'react'
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

export default function Ycube() {
    return (
        <>
        <div className="sbf"/>
            <div className="sec">
                <Fade bottom>            
                    <article className="centerr">
                        <Roll bottom>
                            <div className="contact-me"/>
                        </Roll>                    
                    </article>
                    
                    <article className="centerr">
                        <h3>היי, אני יוני.</h3>
                        <p>
                            תמיד אהבתי לפתור פאזלים, וגם להתעסק במילים וצבעים. אני מתה על לעשות סדר בבלגן, לשבץ כל חלק לתיקיה הנכונה ואז לשלוף אותו בזמן ובמקום שלו. כיף לראות איך מכל הפרטים הקטנים, נוצרת תמונה מושלמת. הקובייה ההונגרית שמדגמנת בלוגו – נראית אולי כמו סיוט עבור מי שלא יודע איך לגשת, אבל מי שמכיר את הנוסחה? יכול לפתור אותה תיקתק.
                        </p>
                        <br/>
                        <p>
                            אני כאן כדי לעזור לעסק שלך לעבור לגור באינטרנט - בארמון דיגיטלי שיודע להפוך גולש חולף, ללקוח שמשלם.
                        </p>
                        <p>
                            <a href="/about" 
                                style={{color:'var(--lgreen)'}}
                                rel="noopener noreferrer" target="_blank">
                                רוצה לדעת עליי עוד?
                            </a>
                        </p>

                    </article>
                </Fade>
            </div> 
        <div className="saf"/>
        </>
    )
}
