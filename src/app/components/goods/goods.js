import React from 'react';
import ShopItem from '../shop-item/shop-item';
import './goods.scss';

const Shop = (props) => {
    const {items} = props;
    let shopList = items.map((item,index) => {
        return(
            <ShopItem key={index} {...item} />
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