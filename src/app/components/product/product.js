import React, {Component} from 'react';
import './product.sass';

export default class Product extends Component {

    render() {
        return (
            <div class="product">
                <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"></img>
                <div class="product__title">
                    Solimo Coffee Beans 2kg
                </div>
                <div class="product__price">10.73$</div>
            </div>
        )
    }
}
