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
  תמיד אהבתי לפתור פאזלים, וגם להתעסק במילים וצבעים. אני מתה על לעשות סדר בבלגן, לשבץ כל חלק למקום הנכון ואז לשלוף אותו בדיוק בזמן.
</p>
<br/>
<p>
  הקובייה ההונגרית שבלוגו אולי נראית כמו סיוט למי שלא יודע איך לגשת, אבל מי שמכיר את הנוסחה? פותר אותה תיקתק.
</p>
<br/>
<p>
  אני כאן כדי להבין יחד מה העסק שלך באמת צריך, לדייק ולאפיין את הפתרון, ולבנות אתר או מערכת מותאמת שעובדת בשבילך.
</p>
<br></br>
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
