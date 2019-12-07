import React from 'react';
import ShopItem from '../shop-item/shop-item';
import './shop.scss';
import nextId from "react-id-generator";

const Shop = (props) => {
    const {coffee} = props;
    let shopList = coffee.map(item => {
        const {name,country,description,price,url} = item;
        let id = nextId();
        return(
            <ShopItem 
                key={id}
                name={name}
                url={url}
                price={price}
                country={country}
                description={description}
            />
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