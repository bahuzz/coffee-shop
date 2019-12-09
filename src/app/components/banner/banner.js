import React from 'react';
import Header from '../header/header';
import './banner.sass';

const Banner = ({title,pleasure}) => {
    const bannerClass = (pleasure) ? 'banner pleasure' : 'banner';
    return (
        <div className={bannerClass}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Header/>
                    </div>
                </div>
                <h1 className="title-big">{title}</h1>
            </div>
        </div>
    )
};

export default Banner;