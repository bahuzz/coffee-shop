import React from 'react';
import './filter.sass';

const Searchbar = () => {
    return(
        <div className="filter">
            <div className="filter__label">
                Or filter
            </div>
            <div className="filter__group">
                <button className="filter__btn">Brazil</button>
                <button className="filter__btn">Kenya</button>
                <button className="filter__btn">Columbia</button>
            </div>
        </div>
    )
};

export default Searchbar;