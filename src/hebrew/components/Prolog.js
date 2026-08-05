import React from 'react'
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

export default function Prolog() {
    return (
        <div className="prolog">
                        <Fade bottom>
            <h6>
  אם האתר שלך צריך יותר מ״רק להיות יפה״, הגעת למקום הנכון.
</h6>

<h6>
  היתרון בבניית מערכת מותאמת אישית מעל WordPress הוא שלא צריך לבחור בין נוחות וגמישות,
  <br/>
  לבין פתרון מדויק ✨
</h6>

<h6>
  את העיצוב והבסיס אפשר לבנות מהר ומודרני בעזרת תוספים קיימים שמתאימים לחלק מהצרכים,
  <br/>
  ואז לפתח מאפס רק את מה שבאמת חסר.
</h6>

<h6>
  כך האתר נוח לעדכון עצמאי דרך מערכת הניהול של WordPress אבל לא מוגבל לתבנית מוכנה,
  <br/>
  וזה גם חוסך בזמן, עבודה והוצאות 💪🏻
</h6>
</Fade>

                <div className="pro-btn-wrap">
                    <a href="/portfolio">
                        <button className="submit pro-btn"> לתיק העבודות שלי >></button>
                    </a>
                    {/* <a href="/about">
                        <button className="submit pro-btn">למה לצאת לדרך דווקא איתי?</button>
                    </a> */}
                </div>
        </div>
    )
}
