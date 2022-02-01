import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import way from '../../images/gif/road/animat-road-trip-color.gif';
import pencil from '../../images/gif/pencil/animat-pencil-color.gif';
import seo from '../../images/gif/seo/animat-search-color.gif';
import manage from '../../images/gif/manage.gif';
import ssl from '../../images/gif/ssl/CYBERSECURITY.gif';
import btn from '../../images/gif/btn/animat-checkmark-color.gif';
import puzzle from '../../images/icons/puzzle.png'

export default class Puzzle extends Component {
    state={
        services: [
                {
                    icon: way,
                    title:"אתך לאורך כל הדרך",
                    text: "ליווי מלא משלב התכנון ועד לעליית האתר. בסיום אדריך אותך באופן אישי לשימוש באתר ובמערכת הניהול."
                },
                {
                    icon:seo,
                    title:"הכנה לקידום ושיווק",
                    text: "הטמעה של Google Analytics  ו -Facebook Pixel , שיפור מהירויות ושימוש בפרוטוקולי אבטחה המועדפים על גוגל."
                },
                {
                    icon:pencil,
                    title:"כתיבת תוכן",
                    text: "אעזור לך למצוא את המילים הכי יפות, שייצגו את העסק בצורה הטובה ביותר, ויתרגמו מבקרים ללקוחות מרוצים."
                },

                {
                    icon:manage,
                    title:"מערכת ניהול תכנים",
                    text: "מוצרים, תמונות, פוסטים - בעזרת מערכת הוורדפרס שעליה נבנה האתר, אפשר לעדכן את התכנים בעצמך, ובקלות. כמובן לאחר הדרכה מפורטת ממני :)"
                },
                {
                    icon:ssl,
                    title:"בטיחות מעל הכול!",
                    text: "עמידה בתקני האבטחה הגבוהים ביותר, כולל סליקה מאובטחת, והתקנת תעודת SSL ."
                },  
                {
                    icon:btn,
                    title:"קישורים מהירים",
                    text: "קישורים לסושיאל, כפתור חיוג ישיר, הפניה לשיחת ווטאספ, טפסי לידים מתקדמים. הכול על מנת להקל על הלקוח שלך למצוא אותך במהירות ויעילות.",
                },
            ]
        }
    render () {
        return (
            <>
                <div className="services" style={{ paddingTop: '0px'}}>
                    <img alt="icon" src={puzzle} className="puzzle"/>
                </div>

                <div className="services" style={{ paddingTop: '30px'}}>
                <br/>
                    <h1>הרכיבים בפאזל – מה בניית אתר כוללת</h1>
                    <div className="services-center">
                        {this.state.services.map(
                            (item, index) => {return (
                                <article className="block-services" key={index}>
                                    <Fade bottom>
                                        <img src={item.icon} className="gif" alt="web img"/>
                                        <h2>{item.title}</h2>
                                        <h6>{item.text}</h6>
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
