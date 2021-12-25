import React, { Component } from 'react'

export default class Footer extends Component {    
    render() {
        return (
            <>
                <div className="footerWrapper">
                    <p>
                        {new Date().getFullYear()}
                        &copy; by yoni nachala vinograd
                    </p>
                </div>
            </>
        );
    }
}