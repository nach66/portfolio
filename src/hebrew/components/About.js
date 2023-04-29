import React from 'react'
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import cube from '../../images/icons/ycube.png'

export default function About() {
    return (
        <>
            <h1 style={{textAlign: 'right', marginRight:'27%'}}>קצת עלי</h1>

            <div className="about">
                    <Roll bottom>
                        <div className="me"/>
                    </Roll>

                    <article className="right centerr">
                        <Fade bottom>
                            <h3>היי, אני יוני.</h3>
                            <p>
                                מפתחת אתרים וכותבת תוכן. אני כאן כדי לעזור לעסק שלך לעבור לגור באינטרנט - בארמון דיגיטלי שיודע להפוך גולש חולף, ללקוח שמשלם.
                            </p>
                            <br/>
                            <p>
                                פתחתי עסק משלי כי אני אוהבת לתכנן את המשימות ביעילות וגמישות ללא בוסים גדולים; לעבוד מהלב עבור אנשים. בזמן שאני מגשימה את חלום העצמאות שלי - כל אתר מקדם בעצמו חלום אחר: בין אם זו חנות שהיא מפעל חייו של הלקוח, ספר שלקוחה כתבה על המסע שלה, או אג'נדות שחשוב לקדם.
                            </p>
                            <br/>
                            <p>לכל אתר יש סיפור, ואני אשמח לעזור לספר את הסיפור שלך באופן מיטבי.</p>
                        </Fade>
                    </article>

                    <article className="left centerr">
                        <Fade bottom>
                            <h3>למה לצאת לדרך דווקא איתי?</h3>
                                <p>
                                אני מציעה פתרון עוטף לבניית האתר: <br/> מיקוד הצרכים באפיון, עיצוב ובנייה מקצועיים, והדרכה לשימוש במערכת האתר בסיום. יש אפשרות לשלב כתיבת תוכן שיווקי ומיקרו קופי, ואף ניהול ותחזוקה של האתר להמשך הדרך.</p>
                                <br/>
                                <p>
                                    העבודה איתי היא קרקע לצמיחה משותפת: גם אני מתמודדת עם קשיים דומים לשלך בעסק, בהתלבטויות איך ולאן לצמוח. אני מכירה אישית את הצורך שלך בנוכחות דיגיטלית, באתר מקצועי שיקנה את הלקוחות. ולכן יודעת לייעץ במה כדאי להתמקד ועל מה לוותר, באיזו שפה וויזואלית לבחור, וכמובן – לתת מחיר הוגן עבור התמורה.
                                </p>
                                <br/>
                                <p>
                                    העסק שלי הוא בוטיק וקטן. בשונה מפסי ייצור תעשייתיים, כאן כל פרויקט הוא עולם ומלואו שמקבל מקסימום תשומת לב. נתכנן יחד את התהליך והיצירה תתבצע מתוך הקשבה, עד לתוצאה המושלמת. והחלק הכי טוב? התוצאה עבורך היא גם תוצאה עבורי: כל אתר הופך להיות אצלי מוצר דגל בחלון הראווה, כך שאשקיע באתר שלך ב 200%.
                                </p>
                        </Fade>
                    </article>                      

                    <Roll bottom>
                        <div className="choose"/>
                    </Roll>
            </div>

            <div className="sec" style={{backgroundColor:'wheat'}}>
                <article className="ycube">
                    <Roll bottom>
                        <div alt="logo" className="logoa"/>
                        {/* <img src={cube} alt="icon"/> */}
                    </Roll>
                </article>

                <Fade bottom>            
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
                            <a href="https://api.whatsapp.com/send?phone=+972556617145" 
                                style={{margin:'10px', color:'var(--lgreen)'}}
                                rel="noopener noreferrer" target="_blank">
                                שנדבר?
                            </a>
                        </p>
                    </article>
                </Fade>
            </div> 

            {/* <div className='empty-white'></div> */}
        </>
    )
}
