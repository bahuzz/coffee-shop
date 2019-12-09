import React from 'react';
import Search from '../search/search';
import Filter from '../filter/filter';
import './searchbar.scss';

const Searchbar = (props) => {
    return(
        <section className="searchbar">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-2">
                        <Search onUpdateSearch={props.onUpdateSearch}/>
                    </div>
                    <div className="col-lg-4">
                        <Filter onFilterChange={props.onFilterChange}/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Searchbar;