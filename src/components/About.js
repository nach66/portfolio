import React from 'react'
import {FaRegSmile, FaRegSmileWink, FaSmileWink} from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

export default function About() {
    return (
        <>
            {/* <div className="empty-blue"/> */}
            <div className="bf"/>                
            <div className="about">
                    <Roll bottom>
                        <div className="focused"/>
                    </Roll>

                    <article className="right centerr">
                        <Fade bottom>
                            <h3>למה בחרתי לעסוק בבניית אתרים?</h3>
                            <h5>
                            תמיד אהבתי לפתור פאזלים, וגם להתעסק במילים וצבעים.
                            אני אוהבת את איך שנוצרת תמונה מושלמת מכל הפרטים הקטנים. 
                            בניית אתרים היא פאזל מורכב וצבעוני: החל מתכנון המבנה לפי החזון של הלקוח, 
                            דרך הרכבה של הטכנולוגיות החדשניות והמהירות ביותר, 
                            ועד לשיפוצים הקוסמטיים של העיצוב לפרטי פרטים.
                            </h5>
                        </Fade>
                    </article>

                    <article className="left centerr">
                        <Fade bottom>
                            <h3>למה כדאי לכם לצאת לדרך דווקא איתי?</h3>
                            <ul>
                                <li><h5>
                                    מקצועיות - אני בוגרת תואר ראשון במדעי המחשב ובפסיכולוגיה, ובעלת ניסיון בפיתוח אתרים בקוד פתוח ובWordPress.
                                </h5></li>
                                <li>
                                    <h5>
                                    יחס אישי –  העסק שלי הוא בוטיק וצעיר. בניגוד לעסקים שהם פסי ייצור תעשייתיים, כל פרויקט אצלי הוא עולם ומלואו שמקבל את מקסימום תשומת הלב. אני אהיה לצדכם בתהליך ואדאג שהיצירה תתבצע מתוך הקשבה, עד לתוצאה המושלמת.
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
                
            </div>
            <div className="af"/>                
        </>
    )
}
