import React, { Component } from 'react'
import Reco from "./Reco";
import a from '../images/reco/cally.jpeg'
import b from '../images/reco/sarr.jpeg'
import c from '../images/reco/meni.jpg'
import d from '../images/reco/cold.jpg'
import {FaStar, FaStarHalfAlt} from 'react-icons/fa';

export default class RecoList extends Component {
        state={
            reco: [
                {
                    icon:a,
                    name:"קאלי",
                    description:"היא באמת לוחשת לכלבים! מאז שפטי הייתה אצלנו, קאלי האהובה שלנו לא מפסיקה לדבר. אנחנו שמחים שהיא מצאה את הקול הייחודי שלה ולאחרונה אף התחילה ללמוד צרפתית. היא כלבה מאוד עסוקה בימים אלה.",
                    stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
                },
                {
                    icon:b,
                    name:"סארוול",
                    description:"הבעלים שלי מעולם לא הבינו אותי כמו שצריך. כשפטי הגיעה, הרגשתי סופסוף שאני יכולה להיות מי שאני באמת. ארצה לציין גם שפטי מעולם לא דיווחה על הגופות שנעלמו באותו לילה. פשוט מסרו אותי לאימוץ אחר כך.",
                    stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
                },
                {
                    icon:d,
                    name:"גור",
                    description:"הייתי מאוד קטן, ופטי הצילה אותי מלהיות קטן.",
                    stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
                },
                {
                    icon:c,
                    name:"מני האפרוח הגבר",
                    description:"לא יודע. אני לא זוכר.",
                    stars: [<FaStarHalfAlt/>, <FaStar/>],
                }
            ]
        }
        render () {
            return (
                <section className="recolist">
                    <h1>המלצות לבביות</h1>
                    <div className="cats"/>
                    <div className="recolist-center">
                        {this.state.reco.map(reco => {
                            return <Reco key={reco.id} reco={reco}/>;
                        })}
                    </div>
                </section>
            );
        }
}
