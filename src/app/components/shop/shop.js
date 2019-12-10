import React from 'react';
import ShopItem from '../shop-item/shop-item';
import './shop.scss';
import {Link} from 'react-router-dom';
import Spinner from '../spinner/spinner';
import Error from '../error/error';

const Shop = (props) => {
    const {items,error,loading} = props;
    if(error) return <Error/>;
    let shopList = items.map((item,index) => {
        const {name} = item;
        return(
            <Link key={index} to={`/coffee/:${name}`}>
                <ShopItem {...item} />
            </Link>
        )
    });
    const content = (loading) ? <Spinner/> : shopList;
    return(
        <div className="shop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="shop__wrapper">
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default Shop;