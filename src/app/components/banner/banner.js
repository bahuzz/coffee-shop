import React, {Component} from 'react';
import Header from '../header/header';
import './banner.sass';

export default class Banner extends Component {

    render() {
        return (
            <div class="banner">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <Header/>
                        </div>
                    </div>
                    <h1 class="title-big">Our Coffee</h1>
                </div>
            </div>
        )
    }
}