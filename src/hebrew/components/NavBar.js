import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {FaAlignJustify, FaHandPaper, FaPhone, FaWhatsapp, FaWindowClose} from 'react-icons/fa'
// import logo from '../../images/icons/rubiks-cube.svg'
import logo from '../../images/icons/logo.png'

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
                    <FaHandPaper className="float-contact" alt="contact"/>
                </button>
            {this.state.isClick &&                 
                <>
                <a href="https://api.whatsapp.com/send?phone=+972556617145/?text=היי, אני רוצה לבנות אתר" rel="noopener noreferrer">                        
                    <FaWhatsapp className="float-contact call" alt="contact"/>
                </a> 
                <a href="tel:055-6617145" rel="noopener noreferrer">                        
                    <FaPhone className="float-contact chat" alt="contact"/>
                </a> 
                </>               
            }

                <nav className="navbar">
                    <div className="nav-center" >

                        <div className="nav-header">
                            <Link to="/" >                        
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
                            className={this.state.isOpen? "navi links " : "navi links hide-nav" }>
                            <div className="closebtn" >&times;</div>
                            <a href="/">בית</a>
                            <a href="/about">מי ולמה אני</a>
                            <a href="/portfolio">פרוייקטים</a>
                            <a href="/services">שירותים</a>
                            <a href="/price">מחירון</a>
                            <a href="/contact">צרו קשר</a>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}