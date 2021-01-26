import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import way from '../../images/icons/road/animat-road-trip-color.gif';
import design from '../../images/icons/design/animat-customize-color.gif';
import pencil from '../../images/icons/pencil/animat-pencil-color.gif';
import responsive from '../../images/icons/responsive/animat-responsive-color.gif';
import seo from '../../images/icons/seo/animat-search-color.gif';
import manage from '../../images/icons/manage.gif';
import ssl from '../../images/icons/ssl/CYBERSECURITY.gif';
import speed from '../../images/icons/speed/animat-rocket-color.gif';
import btn from '../../images/icons/btn/animat-checkmark-color.gif';

export default class Puzzle extends Component {
    state={
        services: [
                {
                    icon: way,
                    title:"With you, all the way",
                    text: "From the first characterization conversation, I will be there for you, to refine the dream and create it to your satisfaction. At the end, you will receive personal and detailed guidance regarding the use of the site and the management system."
                },
                {
                    icon:responsive,
                    title:"Responsive",
                    text: "Today, most of the internet traffic is done through the mobile phone. Your site will also be there, accessible to any screen size, for a perfect user experience for a diverse clientele."
                },
                {
                    icon:ssl,
                    title:"SSL security",
                    text: "A modern and accessible user experience. Personal design that is tailored to the business and conveys the exact atmosphere for the customer, increases conversion rates and sales."
                },               
                {
                    icon:design,
                    title:"UI / UX design",
                    text: "A modern and accessible user experience. Personal design that is tailored to the business and conveys the exact atmosphere for the customer, increases conversion rates and sales."
                },
                {
                    icon:btn,
                    title:"Quick links",
                    text: "Social links, direct dial button, WhatsApp call reference, advanced lead forms. Everything to make it easier for your customer to find you quickly and efficiently."
                },
                {
                    icon:manage,
                    title:"Content management system",
                    text: "Products, photos, posts, everything you can update yourself and easily. Of course after you receive detailed guidance and feel ready to go out with the site."
                },
                {
                    icon:seo,
                    title:"Preparing the ground for SEO",
                    text: "The construction of the site includes the assimilation of the Pixel of Facebook and Google Analytics for the purpose of analyzing and knowing the behavior of the surfers on the site, meta tags and an XML map."
                },
                {
                    icon:speed,
                    title:"Speed",
                    text: "Advanced loading technologies and the use of fast servers."
                }
            ]
        }
    render () {
        return (
            <>
                <div className="services lang">
                    <h1>Pieces in the puzzle</h1>
                    <div className="services-center">
                        {this.state.services.map(
                            (item, index) => {return (
                                <article className="block-services lang" key={index}>
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
