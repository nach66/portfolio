import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react'
import {FaAccusoft,FaCloudMoonRain,FaCode,FaCompass,FaExpeditedssl, FaFacebook, FaFortAwesomeAlt, FaGlobe, FaGrinHearts, FaHandHolding, FaHandHoldingHeart, FaHandshake, FaHeart, FaKissWinkHeart, FaMobileAlt, FaPencilAlt, FaRegKissWinkHeart, FaSellcast, FaShoppingCart, FaWordpress} from 'react-icons/fa';

export default class Services extends Component {
    state={
        services: [
                {
                    icon:<FaSellcast/>,
                    text: "מחירי השקה מטורפים"
                },
                {
                    icon:<FaExpeditedssl/>,
                    text: "אבטחת SSL"
                },
                {
                    icon:<FaPencilAlt/>,
                    text: "כתיבת תוכן"
                },
                {
                    icon:<FaHandshake/>,
                    text: "עיצוב אישי ומותאם לאופי העסק"
                },
                {
                    icon:<FaCode/>,
                    text: "אתרי וורדפרס & קוד פתוח"
                },
                {
                    icon:<FaGlobe/>,
                    text: "דומיין לשנה"
                },
                {
                    icon:<FaFacebook/>,
                    text: "קישורים לסושיאל"
                },
                {
                    icon:<FaMobileAlt/>,
                    text: "אתרים רספונסיביים לכל סוגי המסכים"
                }
            ]
        }
    render () {
        return (
            <>
                <div className="services">
                    <div className="services-center">
                        {this.state.services.map(
                            (item, index) => {return (
                                <article key={index}>
                                    <span className="icon-services">{item.icon}</span>
                                    <h6 className="h6-services">{item.text}</h6>
                                </article>
                            )}
                        )}
                    </div>
                </div>
            </>
        )
    }
}
