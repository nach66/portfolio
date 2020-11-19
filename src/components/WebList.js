import React, { Component } from 'react'
import Web from "./Web";
import a from '../images/reco/cold.jpg'
import b from '../images/reco/cold.jpg'
import c from '../images/reco/meni.jpg'

export default class WebList extends Component {
        state={
            webs: [
                {
                    icon:a,
                    link:"https://petisitti.netlify.app/",
                },
                {
                    icon:b,
                    link:"https://hosteltiberias.co.il/",
                },
                {
                    icon:c,
                    link:"http://www.happyflowers.webing.co.il/"
                }
            ]
        }
        render () {
            return (
                <section className="weblist">
                    <h1>אתרים שכבר יצרתי כדי להרשים -</h1>
                    <div className="weblist-center">
                        {this.state.webs.map(web => {
                            return <Web key={web.id} reco={web}/>;
                        })}
                    </div>
                </section>
            );
        }
}
