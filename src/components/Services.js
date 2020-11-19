import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react'
import {FaAccusoft,FaExpeditedssl, FaFortAwesomeAlt, FaGrinHearts, FaHandHoldingHeart, FaHeart, FaKissWinkHeart, FaMobileAlt, FaPencilAlt, FaRegKissWinkHeart, FaSellcast, FaShoppingCart, FaWordpress} from 'react-icons/fa';

export default class Services extends Component {
    state={
        services: [
                {
                    icon:<FaSellcast/>,
                    text: "מחירי השקה מטורפים"
                },
                {
                    icon:<FaMobileAlt/>,
                    text: "אתרים רספונסיביים לכל סוגי המסכים"
                },
                {
                    icon:<FaExpeditedssl/>,
                    text: "אבטחת SSL"
                },
                {
                    icon:<FaRegKissWinkHeart/>,
                    text: "עיצוב אישי ומותאם לאופי העסק"
                },
                {
                    icon:<FaWordpress/>,
                    text: "אתרי וורדפרס"
                },
                {
                    icon:<FaShoppingCart/>,
                    text: "חנויות מקוונות"
                },
                {
                    icon:<FaFortAwesomeAlt/>,
                    text: "אתרי תדמית"
                },
                {
                    icon:<FaPencilAlt/>,
                    text: "כתיבת תוכן"
                }
            ]
        }
    render () {
        return (
            <>
                <div className="spikes"/>
                <section className="beach-sec">
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
                </section>       
            </>
        )
    }
}
