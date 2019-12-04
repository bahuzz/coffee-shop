import React, {Component} from 'react';
import Product from '../product/product'
import './best.sass';

export default class Best extends Component {

    render() {
        return (
            <section class="best">
            <div class="container">
                <div class="title">Our best</div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="best__wrapper">
                            <Product/>
                            <Product/>
                            <Product/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}



