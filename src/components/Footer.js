import React, { Component } from 'react'
import styled from "styled-components";

export default class Footer extends Component {    
    render() {
        return (
            <>
                <FooterWrapper>
                    <div className="container py-3">
                        <p style={{
                            textTransform: 'capitalize',
                            direction:'ltr'}}>
                            {new Date().getFullYear()} &copy; by nachala vinograd
                        </p>
                    </div>
                </FooterWrapper>
            </>
        );
    }
}

const FooterWrapper = styled.footer`
    color: var(--);
    background: var(--blue);
    height: 40px;
    padding-top: 20px;
    text-align:center;
    font-weight:500;
    font-size: 20px
    `;
