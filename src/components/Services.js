import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react'
import {FaAccusoft,FaCloudMoonRain,FaCode,FaCompass,FaExpeditedssl, FaFacebook, FaFortAwesomeAlt, FaGlobe, FaGrinHearts, FaHandHolding, FaHandHoldingHeart, FaHandshake, FaHeart, FaKissWinkHeart, FaMobileAlt, FaPencilAlt, FaRegKissWinkHeart, FaSellcast, FaShoppingCart, FaWordpress} from 'react-icons/fa';

export default class Services extends Component {
    state={
        services: [
                {
                    icon:<FaGlobe/>,
                    text: "דומיין לשנה"
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
                    icon:<FaFacebook/>,
                    text: "קישורים לסושיאל"
                },
                {
                    icon:<FaCode/>,
                    text: "אתרי וורדפרס & קוד פתוח"
                },
                {
                    icon:<FaSellcast/>,
                    text: "מחירי השקה מטורפים"
                },                
                {
                    icon:<FaHandshake/>,
                    text: "עיצוב אישי ומותאם לאופי העסק"
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
                                    <p className="p-services">{item.text}</p>
                                </article>
                            )}
                        )}
                    </div>
                </div>
            </>
        )
    }
}
