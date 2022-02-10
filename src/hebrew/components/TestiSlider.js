import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';

export default function TestiSlider() {

    return (
        <>
            <h2>לקוחות אמרו עליי</h2>

            <AwesomeSlider
                className="carousel"
                animation="cubeAnimation"
                bullets={true}
                organicArrows={true}
                mobileTouch={true}
                play={false}
            >
                    <div>
                        <h6>
                            "אני רוצה להמליץ בחום על יוני המתכנתת, מומחית לוורדפרס. 
                            ביקשתי לעשות שיפוץ לשני אתרים שלי. היא הבינה בדיוק מה שרציתי - קיבלתי ייעוץ ללא עלות, סופר מקצועית, מהירה, מומחית לקוד פתוח, פתרה לי כמה באגים וגם סידרה לי כמה עיצובים שהפריעו לי על הדרך והכל במחיר הוגן.
                            היה לי ממש כיף לעבוד מולה, מומלץ מאוד 👍"
                        </h6>
                        <h6 style={{fontWeight:'bolder'}}>בני, zipper bags </h6>
                        <a href="https://he.zipperbags.online/" rel="noreferrer" target="_blank" className="site-link">לאתר של בני >> </a>
                    </div>

                    <div>
                        <h6>
                            "יוני היקרה
                            תודה רבה על בנית האתר לספר שלי ״זרה ביפן״.
                            <br/>
                            אהבתי את העבודה שלך את המקצועיות והיכולת להתאים את עצמך אלי. 
                            היה לי כייף לעבוד איתך ואני ממליצה בחום להשתמש בשרותיך."
                        </h6>
                        <h6 style={{fontWeight:'bold'}}>סוזי אוקובו, בעלת עסק לטיולים בטוקיו ומחברת הספר זרה ביפן</h6>
                        <a href="https://zarabeyapan.com/" rel="noreferrer" target="_blank" className="site-link">לאתר של סוזי >> </a>          
                    </div>

                    <div>
                        <h6>
                        "היי יוני,
                        תודה על אתר מהמם!
                        <br/>
                        תודה על הסבלנות, האכפתיות הזמינות והמקצועיות שלך לאורך התהליך.
                        <br/>
                        אין לי ספק שאמליץ עלייך ואמשיך להיות לקוחה שלך גם באתרים הבאים שלי :)
                        <br/>
                        בהערכה רבה, בינדר ליאת"
                        </h6>
                        <h6 style={{fontWeight:'bold'}}>ליאת בינדר, אלמנטרי ביטוח</h6>
                        <a href="https://wayin.co.il/" rel="noreferrer" target="_blank" className="site-link">לאתר של ליאת >> </a>
                    </div>

                    <div>
                        <h6>
                            "יוני בנתה לי אתר נהדר של יעוץ ארגוני.
                            <br/>
                            ממליץ עליה בחום. מקצועית, חדה, עובדת נקי ועדכני.
                            <br/>
                            התקשורת איתה ברורה והיא מבינה את הצרכים והציפיות .מבטיחה ומקיימת. 👌"
                        </h6>
                        <h6 style={{fontWeight:'bold'}}>יריב לבלנג, ייעוץ ארגוני ופיתוח מנהלים</h6>
                        <a href="https://yarivconsultant.com/" rel="noreferrer" target="_blank" className="site-link">לאתר של יריב >> </a>
                    </div>

                    <div>
                        <h6>
                            "יוני הבינה מהר את הבקשות ואת הצרכים של החברה, הציעה רעיונות מעשיים וטובים משל עצמה אבל הקפידה להישאר קרוב לקו שהטווינו, עבדה בזריזות וביעילות ותימחרה באופן הוגן. נשארת בקשר ומגיבה מייד לבקשות שלנו."
                        </h6>
                        <h6 style={{fontWeight:'bold'}}>ניצן, 'אדם בעמלו' </h6>
                        <a href="https://adambeamalo.co.il/" rel="noreferrer" target="_blank" className="site-link">לאתר של ניצן >> </a>
                    </div>

                    <div>
                        <h6>
                            "אני עובדת עם יוני כבר כמה חודשים.
                            <br/>
                            היא אחראית. יצירתית. מקצועית. עומדת בזמנים
                            והעבודה מולה פשוט תענוג :)"
                        </h6>
                        <h6 style={{fontWeight:'bold'}}>מורין פרידמן, מרכז השל לקיימות</h6>
                        <a href="https://heschel.org.il/" rel="noreferrer" target="_blank" className="site-link">לאתר של מורין >> </a>       
                    </div>

                    <div>
                        <h6>
                            יוני סייעה לי בהקמת האתר: קשובה, מנוסה ומקצוענית. 
                            <br/>
                            היה כיף לעבוד איתה וליהנות מהמקצוענות המהירות והעצות הטובות שלה, עד שהתקבל התוצר שהייתי שלם איתו.
                        </h6>
                        <h6 style={{fontWeight:'bold'}}>אייל גונן, מנהיגות מזווית אחרת</h6>
                        <a href="https://www.eyalgonen.com/" rel="noreferrer" target="_blank" className="site-link">לאתר של אייל >> </a>       
                    </div>

                    <div>
                        <h6>
                            "ממליצה מאוד על יוני המקסימה. מקצועית, מהירה, מחיר טוב."
                        </h6>
                        <h6 style={{fontWeight:'bold'}}>שרון, sharon perfumes </h6>
                        <a href="https://sharonperfumes.com/" rel="noreferrer" target="_blank" className="site-link">לאתר של שרון >> </a>
                    </div>
            </AwesomeSlider>
            <br/>
            <br/>
            <br/>
            {/* <div className='empty-white'/> */}

            {/* <div className="carousel">
                <Carousel  
                        axis={'vertical'} 
                        showStatus={false} 
                        dynamicHeight={true}
                        width={700}
                        showArrows={true} 
                        >
                    
                    <div>
                        <h6>
                            "אני רוצה להמליץ בחום על יוני המתכנתת, מומחית לוורדפרס. 
                            <br/>
                            ביקשתי לעשות שיפוץ לשני אתרים שלי. היא הבינה בדיוק מה שרציתי - קיבלתי ייעוץ ללא עלות, סופר מקצועית, מהירה, מומחית לקוד פתוח, פתרה לי כמה באגים וגם סידרה לי כמה עיצובים שהפריעו לי על הדרך והכל במחיר הוגן.
                            היה לי ממש כיף לעבוד מולה, מומלץ מאוד 👍"
                        </h6>
                        <h6 style={{fontWeight:'bold'}}>בני, zipper bags </h6>
                        <a href="https://he.zipperbags.online/" rel="noreferrer" target="_blank" className="site-link">לאתר של בני >> </a>
                        <br/>
                        <br/>
                        <br/>
                    </div>

                    <div>
                        <h6>
                            "יוני היקרה
                            תודה רבה על בנית האתר לספר שלי 'זרה ביפן'.
                            <br/>
                            אהבתי את העבודה שלך את המקצועיות והיכולת להתאים את עצמך אלי. 
                            <br/>
                            היה לי כייף לעבוד איתך ואני ממליצה בחום להשתמש בשרותיך."
                        </h6>
                        <h6 style={{fontWeight:'bold'}}>סוזי אוקובו, בעלת עסק לטיולים בטוקיו ומחברת הספר זרה ביפן</h6>
                        <a href="https://zarabeyapan.com/" rel="noreferrer" target="_blank" className="site-link">לאתר של סוזי >> </a>
                        <br/>           
                        <br/>           
                        <br/>           
                        <br/>           
                        <br/>           
                        <br/>           
                    </div>

                    <div>
                        <h6>
                        "היי יוני,
                        תודה על אתר מהמם!
                        <br/>
                        תודה על הסבלנות, האכפתיות הזמינות והמקצועיות שלך לאורך התהליך.
                        <br/>
                        אין לי ספק שאמליץ עלייך ואמשיך להיות לקוחה שלך גם באתרים הבאים שלי :)
                        <br/>
                        בהערכה רבה, בינדר ליאת"
                        </h6>
                        <h6 style={{fontWeight:'bold'}}>ליאת בינדר, אלמנטרי ביטוח</h6>
                        <a href="https://wayin.co.il/" rel="noreferrer" target="_blank" className="site-link">לאתר של ליאת >> </a>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>

                    <div>
                        <h6>
                            "יוני בנתה לי אתר נהדר של יעוץ ארגוני.
                            <br/>
                            ממליץ עליה בחום. מקצועית, חדה, עובדת נקי ועדכני.
                            <br/>
                            התקשורת איתה ברורה והיא מבינה את הצרכים והציפיות .מבטיחה ומקיימת. 👌"
                        </h6>
                        <h6 style={{fontWeight:'bold'}}>יריב לבלנג, ייעוץ ארגוני ופיתוח מנהלים</h6>
                        <a href="https://yarivconsultant.com/" rel="noreferrer" target="_blank" className="site-link">לאתר של יריב >> </a>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>

                    <div>
                        <h6>
                            "יוני הבינה מהר את הבקשות ואת הצרכים של החברה, הציעה רעיונות מעשיים וטובים משל עצמה אבל הקפידה להישאר קרוב לקו שהטווינו, עבדה בזריזות וביעילות ותימחרה באופן הוגן. נשארת בקשר ומגיבה מייד לבקשות שלנו."
                        </h6>
                        <h6 style={{fontWeight:'bold'}}>ניצן, 'אדם בעמלו' </h6>
                        <a href="https://adambeamalo.co.il/" rel="noreferrer" target="_blank" className="site-link">לאתר של ניצן >> </a>
                        <br/>  
                        <br/>  
                        <br/>  
                        <br/>  
                        <br/>  
                        <br/>  
                        <br/>  
                    </div>

                    <div>
                        <h6>
                            "אני עובדת עם יוני כבר כמה חודשים.
                            <br/>
                            היא אחראית. יצירתית. מקצועית. עומדת בזמנים
                            והעבודה מולה פשוט תענוג :)"
                        </h6>
                        <h6 style={{fontWeight:'bold'}}>מורין פרידמן, מרכז השל לקיימות</h6>
                        <a href="https://heschel.org.il/" rel="noreferrer" target="_blank" className="site-link">לאתר של מורין >> </a>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>     
                        <br/>
                        <br/>        
                    </div>

                    <div>
                        <h6>
                            "ממליצה מאוד על יוני המקסימה. מקצועית, מהירה, מחיר טוב."
                        </h6>
                        <h6 style={{fontWeight:'bold'}}>שרון, sharon perfumes </h6>
                        <a href="https://sharonperfumes.com/" rel="noreferrer" target="_blank" className="site-link">לאתר של שרון >> </a>
                    </div>
                </Carousel>
            </div> */}
        </>        
    )
}