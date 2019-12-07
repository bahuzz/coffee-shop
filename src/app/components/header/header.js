import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './header.sass';
import logo from './Logo.svg';

export default class Header extends Component {

    render() {
        return (
            <header>
                <ul className="header">
                    <li className="header__item">
                        <Link to='/'><img src={logo} alt="logo"></img></Link>
                    </li>
                    <li className="header__item">
                        <Link to='/coffee'>Our coffee</Link>
                    </li>
                    <li className="header__item">
                        <Link to='/pleasure'>For your pleasure</Link>
                    </li>
                </ul>
            </header>
        )
    }
}