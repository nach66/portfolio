import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {    
    render() {
        return (
            <>
                <div className="footerWrapper">

                    <Link to="/privacy" className="privacy-link">
                        מדיניות פרטיות
                    </Link>

                    <p>
                        {new Date().getFullYear()}
                        &copy; by yoni nachala vinograd
                    </p>

                </div>
            </>
        );
    }
}