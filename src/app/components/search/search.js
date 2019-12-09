import React,{Component} from 'react';
import './search.sass';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return(
            <form action="#" className="search">
                <label className="search__label" htmlFor="filter">Looking for</label>
                <input 
                    id="filter" 
                    type="text" 
                    placeholder="start typing here..." 
                    className="search__input"
                    onChange={this.onUpdateSearch}
                    />
            </form>
        )
    }
};
