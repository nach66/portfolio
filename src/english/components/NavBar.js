import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {FaAlignJustify, FaHandPaper, FaPhone, FaWhatsapp, FaWindowClose} from 'react-icons/fa'
import logo from '../../images/icons/rubiks-cube.svg'

export default class NavBar extends Component {
    state={
        isOpen: false,
        isClick: false
    }
    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    handleclick = () => {
        this.setState({
            isClick: !this.state.isClick
        });
    }
    onClicklogo = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <button onClick={this.handleclick} >                        
                    <FaHandPaper className="secicon" alt="contact"/>
                </button>
                {this.state.isClick &&                 
                    <>
                        <a href="https://api.whatsapp.com/send?phone=+972556617145/?text=היי, אני רוצה לבנות אתר" rel="noopener noreferrer">                        
                            <FaWhatsapp className="secicon secicon2" alt="contact"/>
                        </a> 
                        <a href="tel:055-6617145" rel="noopener noreferrer">                        
                            <FaPhone className="secicon secicon3" alt="contact"/>
                        </a> 
                    </>               
                }

                <nav className="navbar">
                    <div className="nav-center" >

                        <div className="nav-header">
                            <Link to="/en/" >                        
                                <img src={logo} onClick={this.onClicklogo} className="nav-logo" alt="logo"/>
                            </Link>
                            <button onClick={this.handleToggle} className="nav-btn">
                                {this.state.isOpen? 
                                    <FaWindowClose className=" closebtn"/> :
                                    <FaAlignJustify className="nav-icon"/>
                                }
                            </button>
                        </div>

                        <div onClick={this.handleToggle}
                            className={this.state.isOpen? "navi links lang" : "lang navi links hide-nav" }>
                            <div className="closebtn" >&times;</div>
                            <a href="/en/">Homepage</a>
                            <a href="/en/about">About me</a>
                            <a href="/en/port">Projects</a>
                            <a href="/en/web">Services</a>
                            <a href="/en/contact">Contact me</a>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}