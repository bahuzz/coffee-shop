import React, {Component} from 'react';
import Product from '../product/product'
import './best.sass';
import {Link} from 'react-router-dom';

export default class Best extends Component {

    render() {
        const {items} = this.props;
        let products = items.map((product,index) => {
            const {name, url, price} = product;
            return (
                <Link key={index} to={`/bestsellers/:${name}`} className="product">
                    <Product
                        name={name}
                        url={url}
                        price={price}
                    />
                </Link>
            )
        });
        return (
            <section className="best">
            <div className="container">
                <div className="title">Our best</div>
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="best__wrapper">
                            {products}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}



