import React, {Component} from 'react';
import Product from '../product/product'
import './best.sass';
import nextId from "react-id-generator";

export default class Best extends Component {

    render() {
        const {items} = this.props;
        let products = items.map(product => {
            const {name, url, price} = product;
            const id = nextId();
            return (
                <Product
                    key={id}
                    name={name}
                    url={url}
                    price={price}
                />
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



