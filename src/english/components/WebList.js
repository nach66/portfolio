import React, { Component } from 'react'
import Web from "./Web";

export default class WebList extends Component {
    state={
        webs: [
                {
                    ltr: false,
                    title:"landing page",
                    list: [
                        'Google Analytics, Facebook Pixel',
                        'Responsive mobile adaptation',
                        'Infrastructure for SEO',
                        'Advanced Leads Form',
                        'UI / UX design'
                    ],
                    text:"Land the customer straight at the center of things: what we offer, why it's worthwhile, and where to sign up. Just as its name implies, this is a convenient place to land from your links across the internet. The content will be marketing and actionable, and the goal will be to generate leads (inquiries) by an online form for leaving details. The landing page is a site with only one page, well-designed and focused. Compared to a regular site where you can get lost among all the content, here we will help the customer access us with a minimum of effort of browsing and reading."
                },
                {
                    ltr: true,
                    title:"portfolio site",
                    list: [
                        'Various content pages',
                        'System operation tutorial',
                        'Advanced contact form',
                        'Infrastructure for SEO',
                        'UI / UX design'
                    ],
                    text:"A business card and even a virtual visit: who we are, what we do and how much its worthy. On those sites we will write all the relevant information about us for the customers. The site should be comprehensive but relevant. It should convey a little of the atmosphere we are interested in creating through design and content together, and make customers want to know more about us."
                },
                {
                    ltr: false,
                    title:"shop",
                    list: [
                        'UI/UX design for a perfect shopping experience',
                        'Managment system for updating the products',
                        'Building foundations for SEO',
                        'Secured credit card payments',
                        'Various content pages',
                    ],
                    text:"In today's world and especially in Corona times, many businesses are interested in selling online. Such a sale, instead of or in addition to a physical store - significantly increases the transactions and saves both fuss and costs. Such a site should be professionally built, mobile-friendly, and fast-performing. We will add to this an interesting customized design and motivation for action, which will make customers want to buy more and more!"
                },
                {
                    ltr: true,
                    title:"Renovations",
                    list: [
                        'Adding pages',
                        'Visual changes',
                        'Uploading content and images',
                        'Development of plugins for WordPress',
                    ],
                    text:"Have a website, but it's not perfect yet? Want to add something you saw on another site? I'll help it become the site you dreamed of."
                }
                
        ]
    }

    render () {
        return (
            <>
                <div className="bf"/>
                <section className="weblist lang">
                    <h1>
                    ?So what's on the menu
                    </h1>
                    <div className="weblist-center">
                        {this.state.webs.map(web => {
                            return <Web key={web.id} reco={web}/>;
                        })}
                    </div>
                </section>
                <div className="af"/>
            </>
        );
    }
}
