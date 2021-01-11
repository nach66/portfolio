import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Newservice'
import Start from '../components/Start'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Page () {
    return (
        <>
                <Hero/>
                <div className="prolog">
                    <p>אם יש משהו ששנת 2020 הידועה לשמצה הוכיחה לנו, זה שכל עסק חייב אתר. הכול קורה כיום אונליין, וגם אתם צריכים להופיע שם!</p>
                    <p>עם העיצובים הכי יפים והמשפטים הכי רהוטים, תהיו שם כדי להותיר על הלקוחות רושם שלא ישכח כבר מביקור ראשון באתר הבית שלכם.</p>
                    <p>אתם צריכים אתר יפיפה ומודרני, נגיש ומאובטח, מהיר למרות שהוא מכיל ממש הכול.</p>
                    <p>אתר שמעוצב באווירה שתהיו מעוניינים ליצור אצל הלקוח שמבקר בעסק שלכם, ונותן לו גישה מהירה ומהנה לשימוש בשירות אותו אתם מציעים.</p>
                    <p>ואני, במקרה, מפתחת אתרים בדיוק כאלה :)</p>
                </div>

                <About/>
                <Services/>
                <Start/>
                <ContactForm/>
                <Footer/>
            </>
    );
}
