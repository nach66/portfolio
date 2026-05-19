import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import DividerWithText from './DividerWithText'

import wordplay1 from '../../images/reco/wordplay1.jpg'
import wordplay2 from '../../images/reco/wordplay2.png'
import wordplay3 from '../../images/reco/wordplay3.jpg'

import anan1 from '../../images/reco/anan1.jpg'
import anan2 from '../../images/reco/anan2.jpg'
import anan3 from '../../images/reco/anan3.jpg'

export default class PortfolioPro extends Component {

    state = {
        systems: [
            {
                title: 'אתר קורסים ללימוד לבגרות',
                intro: 'פלטפורמת לימוד לבגרות עם שיעורים, מבחנים ומשימות בפורמטים שונים: שאלות אמריקאיות, תשובות פתוחות, משחקים והקלטות אודיו.',
                sections: [
                    {
                        image: wordplay1,
                        title: 'פאנל בדיקת מבחנים והגשות',
                        text: 'פאנל מותאם למורים, עם סינון לפי כיתה, קורס, שיעור, תאריך ומשימה ספציפית. המורה יכולה לבדוק תשובות פתוחות והקלטות אודיו, לתת ציון ולהוסיף משוב מילולי.'
                    },
                    {
                        image: wordplay3,
                        title: 'פתיחת משימות לפי תאריכים',
                        text: 'מערכת לניהול זמינות של משימות לפי תאריכים, כולל סימון משימות נעולות או פתוחות והתראה אוטומטית לתלמיד כאשר נפתחה עבורו משימה.'
                    },
                    {
                        image: wordplay2,
                        title: 'מעקב תלמידים בזמן אמת',
                        text: 'פאנל המציג מי פעיל כרגע, מתי כל תלמיד התחבר לאחרונה ומה העמוד האחרון שבו ביקר. מאפשר למורה לקבל תמונת מצב חיה על פעילות התלמידים.'
                    }
                ]
            },

            {
                title: 'מערכת פנימית לצוות ההוראה',
intro: 'ריכוז מידע על תלמידים, כיתות ומדדים פדגוגיים לאורך השנה. המערכת מאפשרת לזהות תלמידים הזקוקים לליווי מיוחד, לעקוב אחר מצב כיתות שונות בבית הספר ולקבל תמונת מצב רחבה דרך פאנל הנהלה מרכזי.',                sections: [
                    {
                        image: anan1,
                        title: 'פאנל כיתה וניתוח אירועים',
                        text: 'טבלאות כיתתיות המרכזות ציונים, הגשות, נוכחות ואירועים שנתיים. המערכת מחשבת ממוצעים ואחוזים ומציגה תמונת מצב פדגוגית של הכיתה.'
                    },
                    {
                        image: anan2,
                        title: 'טבלאות מעקב לאורך השנה',
                        text: 'מעקב מפורט לפי תלמידים ואירועים, כולל הגשות, נוכחות וציונים לאורך השנה. ניתן לייצא דוחות מסודרים לצוות ההוראה ולעבודה מול בתי ספר והורים.'
                    },
                    {
                        image: anan3,
                        title: 'פאנל הנהלה ופילוח תלמידים',
                        text: 'פאנל הנהלה שמרכז נתונים מכל הכיתות, עם חלוקה אוטומטית לתלמידים ירוקים, כתומים ואדומים וסינון מתקדם לפי כיתה, בית ספר, סטטוס טיפול, התאמות ועוד.'
                    }
                ]
            }
        ]
    }

render () {
    return (
        <>
            <Fade bottom>

                <div className="services">
                    <div className="post-cotain portfolio-pro-article">

                        <h1>פיתוח מערכות מותאמות אישית בקוד</h1>

<p>
    בעמוד זה מוצגות מערכות מורכבות שפיתחתי בהתאמה אישית
    עבור מוסדות וצוותים חינוכיים.
    המערכות עצמן סגורות למשתמשים מורשים בלבד,
    ולכן מוצגים כאן פאנלים ותהליכי עבודה נבחרים מתוך המערכת.
</p>

                        {this.state.systems.map((system, index) => (
                            <div className="portfolio-article-system" key={index}>

                                <DividerWithText>
                                    <h2>{system.title}</h2>
                                </DividerWithText>

                                <p>{system.intro}</p>

                                <h3>דוגמאות לפיצ׳רים ומסכים מתוך המערכת</h3>

                                <ol>
                                    {system.sections.map((section, sectionIndex) => (
                                        <React.Fragment key={sectionIndex}>

                                            <li>
                                                <strong>{section.title}</strong>
                                                <br/>
                                                {section.text}
                                            </li>

<img
    className={
        sectionIndex === 1 && index === 0
            ? "post-screenshot portfolio-system-screenshot portfolio-system-screenshot-wide"
            : "post-screenshot portfolio-system-screenshot"
    }
    src={section.image}
    alt={section.title}
/>

                                        </React.Fragment>
                                    ))}
                                </ol>

                            </div>
                        ))}

                    </div>
                </div>
            </Fade>
        </>
    );
}
}