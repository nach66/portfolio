import React from 'react'
import {FaRegSmile, FaRegSmileWink, FaSmileWink} from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

export default function About() {
    return (
        <>
            <div className="bf"/>
            <div className="about centerr">
                {/* <div className="centerr"> */}

                    <Roll bottom>
                        <div className="focused"/>
                    </Roll>

                    <article className="right">
                        <Fade bottom>
                            <h3>למה בחרתי להתעסק בבניית אתרים?</h3>
                            <h5>
                            תמיד אהבתי לפתור פאזלים, וגם להתעסק במילים וצבעים.
                            אני אוהבת לחשוב ולתקן, עד שנוצרת תמונה מושלמת מכל הפרטים הקטנים. 
                            בניית אתרים היא פאזל מורכב וצבעוני: החל מתכנון המבנה תוך הקשבה לחזון של הלקוח, 
                            דרך הרכבה של טכנולוגיות החדשניות והמהירות ביותר, 
                            ועד לשיפוצים הקוסמטיים של העיצוב לפרטי פרטים.
                            </h5>
                        </Fade>
                    </article>

                    <article className="left">
                        <Fade bottom>
                            <h3>למה לבחור בי לבניית האתר שלכם?</h3>
                            <ul>
                                <li>
                                    <h5>מקצועיות - אני בעלת תואר ראשון במדעי המחשב ובפסיכולוגיה, ובעלת ניסיון בבניית אתרים.</h5>
                                </li>
                                <li>
                                    <h5>
                                    יחס אישי - העסק שלי צעיר, אז יש לי את ההתרגשות להשקיע בכל פרויקט לפחות כאילו הוא ירק בגינה שלי. אני אהיה אתכם בתהליך ואהנה מליצור אתר בעל אופי שיתאים לכם בדיוק, ולא סתם יעבור אצלי על פס ייצור.
                                    </h5>
                                </li>
                                <li>
                                    <h5>
                                        מחירי השקה משתלמים - גם המחירים עוד צעירים ורעננים <FaRegSmileWink style={{fontSize:'1.5rem', color:'wheat'}}/></h5>
                                </li>
                            </ul>
                        </Fade>
                    </article>                      

                    <Roll bottom>
                        <div className="choose"/>
                    </Roll>
                
                {/* </div> */}
            </div>
            <div className="af"/>
        </>
    )
}
