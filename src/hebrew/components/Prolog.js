import React from 'react'
import Fade from 'react-reveal/Fade';

export default function Prolog() {
    return (
        <div className="prolog">
<Fade bottom>
    <h6>
        אם האתר שלך צריך יותר מ״רק להיות יפה״, הגעת למקום הנכון.
        <br/>
        אני מפתחת מערכות מידע, פורטלים, פאנלים לניהול תהליכים, אוטומציות, חיבורי API ופיצ׳רים מורכבים בהתאמה אישית מעל WordPress.
    </h6>

    <h6>
        היתרון בפיתוח מותאם מעל WordPress הוא שלא צריך לבחור בין מערכת נוחה לניהול לבין פתרון שבאמת מתאים לתהליך העבודה שלך ✨
    </h6>

    <h6>
        את הבסיס והעיצוב אפשר לבנות במהירות עם הכלים הקיימים של WordPress, ואת מה שלא קיים לפתח במיוחד בקוד, כך שמקבלים מערכת מדויקת בלי לבנות הכול מאפס.
    </h6>
</Fade>

<div className="pro-btn-wrap">
    <a href="/systems">
        <button className="submit pro-btn">
            מערכות שפיתחתי &gt;&gt;
        </button>
    </a>

    <a href="/portfolio">
        <button className="submit pro-btn">
            תיק עבודות &gt;&gt;
        </button>
    </a>
</div>
        </div>
    )
}