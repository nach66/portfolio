import React from 'react'
import a from '../images/mobile.png'

export default function Start() {
    return (
        <>
        <div className="sbf"/>

        <div className="sec">
            <article>
                <img src={a} alt="icon"/>
            </article>
            <article>
                <h2>אזזז... מאיפה מתחילים?</h2>
                <h5>קודם כל נתאם פגישת היכרות בה נבין את הצרכים והרצונות שלכם.</h5>
                <h5>זו לא חייבת להיות פגישה פיזית, בעידן הקורונה אפשר לעשות הכול גם בטלפון או בזום - </h5>
                <h5>העיקר שנאפיין יחד את האתר המבוקש, ונבנה את תהליך העבודה הנכון ביותר.</h5>
            </article>
        </div> 

        <div className="saf"/>
        </>
    )
}
