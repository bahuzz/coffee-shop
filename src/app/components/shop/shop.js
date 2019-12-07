import React from 'react';
import ShopItem from '../shop-item/shop-item';
import './shop.scss';
import {Link} from 'react-router-dom';

const Shop = (props) => {
    const {coffee} = props;
    let shopList = coffee.map((item,index) => {
        const {name} = item;
        return(
            <Link key={index} to={`/coffee/:${name}`}>
                <ShopItem {...item} />
            </Link>
        )
    });
    return(
        <div className="shop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="shop__wrapper">
                            {shopList}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default Shop;