import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react'
import {Fa500Px, FaAccusoft, FaAdn, FaClock, FaCode,FaExpeditedssl, FaFacebook, FaFastBackward, FaGlobe, FaHandshake, FaHandsHelping, FaMobileAlt, FaPencilAlt, FaSalesforce, FaSave, FaSearch, FaSellcast, FaShippingFast, FaTimes, FaWhatsapp, FaWordpress} from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import way from '../images/icons/road/animat-road-trip-color.gif';
import design from '../images/icons/design/animat-customize-color.gif';
import pencil from '../images/icons/pencil/animat-pencil-color.gif';
import responsive from '../images/icons/responsive/animat-responsive-color.gif';
import seo from '../images/icons/seo/animat-search-color.gif';
import manage from '../images/icons/manage.gif';
import ssl from '../images/icons/ssl/CYBERSECURITY.gif';
import speed from '../images/icons/speed/animat-rocket-color.gif';
import btn from '../images/icons/btn/animat-checkmark-color.gif';

export default class Services extends Component {
    state={
        services: [
                {
                    icon: way,
                    title:"אתכם לאורך כל הדרך",
                    text: "החל משיחת האפיון הראשונה, אהיה שם בשבילכם, כדי לדייק את החלום וליצור אותו לשביעות רצונכם. בסיום תקבלו הדרכה אישית ומפורטת לגבי השימוש באתר ובמערכת הניהול."
                },
                {
                    icon:responsive,
                    title: "רספונסיביות - התאמה למובייל",
                    text:"כיום, מרבית התנועה באינטרנט נעשית דרך הטלפון הנייד. גם האתר שלכם יהיה שם, נגיש לכל גודל מסך, לחוויית שימוש מושלמת עבור קהל הלקוחות המגוון."
                },
                {
                    icon:ssl,
                    title:"אבטחת SSL",
                    text: "בטיחות מעל הכול! סליקה מאובטחת והטמעת SSL, תוך עמידה בתקני האבטחה הגבוהים ביותר."
                },               
                {
                    icon:design,
                    title:"עיצוב UI/UX",
                    text: "חוויית משתמש מודרנית ונגישה. עיצוב אישי שמותאם לעסק ומעביר האווירה המדויקת עבור הלקוח, מגדיל את אחוזי ההמרה והמכירות."
                },
                {
                    icon:btn,
                    title:"קישורים מהירים",
                    text: "קישורים לסושיאל, כפתור חיוג ישיר, הפניה לשיחת ווטאספ, טפסי לידים מתקדמים. הכול על מנת להקל על הלקוח שלכם למצוא אתכם במהירות ויעילות.",
                },
                {
                    icon:manage,
                    title:"מערכת ניהול תכנים",
                    text: "מוצרים, תמונות, פוסטים, הכול תוכלו לעדכן בעצמכם ובקלות. כמובן לאחר שתקבלו הדרכה מפורטת ותרגישו מוכנים לצאת עם האתר לדרך.",
                },
                {
                    icon:seo,
                    title:"הכנת הקרקע לקידום ושיווק",
                    text: "בניית האתר כוללת הטמעה של הפיקסל של פייסבוק וגוגל Analytics לשם ניתוח והכרת התנהגות הגולשים באתר, תגיות מטא ומפת XML.",
                },
                {
                    icon:speed,
                    title:"מהירות",
                    text: "טכנולוגיות טעינה מתקדמות ושימוש בשרתים מהירים.",
                },
                {
                    icon:pencil,
                    title:"כתיבת תוכן",
                    text: "אעזור לכם למצוא את המילים הכי יפות, שייצגו את העסק שלכם בצורה הטובה ביותר, ויתרגמו מבקרים ללקוחות קבועים ומרוצים."
                },
            ]
        }
    render () {
        return (
            <>
                <div className="services">
                    <h1>הרכיבים</h1>
                    <div className="services-center">
                        {this.state.services.map(
                            (item, index) => {return (
                                <article className="block-services" key={index}>
                                    <Fade bottom>
                                        <img src={item.icon} className="gif" alt="web img"/>
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                    </Fade>
                                </article>
                            )}
                        )}
                    </div>
                </div>
            </>
        )
    }
}
