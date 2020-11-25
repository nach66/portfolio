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
                            {new Date().getFullYear()} &copy; by yoni nachala vinograd
                        </p>
                    </div>
                </FooterWrapper>
            </>
        );
    }
}

const FooterWrapper = styled.footer`
    color: var(--primaryColor);
    background: var(--grey);
    height: 30px;
    padding-top: 10px;
    text-align: center;
    font-weight:500;
    font-size: 20px
    `;
