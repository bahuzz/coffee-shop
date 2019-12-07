import React from 'react';
import Search from '../search/search';
import Filter from '../filter/filter';

const Searchbar = () => {
    return(
        <section className="searchbar">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-2">
                        <Search/>
                    </div>
                    <div className="col-lg-4">
                        <Filter/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Searchbar;