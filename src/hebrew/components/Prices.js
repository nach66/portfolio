import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import responsive from '../../images/gif/responsive/animat-responsive-color.gif';
import design from '../../images/gif/design/animat-customize-color.gif';
import way from '../../images/gif/road/animat-road-trip-color.gif';
import speed from '../../images/gif/speed/animat-rocket-color.gif';
import btn from '../../images/gif/btn/animat-checkmark-color.gif';
import seo from '../../images/gif/seo/animat-search-color.gif';
import Program from "./Program";
import DividerWithText from './DividerWithText';

export default class Include extends Component {
    state={
        services: [
                {
                    icon: way,
                    text: "ליווי מלא: משלב התכנון ועד לעליית האתר, הדרכה לתפעול האתר בסיום הבניה."
                },
                {
                    icon:design,
                    text: "ניהול תשתיות: חיבור הdomain, העלאת האתר לשרת והתקנת SSL - רשיון HTTPS לאבטחה."
                },
                {
                    icon:responsive,
                    text:"עיצוב רספונסיבי: התאמה למובייל ולגדלי מסכים שונים, מאחר ומרבית התנועה באינטרנט כיום היא דרך."
                },
                {
                    icon:speed,
                    text: "טכנולוגיות טעינה מתקדמות, כיווץ קבצים ושימוש בזיכרון מטמון (chash) לשיפור מהירות האתר.",
                },
                {
                    icon:seo,
                    text: "קידום: הכנת תשתית לקידום האתר, הטמעה של Google Analytics, Facebook Pixel."
                },
                {
                    icon:btn,
                    text: "אחריות: תמיכה בבעיות תפעול ואחריות על תקלות ובאגים למשך 3 חודשים."
                },
            ],

        programs: [
                    {
                        title:"בניית דף נחיתה - אתר בעמוד אחד",
                        list: [
                            'עיצוב העמוד עם תוכן שיווקי וכפתורי הנעה לפעולה',
                            'טופס לידים מתקדם לקבלת פניות מהאתר',
                            'התאמה לכל גדלי המסכים',
                            'מערכת לניהול תוכן',
                            'שעת הדרכה על מערכת האתר',
                        ],
                        price:"החל מ- ₪1,800"
                    },
                    {
                        title:"בניית אתר תדמית מקצועי",
                        list: [
                            'כל מה שכלול בדף נחיתה, ובנוסף –',
                            'אפיון המבנה, העיצוב וחווית המשתמש בהתאמה למותג',
                            "5 עמודי תוכן (אודות, שירותים, צור קשר וכו')",
                            'תפריט ניווט מתקדם ומעוצב',
                            'שלוש שעות הדרכה פרטנית על מערכת האתר',
                        ],
                        price:"החל מ - ₪4,500"
                    },
                    {
                        title:"בניית חנות וירטואלית ווקומרס",
                        list: [
                            'חנות מעוצבת לחוויית קניה שמשאירה טעם של עוד',
                            'מערכת לעדכון, הוספה והסרה של מוצרים',
                            'חיבור לסליקת אשראי ולהפקת דוחות',
                            'כולל העלאת 100 מוצרים',
                            'מאמרים ללא הגבלה'                          
                        ],
                        price:"החל מ - ₪9,000"
                    },
                    {
                        title:"שדרוג אתר קיים",
                        list: [
                            "הוספת עמודים או ווידג'טים",
                            'שינוי עיצוב וסגנון',
                            'העלאת תכנים ותמונות'
                        ],
                        price:"תמחור לפי בנק שעות"
                    },
                    {
                        title:"תחזוקת אתר",
                        list: [
                            'תמיכה שוטפת באתר',
                            'עדכון תוספים',
                            'טיפול בתקלות',
                            'העלאת תכנים ותמונות'
                        ],
                        price:"החל מ-400 ₪ לחודש"
                    },
                    {
                        title:"כתיבת תוכן",
                        list: [
                            'כתיבת אודות ושירותים',
                            'כתיבת מאמרי seo',
                            'כתיבת דפי נחיתה',
                            'מיקרו קופי',
                            'חבילת תוכן לאתר (אודות, 4 עמודים, 5 מאמרים, מיקרו קופי)',
                        ],
                        price:"תמחור לפי מאמר בודד או חבילת תוכן"
                    }
                ]
            }

    render () {
        return (
            <>
                <div className="services">
                    <br/>
                    <h1>מחירון בניית אתרים</h1>
                    <h6 className="p-icon">כל האתרים נבנים במערכת וורדפרס עם אלמנטור, על גבי תבנית בסיסית המותאמת באופן אישי למותג העסק. הקמת אתר כוללת:</h6>
                    
                    <div className="services-center">
                            {this.state.services.map(
                                (item, index) => {return (
                                    <article className="block-services" key={index}>
                                        <Fade bottom>
                                            <img src={item.icon} className="gif" alt="web img"/>
                                            <h6>{item.text}</h6>
                                        </Fade>
                                    </article>
                                )}
                            )}
                    </div>

                    <div className="empty-blue"/>       
                    <DividerWithText>
                        <h2>אז מה בתפריט?</h2>
                    </DividerWithText>
                    <div className="empty-blue"/>       

                    <div className="services-center">
                        {this.state.programs.map(web => {
                            return <Program key={web.id} reco={web}/>;
                        })}
                    </div>
                </div>
            </>
        )
    }
}
