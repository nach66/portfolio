import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {FaAlignJustify, FaArrowRight, FaHandPaper} from 'react-icons/fa'
import logo from '../images/icons/coding_.png'

export default class NavBar extends Component {
    state={
        isOpen: false
    }
    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    onClicklogo = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Link to="/contact" >                        
                    <FaHandPaper className="secicon" alt="contact"/>
                </Link>
                        <div className="nav-header">
                            <Link to="/" >                        
                                <img src={logo} onClick={this.onClicklogo} className="nav-logo" alt="logo"/>
                            </Link>
                            <button onClick={this.handleToggle} className="nav-btn">
                                <FaAlignJustify className="nav-icon"/>
                            </button>
                        </div>

                        <div onClick={this.handleToggle}
                            className={this.state.isOpen? "sidenav" : "sidenav hide-sidenav" }>
                            <a className="closebtn" >&times;</a>
                            <Link to="/">בית</Link>
                            <Link to="/about">מי ולמה אני</Link>
                            <Link to="/projects" >תיק עבודות</Link>
                            <Link to="/contact">צרו קשר</Link>
                        </div>
            </>
        )
    }
}