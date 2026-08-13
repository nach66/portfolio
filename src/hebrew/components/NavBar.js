import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    FaAlignJustify,
    FaHandPaper,
    FaPhone,
    FaWhatsapp,
    FaWindowClose
} from 'react-icons/fa';
import logo from '../../images/icons/nolines.svg';

export default class NavBar extends Component {
    state = {
        isOpen: false,
        isClick: false
    };

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    handleclick = () => {
        this.setState({
            isClick: !this.state.isClick
        });
    };

    onClicklogo = () => {
        window.scrollTo(0, 0);
    };

    render() {
        return (
            <>
                <button
                    onClick={this.handleclick}
                    aria-label="פתיחת אפשרויות יצירת קשר"
                >
                    <FaHandPaper className="float-contact" />
                </button>

                {this.state.isClick &&
                    <>
                        <a
                            href="https://api.whatsapp.com/send?phone=972556617145"
                            rel="noopener noreferrer"
                            aria-label="יצירת קשר ב-WhatsApp"
                        >
                            <FaWhatsapp className="float-contact chat" />
                        </a>

                        <a
                            href="tel:055-6617145"
                            rel="noopener noreferrer"
                            aria-label="התקשרות טלפונית"
                        >
                            <FaPhone className="float-contact call" />
                        </a>
                    </>
                }

                <nav
                    id="mainnav"
                    className="navbar mainnav"
                    aria-label="ניווט ראשי"
                >
                    <div className="nav-center">

                        <div className="nav-header">
                            <Link
                                to="/"
                                aria-label="studYoni - עמוד הבית"
                            >
                                <img
                                    src={logo}
                                    onClick={this.onClicklogo}
                                    className="nav-logo"
                                    alt="studYoni"
                                />
                            </Link>

                            <button
                                onClick={this.handleToggle}
                                className="nav-btn"
                                aria-label={
                                    this.state.isOpen
                                        ? "סגירת תפריט"
                                        : "פתיחת תפריט"
                                }
                            >
                                {this.state.isOpen
                                    ? <FaWindowClose className="closebtn" />
                                    : <FaAlignJustify className="nav-icon" />
                                }
                            </button>
                        </div>

                        <div
                            onClick={this.handleToggle}
                            className={
                                this.state.isOpen
                                    ? "navi links"
                                    : "navi links hide-nav"
                            }
                        >
                            <div className="closebtn">&times;</div>

                            <ul>
                                <li><Link to="/">בית</Link></li>
                                <li><Link to="/about">מי ולמה אני</Link></li>
                                <li><Link to="/portfolio">פרוייקטים</Link></li>

                                <li className="home">
                                    <Link to="/blog">
                                        מאמרים
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/contact">צרו קשר</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}