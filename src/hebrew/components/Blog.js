import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import shop from '../../images/blog/web/shop.png'
import map from '../../images/blog/ship/map.png'
import beach from '../../images/blog/product/beach.png';
import fix from '../../images/blog/product/fix.png';
import puzzle from '../../images/icons/puzzle.png'

export default class Blog extends Component {
    state={
        services: [
                {
                    link: "/services",
                    icon: shop,
                    title:"אז מה בתפריט? סוגי האתרים",
                    text: "לפני שמתחילים לבנות אתר, נרצה להבין על אילו צרכים האתר אמור לענות. האם תהיה מכירה אונליין? או שהמטרה תהיה רק לספר על העסק והפתרונות המוצעים?"
                },
                {
                    link: "/uploud_product_to_Woocommerce",
                    icon:fix,
                    title:"איך להעלות מוצר לחנות",
                    text: "מדריך שיכול לשמח בעלי אתר ווקומרס (WooCommerce) שמעוניינים לנהל בעצמם את החנות; להוסיף ולעדכן מוצרים באופן שוטף."
                },
                {
                    link: "/shipping",
                    icon:map,
                    title:"איך להגדיר משלוחים בווקומרס",
                    text: "כדי שתמיד תוכלו לריב עם חברת השליחים ולהחליף אותם בלי עזרה של מתכנת :) נלמד להגדיר אזורי משלוח ולהתאים את סוגי המשלוח והמחירים."
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
                <h1>בלוג</h1>
                <h2> טיפים ומדריכים עם כותרות של '3 הדברים שאתם חייבים לדעת על..' </h2>
                <h6>סתם, לא בבית ספרנו. כאן תמיד יש לפחות 4 סעיפים.</h6>
                <div className="services-center">
                        {this.state.services.map(
                            (item, index) => {return (
                                <a href={item.link}
                                    className="block-services post" key={index}>
                                    <Fade bottom>
                                        <img src={item.icon} className="blog-img" alt="web img"/>
                                        <h2>{item.title}</h2>
                                        <h6>{item.text}</h6>
                                    </Fade>
                                </a>
                            )}
                        )}
                    </div>
                </div>
            </>
        )
    }
}
