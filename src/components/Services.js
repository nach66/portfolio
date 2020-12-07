import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react'
import {FaCode,FaExpeditedssl, FaFacebook, FaGlobe, FaHandshake, FaMobileAlt, FaPencilAlt, FaSellcast} from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

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
                    icon:<FaCode/>,
                    text: "אתרי וורדפרס & קוד פתוח"
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
                                    <Fade bottom>
                                    <span className="icon-services">{item.icon}</span>
                                    <p className="p-services">{item.text}</p>
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
