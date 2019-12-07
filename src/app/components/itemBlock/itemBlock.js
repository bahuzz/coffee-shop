import React from 'react';
import logoDark from '../../img/Beans_logo_dark.svg'
import './itemBlock.scss';

const itemBlock = ({name,url,country,price,description}) => {
    return(
        <section className="shop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 offset-1">
                        <img src={url} alt={name}></img>
                    </div>
                    <div className="col-lg-4">
                        <div className="title">About it</div>
                        <img className="beanslogo" src={logoDark} alt="Beans logo"></img>
                        <div className="point">
                            <span>Country:</span>
                            {country}
                        </div>
                        <div className="point">
                            <span>Description:</span>
                            {description}
                        </div>
                        <div className="point">
                            <span>Price:</span>
                            <span className="point__price">{price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default itemBlock;