import React from 'react'
import beach from '../../images/product/beach.png'
import fix from '../../images/product/fix.png'
import p1 from '../../images/product/product (1).png'
import p2 from '../../images/product/product (2).png'
import p3 from '../../images/product/product (3).png'
import p4 from '../../images/product/product (4).png'
import p5 from '../../images/product/product (5).png'
import p6 from '../../images/product/product (6).png'
import p7 from '../../images/product/product (7).png'
import p8 from '../../images/product/product (8).png'
import p9 from '../../images/product/product (9).png'
import p10 from '../../images/product/product (10).png'
import p11 from '../../images/product/product (11).png'
import p12 from '../../images/product/product (12).png'
import p13 from '../../images/product/product (13).png'
import p15 from '../../images/product/product (15).png'
import p16 from '../../images/product/product (16).png'
import p17 from '../../images/product/product (17).png'
import p18 from '../../images/product/product (18).png'
import p19 from '../../images/product/product (19).png'

import Fade from 'react-reveal/Fade';
export default function HowToProduct () {
    return (
        <>
                <Fade bottom>
                    <div className="post-cotain">
                        <h2>איך להוסיף מוצר לחנות ווקומרס?</h2>

                        <div style={{textAlign:'center'}} >
                            <img className='post-img' src={fix} alt="fix the site icon"/>
                        </div>

                        <p>
                            במדריך הבא נעבור יחד על תהליך העלאת מוצר לחנות, שנבנתה עם התוסף Woocommerce במערכת הניהול של וורדפרס. העלאת מוצרים לחנות ווקומרס אינה פעולה מורכבת ולא צריך להיות מתכנת או מדען טילים עבורה. רק לעקוב אחר מספר שלבים בעזרת צילומי המסך, ולא לשכוח לשמור את השינויים.                        </p>
                        <p>
                            זה נראה ארוך עכשיו, אבל תוך מוצר או או שניים כבר זוכרים בעל פה את השלבים 😊 
                        </p>
                        <p>
                            מתחילים!
                        </p>
                        <ol>
                            <li>
                                קודם כל נתחבר לפאנל הניהול של האתר, ונסתכל על סרגל הצד השחור של לוח הבקרה. נחפש את הלשונית 'מוצרים' ונלחץ על 'הוסף חדש'.
                            </li>
                            <img className='post-screenshot' src={p1} alt="screenshot-guide"/>
                            <li>
                                אם נרצה לערוך מוצר קיים, נלך למוצרים > כל המוצרים >  ונלחץ על 'עריכה' מתחת למוצר הרצויי.
                            </li>
                            <li>
                                <strong>נכתוב את שם המוצר. </strong>
                                    לאחר שנלחץ על 'עדכון', המוצר יופיע בחנות והלינק אליו יכיל את שם המוצר. 
                                    <br/>
                                    אפשר לערוך את הקישור בלחיצה על 'עריכה', אם נרצה להפוך אותו לקצר ויפה יותר.                            </li>                           
                            <img className='post-screenshot' src={p2} alt="screenshot-guide"/>
                            <li>
                                <strong>נבחר את קטגוריית המוצר. </strong> זה נמצא מתחת לכפתור ה'עדכון/שמירה', בטור הצר שבצד.
                                    כך נשייך את המוצר לעמוד הקטגוריה שלו בחנות. 
                                    <br/>
                                    בדוגמה שלנו, המוצר יופיע בעמוד של כל התכשיטים, וגם בעמוד של הטבעות.                            </li>                            
                            <img className='post-screenshot-small' src={p3} alt="screenshot-guide"/>
                            <li>
                                <strong>נעלה את תמונות המוצר. </strong>מתחת לבחירת הקטגוריה, עדיין בטור הצר שבצד.
                                <br/>
                                בלחיצה על 'הצמד תמונת מוצר' נבחר את התמונה הראשית. אם יש עוד תמונות, נעלה אותן לגלריית המוצר.
                            </li>
                            <img className='post-screenshot-small' src={p4} alt="screenshot-guide"/>
                            <li>
                                אפשר להעלות תמונה, או לבחור מהתמונות שכבר בספריית האתר בלחיצה על 'ספריית מדיה'. 
                                <br/>
                                נשמור את התמונה שבחרנו, בלחיצה על 'הצמד תמונת מוצר' / 'הוסף לגלריה' בהתאמה.
                            </li>
                            <img className='post-screenshot' src={p5} alt="screenshot-guide"/>
                            <li>
                                <strong>נכתוב תיאור למוצר. </strong>לשם כך נחזור לאזור התוכן המרכזי של העמוד, סיימנו עם סרגל הצד. 
                                <br/>
                                יש שני שדות לתיאור המוצר. הראשון מתחת לשם המוצר, והשני 'תיאור קצר' שמופיע יותר למטה. מה ההבדל ביניהם? 
                                <br/>
                                מבחינת נראות: התיאור הראשון יופיע בתחתית עמוד המוצר, והתיאור הקצר יופיע לצד התמונה. 
                                <br/>
                                מבחינה טכנית: התיאור הקצר הוא זה שיופיע כאשר משתפים את המוצר.                                 <br/>
                                לכן נרצה שבתיאור הקצר יהיה טקסט קצר ומוכר. בתיאור הארוך נפרט יותר באריכות על טיב המוצר ויתרונותיו. 
                                <br/>
                                בשניהם חשוב לשלב ביטויי מפתח רלוונטיים עבור קידום אורגני.
                            </li>
                            <img className='post-screenshot' src={p6} alt="screenshot-guide"/>
                            <img className='post-screenshot' src={p7} alt="screenshot-guide"/>
                            <p>איך זה יראה - </p>
                            <img className='post-screenshot' src={p8} alt="screenshot-guide"/>

                            <li>
                                <strong>נבחר את סוג המוצר. </strong>
                                <br/>
                                כרגע נתייחס למוצר רגיל, ובהמשך אפרט לגבי מוצרים עם וריאציות. סימון כמוצר וירטואלי יבטל את שיטות המשלוח, וסימון להורדה יפתח אפשרות להעלות את הקובץ להורדה, אותו הלקוח יקבל בעת הרכישה.                            </li>                            
                            <img className='post-screenshot' src={p9} alt="screenshot-guide"/>
                            <li>
                                לשונית <strong>כללי - </strong>קליל. נזין את מחיר המוצר, ומחיר מבצע אם יש.
                                <br/>
                            </li> 
                            <img className='post-screenshot' src={p10} alt="screenshot-guide"/>
                            <li>
                                לשונית <strong>מלאי - </strong>
                                <br/>
                                <ul>
                                    <li>
                                        'מק"ט': תעודת הזהות של המוצר, מספר סידורי ייחודי למוצר. חשוב - לא להשאיר ריק! 
                                    </li>
                                    <li>
                                        'אפשר ניהול מלאי ברמת המוצר': נסמן כאן v אם מדובר במוצר שאינו אינסופי. לדוגמה, קובץ להורדה הוא מוצר שלא יגמר מהמלאי. 20 טבעות – יגמרו.                                    </li>                                    
                                    <li>
                                        'כמות במלאי': נזין את מספר המוצרים שיש במלאי. 
                                    </li>                                    
                                    <li>
                                        'לאפשר הזמנה מראש': האם נהיה מעוניינים למכור מוצר שלא נמצא כרגע במלאי? נעשה זאת אם אפשר בכל זאת לספק את המוצר בחלון הזמנים של מדיניות האספקה, או שנודיע על העיכוב ללקוח.                                     </li>
                                    <li>
                                        'ערך סף של מלאי מועט': נגדיר למערכת מאיזו כמות להתריע שהמוצר הולך להיגמר.                                    </li>                                                                     
                                </ul>
                            </li> 
                            <img className='post-screenshot' src={p11} alt="screenshot-guide"/>
                            <li>
                                לשונית <strong>משלוח - </strong>
                                <br/>
                                אפשר להגדיר כאן משקל וממדים של החבילה, אם זה רלוונטי. 
                                את שיטות ומחירי המשלוח מגדירים מראש מאחורי הקלעים. לרוב, מי שבנה את האתר יעשה זאת. כך שניתן להתעלם מהלשונית הזו :)
                            </li> 
                            <img className='post-screenshot' src={p12} alt="screenshot-guide"/>
                            <li>
                                לשונית <strong>מוצרים מקושרים - </strong>
                                <br/>
                                    המלצות למוצרים שיופיעו בתחתית עמוד המוצר. נתחיל להקליד שם מוצר, והמערכת תציע להשלים למוצר מתאים מבין המוצרים הקיימים. אם עוד לא העליתם את המוצר המשלים אפשר לשמור כרגע בלעדיו, ולחזור לערוך בעתיד.                                <br/>
                                <ul>
                                <li>
                                    'מוצרים משודרגים': מצרים מומלצים הדומים למוצר הנוכחי אך איכותיים או יקרים יותר. 
                                </li>
                                <li>
                                    'מוצרים משלימים': משלימים את המוצר. למשל חומר לניקויי כסף, כמוצר משלים לטבעת מכסף.
                                </li>
                                </ul>
                            </li>
                            <img className='post-screenshot' src={p13} alt="screenshot-guide"/>
                        </ol>
                        <h6><strong>
                            אם המוצר שלנו הוא רגיל וללא וריאציות, סיימנו בזאת! לשמירה נלחץ על 'עדכון'.
                            </strong>
                        </h6>

                        <br/>
                        <br/>
                        <h2>מוצר עם וריאציות</h2>
                        <p>
                            <strong>מתי נשתמש במוצר עם וריאציות? </strong>
                        </p>
                        <p>
                            אם יש לנו חולצה מאותו דגם שאפשר לרכוש במידות שונות או צבעים שונים, אין סיבה שנפציץ את עמוד החנות בהמון חולצות דומות כאשר אחת כחולה במידה s, אחרת ירוקה במידה m, וכו'. עם זאת, חשוב שהלקוח יבחר את הדגם הנכון לו. כאן נכנס לתמונה מוצר עם וריאציות. לכל וריאציה יש מק"ט ומחיר שונה. חשוב גם לנהל מלאי נפרד לכל וריאציה – שהרי לא יעזור ללקוח שנשארו חולצות s, כשהוא במידה xl.
                        </p>
                        <ol>
                            <li>
                                לשונית <strong>תכונות - </strong>
                                <br/>
                                <ul>
                                    <li>
                                        בשדה 'נתוני המוצר' נשנה ל'מוצר עם וריאציות'.
                                    </li>
                                    <li>
                                        על יד 'תכונות מוצר מותאמות אישית' נלחץ 'הוספה'.
                                    </li>
                                    <li>
                                        נמלא את שם הווריאציה.
                                    </li>
                                    <li>
                                        נזין את הערכים = האפשרויות השונות, עם קו מפריד ביניהם. במקרה שלנו מידות 1, 2, 3 אלו המידות בהן אפשר להזמין את הטבעת.
                                    </li>
                                    <li>
                                        נסמן בv  את 'מוצג בעמוד המוצר' וגם את 'נועד עבור וריאציות'. נלחץ 'שמור תכונות'.
                                    </li>
                                </ul>
                            </li> 
                            <img className='post-screenshot' src={p15} alt="screenshot-guide"/>

                            <li>
                                לשונית <strong>וריאציות - </strong>
                                <br/>
                                <p>
                                    נבחר 'הוסף וריאציות מכל התכונות' ונלחץ על 'בצע'.
                                </p>
                                <img className='post-screenshot' src={p16} alt="screenshot-guide"/>
                                <p>
                                    'ערכי ברירת מחדל לטופס': עדיף להשאיר ללא ברירת מחדל, כך הלקוח לא יוכל להזמין בטעות בלי לבחור את הדגם הנכון עבורו.
                                </p>
                            </li> 
                            <img className='post-screenshot' src={p17} alt="screenshot-guide"/>

                            <li>
                                    נעבור להגדרה בתוך הווריאציה. יש לחזור על פעולות אלו עבור כל וריאציה: 
                                    <br/>
                                    <p>
                                        נעלה תמונה בלחיצה על האייקון של התמונה.
                                    </p>
                                    <img className='post-screenshot' src={p18} alt="screenshot-guide"/>
                                    <p>
                                        נמלא את השדות הבאים כפי שעשינו במוצר הרגיל. 
                                        <br/>
                                        הכי חשוב להזין מחיר, לנהל את המלאי ולהזין מק"ט שונה לכל וריאציה. 
                                        <br/>
                                        לא חייבים למלא את כל שאר השדות, אם הם זהים עבור הוריאציות השונות.
                                    </p>
                                <img className='post-screenshot' src={p19} alt="screenshot-guide"/>
                            </li>

                        </ol>
                        
                        <h6><strong>
                            בסיום נלחץ שוב על 'עדכון' כדי לשמור את השינויים.
                            </strong>
                        </h6>
                        <br/>
                        <br/>

                        <div style={{textAlign:'center'}} >
                            <h4>זהו.
                                <br/>
                                עכשיו אפשר לצאת לחופשה, ולתת לחנות הוירטואלית למכור במקומך...</h4>
                            <img className='post-img' src={beach} alt="fix the site icon"/>
                        </div>

                        <br/>
                        <br/>
                        <h5>אין לך כוח למחשבים האלה? הסתבכת קצת? אני כאן 😊 </h5>
                    </div>
                </Fade>
        </>
    )
}
