import React from 'react'
import a from '../images/mobile.png'
import Fade from 'react-reveal/Fade';
export default function Start() {
    return (
        <>
        <div className="sbf"/>
            <div className="sec">
                <Fade bottom>            
                    <article>
                        <img src={a} alt="icon"/>
                    </article>
                    <article>
                        <h3>אזזז... מאיפה מתחילים?</h3>
                        <h5>קודם כל נתאם פגישת היכרות בה נבין את הצרכים והרצונות שלכם.</h5>
                        <h5>זו לא חייבת להיות פגישה פיזית, בעידן הקורונה אפשר לעשות הכול גם בטלפון או בזום - </h5>
                        <h5>העיקר שנאפיין יחד את האתר המבוקש, ונבנה את תהליך העבודה הנכון ביותר.</h5>
                    </article>
                </Fade>
            </div> 
        <div className="saf"/>
        </>
    )
}
