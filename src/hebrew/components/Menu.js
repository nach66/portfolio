import React, { Component } from 'react'

export default class Menu extends React.Component {  
    render() {
      return (
        <nav className="nav">
          <ul className="nav__menu">
            <li className="nav__menu-item">
              <a>Home</a>
            </li>
            <li
              className="nav__menu-item"
            >
              <a>About</a>
              <Submenu />
            </li>
          </ul>
        </nav>
      )
    }
  }
  
  export class Submenu extends React.Component {
    render() {
      return (
        <ul className="nav__submenu">
          <li className="nav__submenu-item ">
            <a>Our Company</a>
          </li>
          <li className="nav__submenu-item ">
            <a>Our Team</a>
          </li>
        </ul>
      )
    }
  }