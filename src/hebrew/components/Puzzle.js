import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import way from '../../images/gif/road/animat-road-trip-color.gif';
import design from '../../images/gif/pencil/animat-pencil-color.gif';
import manage from '../../images/gif/manage.gif';
import speed from '../../images/gif/ssl/CYBERSECURITY.gif';
import btn from '../../images/gif/btn/animat-checkmark-color.gif';
import puzzle from '../../images/icons/puzzle.png'

export default class Puzzle extends Component {
    state = {
        services: [
            {
                icon: way,
                title: "אתך לאורך כל הדרך",
                text: "ליווי משלב הרעיון והאפיון, דרך הבנייה והדיוקים, ועד הדרכה אישית לניהול האתר בסיום."
            },
            {
                icon: btn,
                title: "פיתוח מותאם בקוד",
                text: "כשהתוספים הקיימים לא מתאימים בדיוק לצורך של העסק, אפשר לפתח בקוד את החלקים החסרים ולבנות מערכת מותאמת אישית."
            },
            {
                icon: manage,
                title: "WordPress נוח לניהול",
                text: "בנייה על בסיס מערכת ניהול שקל לעדכן לבד: עמודים, מוצרים, תמונות, פוסטים ותכנים שוטפים."
            },
            {
                icon: design,
                title: "עיצוב, תשתיות ואבטחה",
                text: "עיצוב רספונסיבי למובייל ולמסכים שונים, חיבור דומיין, העלאה לשרת והתקנת SSL לאתר מאובטח."
            },
            {
                icon: speed,
                title: "קידום, מהירות ומדידה",
                text: "הכנת תשתית לקידום ושיווק: שיפור מהירות, חיבור Google Analytics, Pixel וכלים בסיסיים למדידה."
            },
        ]
    };

    render () {
        return (
            <>
                <div
                    className="services"
                    style={{ paddingTop: '0px'}}
                >
                    <img
                        alt=""
                        src={puzzle}
                        className="puzzle"
                    />
                </div>

                <div
                    className="services"
                    style={{ paddingTop: '30px'}}
                >
                    <br/>

                    <h2>
                        הרכיבים בפאזל – מה בניית אתר כוללת
                    </h2>

                    <div className="services-center">
                        {this.state.services.map(
                            (item, index) => {
                                return (
                                    <article
                                        className="block-services"
                                        key={index}
                                    >
                                        <Fade bottom>
                                            <img
                                                src={item.icon}
                                                className="gif"
                                                alt=""
                                            />

                                            <h3>{item.title}</h3>

                                            <p>{item.text}</p>
                                        </Fade>
                                    </article>
                                )
                            }
                        )}
                    </div>
                </div>
            </>
        )
    }
}