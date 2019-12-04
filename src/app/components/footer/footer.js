import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logoDark from './Beans_logo_dark.svg';
import logoBlack from './Logo_black.svg';
import './footer.sass';

export default class Footer extends Component {

    render() {
        return (
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 offset-lg-4">
                            <ul class="footer">
                                <li class="footer__item">
                                    <Link to='/'><img src={logoBlack} alt="logo"></img></Link>
                                </li>
                                <li class="footer__item">
                                    <Link to='/coffee'>Our coffee</Link>
                                </li>
                                <li class="footer__item">
                                    <Link to='/pleasure'>For your pleasure</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img class="beanslogo" src={logoDark} alt="Beans logo"></img>
                </div>
            </footer>
        )
    }
}



