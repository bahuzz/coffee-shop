import React, {Component} from 'react';
import './filter.sass';

export default class Searchbar extends Component {
    render() {
        return(
            <div className="filter">
                <div className="filter__label">
                    Or filter
                </div>
                <div className="filter__group">
                    <button 
                        className="filter__btn"
                        onClick={() => this.props.onFilterChange('Brazil')}
                        >Brazil</button>
                    <button 
                        className="filter__btn"
                        onClick={() => this.props.onFilterChange('Kenya')}
                        >Kenya</button>
                    <button 
                        className="filter__btn"
                        onClick={() => this.props.onFilterChange('Columbia')}
                        >Columbia</button>
                </div>
            </div>
        )
    }
};
