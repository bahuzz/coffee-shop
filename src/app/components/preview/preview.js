import React, {Component} from 'react';
import Header from '../header/header';
import BeansLogo from './Beans_logo.svg'

export default class Preview extends Component {

    render() {
        return (
            <div class="preview">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <Header/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <h1 class="title-big">Everything You Love About Coffee</h1>
                                <img class="beanslogo" src={BeansLogo} alt="Beans logo"></img>
                                <div class="preview__subtitle">We makes every day full of energy and taste</div>
                                <div class="preview__subtitle">Want to try our beans?</div>
                                <a href="#" class="preview__btn">More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}