import React from 'react'
import Fade from 'react-reveal/Fade';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Testi_slider extends React.Component {
        constructor(props) {
            super(props);
            this.submitForm = this.submitForm.bind(this);
            this.state = {
                status: ""
            };
        }
    
    render() {
        const { status } = this.state;
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
                        {/* <a href="https://he.zipperbags.online/" target="_blank" className="site-link">לאתר של בני >> </a> */}
                        <p style={{fontWeight:'bold'}}>בני, zipper bags </p>
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
                        {/* <a href="https://zarabeyapan.com/" target="_blank" className="site-link">לאתר של סוזי >> </a> */}
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
                        {/* <a href="https://wayin.co.il/" target="_blank" className="site-link">לאתר של ליאת >> </a> */}
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
                        {/* <a href="https://sharonperfumes.com/" target="_blank" className="site-link">לאתר של שרון >> </a> */}
                        <p style={{fontWeight:'bold'}}>שרון, sharon perfumes </p>
                    </div>
                </Carousel>
                </div>

                <div className="hori-form">
                        <form method="POST"
                            className="cform form-inline"
                            onSubmit={this.submitForm}
                            action="https://formspree.io/f/xeqpljye">
                                <article className="h2-hori">
                                    <h2>צרו קשר</h2>
                                </article>
                                <article>
                                    <input
                                        type="text"
                                        name="Name"
                                        className="form-control"
                                        placeholder="שם:"/>
                                </article>
                                <article>
                                    <input
                                        type="phone"
                                        name="phone"
                                        className="form-control"
                                        placeholder="מספר טלפון:"/>
                                </article>
                                <article>
                                    <textarea
                                        name="message"
                                        className="form-control long"
                                        rows="1"
                                        placeholder="רציתי לשאול.."/>
                                </article>
                                <article className="submit-hori">
                                    {status === "SUCCESS" ? <h2>תודה!</h2> : <button type="submit" className="s submit">שליחה</button>}
                                    {status === "ERROR" && <p>אוי! קרתה תקלה, אנא נסו שוב.</p>}                                    
                                </article>                          
                            </form>
                </div>

                <div className="af"/>       
            
            </>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}