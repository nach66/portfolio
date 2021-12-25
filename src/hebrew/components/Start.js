import React from 'react'
import a from '../../images/mobile.png'
import Fade from 'react-reveal/Fade';
export default function Start() {
    return (
        <>
        <div className="sbf"/>
            <div className="sec">
                <Fade bottom>            
                    <article className="centerr">
                        <img src={a} alt="icon"/>
                    </article>
                    <article className="centerr">
                        <h3>אזזז... מאיפה מתחילים?</h3>
                        <p>קודם כל נתאם פגישת היכרות בה נבין את הצרכים והרצונות שלכם.</p>
                        <p>זו לא חייבת להיות פגישה פיזית, בעידן הקורונה אפשר לעשות הכול גם בטלפון או בזום - </p>
                        <p>העיקר שנאפיין יחד את האתר המבוקש, ונבנה את תהליך העבודה הנכון ביותר.</p>
                    </article>
                </Fade>
            </div> 
        <div className="saf"/>
        </>
    )
}
