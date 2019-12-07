import React from 'react';
import './shop-item.scss';

const ShopItem = (props) => {
    const {name,url,price,country} = props;
    return(
        <div className="shop__item">
            <img src={url} alt={name}></img>
            <div className="shop__item-title">
                {name}
            </div>
            <div className="shop__item-country">{country}</div>
            <div className="shop__item-price">{price}</div>
        </div>
    )
};

export default ShopItem;