import React, {Component} from 'react';
import './product.sass';

export default class Product extends Component {

    render() {
        const {name, url, price} = this.props;
        return (
            <div>
                <img src={url} alt="coffee"></img>
                <div className="product__title">
                    {name}
                </div>
                <div className="product__price">{price}</div>
            </div>
        )
    }
}
