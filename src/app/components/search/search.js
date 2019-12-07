import React from 'react';
import './search.sass';

const Search = () => {
    return(
        <form action="#" className="search">
            <label className="search__label" htmlFor="filter">Looking for</label>
            <input id="filter" type="text" placeholder="start typing here..." className="search__input"/>
        </form>
    )
};

export default Search;