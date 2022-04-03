import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {FaAlignJustify, FaHandPaper, FaPhone, FaWhatsapp, FaWindowClose} from 'react-icons/fa'
import logo from '../../images/icons/nolines.svg'

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
                    <FaWhatsapp className="float-contact chat" alt="contact"/>
                </a> 
                <a href="tel:055-6617145" rel="noopener noreferrer">                        
                    <FaPhone className="float-contact call" alt="contact"/>
                </a> 
                </>               
            }

                <nav id="mainnav" className="navbar mainnav">
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

                        <ul> 
                            <li><a href="/">בית</a></li>
                            <li><a href="/about">מי ולמה אני</a></li>
                            <li><a href="/portfolio">פרוייקטים</a></li>
                            <li><a href="/price">חבילות</a></li>
                            <li><a href="/contact">צרו קשר</a> </li>
                            
                            <li class="home">
                                <a a href="/blog">
                                מאמרים 
                                    {/* <svg class="icon" width="14" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z"/></svg> */}
                                </a>
                                {/* <ul class="submenu">
                                    <li><a href="/services">אז מה בתפריט? סוגי אתרים</a></li>
                                    <li><a href="/shipping">איך להגדיר משלוחים בווקומרס</a></li>
                                    <li><a href="/uploud_product_to_Woocommerce">איך להוסיף מוצר לחנות</a></li>
                                </ul> */}
                            </li>
                        </ul>

                        </div>

                    </div>
                </nav>
            </>
        )
    }
}