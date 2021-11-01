import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Testi_slider() {
    return (
        <>
            <div className="empty-blue"/>
            <div className="bf"/>       
            <h3 style={{textAlign:'center'}}>לקוחות אמרו עליי</h3>


            <div className="carousel">
                <Carousel width={700} axis={'vertical'} showStatus={false}>
                    <div>
                        <h5>
                            "אני רוצה להמליץ בחום על יוני המתכנתת, מומחית לוורדפרס. 
                            <br/>
                            ביקשתי לעשות שיפוץ לשני אתרים שלי. היא הבינה בדיוק מה שרציתי - קיבלתי ייעוץ ללא עלות, סופר מקצועית, מהירה, מומחית לקוד פתוח, פתרה לי כמה באגים וגם סידרה לי כמה עיצובים שהפריעו לי על הדרך והכל במחיר הוגן.
                            <br/>
                            היה לי ממש כיף לעבוד מולה, מומלץ מאוד 👍"
                        </h5>
                        <p style={{fontWeight:'bold'}}>בני, zipper bags </p>
                        <a href="https://he.zipperbags.online/" rel="noreferrer" target="_blank" className="site-link">לאתר של בני >> </a>
                        <br/>
                        <br/>
                        <br/>
                    </div>

                    <div>
                        <h5>
                            "יוני היקרה
                            תודה רבה על בנית האתר לספר שלי ״זרה ביפן״.
                            <br/>
                            אהבתי את העבודה שלך את המקצועיות והיכולת להתאים את עצמך אלי. 
                            <br/>
                            היה לי כייף לעבוד איתך ואני ממליצה בחום להשתמש בשרותיך."
                        </h5>
                        <p style={{fontWeight:'bold'}}>סוזי אוקובו, בעלת עסק לטיולים בטוקיו ומחברת הספר זרה ביפן</p>
                        <a href="https://zarabeyapan.com/" rel="noreferrer" target="_blank" className="site-link">לאתר של סוזי >> </a>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>

                    <div>
                        <h5>
                        "היי יוני,
                        תודה על אתר מהמם!
                        <br/>
                        תודה על הסבלנות, האכפתיות הזמינות והמקצועיות שלך לאורך התהליך.
                        <br/>
                        אין לי ספק שאמליץ עלייך ואמשיך להיות לקוחה שלך גם באתרים הבאים שלי :)
                        <br/>
                        בהערכה רבה, בינדר ליאת"
                        </h5>
                        <p style={{fontWeight:'bold'}}>ליאת בינדר, אלמנטרי ביטוח</p>
                        <a href="https://wayin.co.il/" rel="noreferrer" target="_blank" className="site-link">לאתר של ליאת >> </a>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>

                    <div>
                        <h5>
                            "ממליצה מאוד על יוני המקסימה. מקצועית, מהירה, מחיר טוב."
                        </h5>
                        <p style={{fontWeight:'bold'}}>שרון, sharon perfumes </p>
                        <a href="https://sharonperfumes.com/" rel="noreferrer" target="_blank" className="site-link">לאתר של שרון >> </a>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>

                    <div>
                        <h5>
                            "אני עובדת עם יוני כבר כמה חודשים.
                            <br/>
                            היא אחראית. יצירתית. מקצועית. עומדת בזמנים
                            והעבודה מולה פשוט תענוג :)"
                        </h5>
                        <p style={{fontWeight:'bold'}}>מורין פרידמן, מרכז השל לקיימות</p>
                        <a href="https://heschel.org.il/" rel="noreferrer" target="_blank" className="site-link">לאתר של מורין >> </a>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>

                    <div>
                        <h5>
                            "יוני בנתה לי אתר נהדר של יעוץ ארגוני.
                            <br/>
                            ממליץ עליה בחום. מקצועית, חדה, עובדת נקי ועדכני.
                            <br/>
                            התקשורת איתה ברורה והיא מבינה את הצרכים והציפיות .מבטיחה ומקיימת. 👌"
                        </h5>
                        <p style={{fontWeight:'bold'}}>יריב לבלנג, ייעוץ ארגוני ופיתוח מנהלים</p>
                        <a href="https://yarivconsultant.com/" rel="noreferrer" target="_blank" className="site-link">לאתר של יריב >> </a>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </Carousel>
            </div>  
        </>        
    )
}

{/* <div>
<h5>
    "אני רוצה להמליץ בחום על יוני המתכנתת, מומחית לוורדפרס. 
    <br/>
    ביקשתי לעשות שיפוץ לשני אתרים שלי. היא הבינה בדיוק מה שרציתי - קיבלתי ייעוץ ללא עלות, סופר מקצועית, מהירה, מומחית לקוד פתוח, פתרה לי כמה באגים וגם סידרה לי כמה עיצובים שהפריעו לי על הדרך והכל במחיר הוגן.
    <br/>
    היה לי ממש כיף לעבוד מולה, מומלץ מאוד 👍"
</h5>
<p style={{fontWeight:'bold'}}>בני, zipper bags </p>
<a href="https://he.zipperbags.online/" rel="noreferrer" target="_blank" className="site-link">לאתר של בני >> </a>
<br/>
<br/>
<br/>
</div>

<div>
<h5>
    "יוני היקרה
    תודה רבה על בנית האתר לספר שלי ״זרה ביפן״.
    <br/>
    אהבתי את העבודה שלך את המקצועיות והיכולת להתאים את עצמך אלי. 
    <br/>
    היה לי כייף לעבוד איתך ואני ממליצה בחום להשתמש בשרותיך."
</h5>
<a href="https://zarabeyapan.com/" rel="noreferrer" target="_blank" className="site-link">לאתר של סוזי >> </a>
<p style={{fontWeight:'bold'}}>סוזי, zara beyapan </p>
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
<h5>
"היי יוני,
תודה על אתר מהמם!
<br/>
תודה על הסבלנות, האכפתיות הזמינות והמקצועיות שלך לאורך התהליך.
<br/>
אין לי ספק שאמליץ עלייך ואמשיך להיות לקוחה שלך גם באתרים הבאים שלי :)
<br/>
בהערכה רבה, בינדר ליאת"

</h5>
<a href="https://wayin.co.il/" rel="noreferrer" target="_blank" className="site-link">לאתר של ליאת >> </a>
<p style={{fontWeight:'bold'}}>ליאת, אלמנטרי ביטוח</p>
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
<h5>
    "ממליצה מאוד על יוני המקסימה. מקצועית, מהירה, מחיר טוב."
</h5>
<a href="https://sharonperfumes.com/" rel="noreferrer" target="_blank" className="site-link">לאתר של שרון >> </a>
<p style={{fontWeight:'bold'}}>שרון, sharon perfumes </p>
</div> */}
