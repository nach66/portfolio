import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default class HoriForm extends React.Component {
        constructor(props) {
            super(props);
            this.submitForm = this.submitForm.bind(this);
            this.state = {
                status: ""
            };
        }
    
    render() {
        const { status } = this.state;
        return (
            <>   
                <br/>
<div className="hori-form">
<form
    method="POST"
    className="cform form-inline"
    onSubmit={this.submitForm}
    action="https://formspree.io/f/xeqpljye"
>

    <article className='hori-h2'>
        <h2>לקבלת הצעת מחיר</h2>
    </article>

    <article>
        <label htmlFor="hori-name" className="sr-only">
            שם
        </label>

        <input
            id="hori-name"
            type="text"
            name="Name"
            className="form-control hori-form-mobile"
            placeholder="שם"
        />
    </article>

    <article>
        <label htmlFor="hori-phone" className="sr-only">
            טלפון
        </label>

        <input
            id="hori-phone"
            type="tel"
            name="phone"
            className="form-control hori-form-mobile"
            placeholder="טלפון"
        />
    </article>

    <article>
        <label htmlFor="hori-message" className="sr-only">
            תוכן הפנייה
        </label>

        <textarea
            id="hori-message"
            name="message"
            className="form-control hori-form-mobile long"
            rows="1"
            placeholder="רציתי לשאול.."
        />
    </article>
    
    <article className="submit-hori">
        {status === "SUCCESS"
            ? <h2>תודה, אחזור אליך הכי מהר שאוכל!</h2>
            : <button type="submit" className="form-submit submit">שליחה</button>
        }

        {status === "ERROR" &&
            <p className="submit-error-form">
                אוי! קרתה תקלה, אנא נסו שוב.
            </p>
        }
    </article>

    <article className="privacy-check-wrap">
        <label className="privacy-check">
            <input
                type="checkbox"
                name="privacy_approval"
                required
            />

            <span>
                מסרתי את פרטיי מרצוני לצורך יצירת קשר. ידוע לי שהפרטים לא יועברו לצד שלישי.
            </span>
        </label>
    </article>

</form>
</div>
                <br/>
                <br/>
                <br/>
            </>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}