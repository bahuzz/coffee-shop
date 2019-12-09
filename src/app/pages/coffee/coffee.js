import React, {Component} from 'react';
import Banner from '../../components/banner/banner';
import Footer from '../../components/footer/footer';
import CoffeeAbout from '../../components/coffee-about/coffee-about';
import Searchbar from '../../components/searchbar/searchbar';
import Shop from '../../components/shop/shop';
import GetService from '../../services/getService';

export default class Coffee extends Component {
    constructor() {
        super();
        this.getService = new GetService();
        this.state = {
            items: [],
            term: '',
            filter: ''
        }
    }

    componentDidMount() {
        this.getService.getCoffee()
        .then(items => {
            this.setState({items})
        }) 
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onFilterChange = (filter) => {
        this.setState({filter})
    }

    searchItems = (items, term) => {
        if(term.length === 0) {
            return items
        }

        return items.filter(item => {
            const name = item.name.toLowerCase();
            const lowTerm = term.toLowerCase();
            return name.indexOf(lowTerm) > -1
        });
    }

    filterItems(items, filter) {
        if (filter === 'Brazil') {
            return items.filter(item => item.country === 'Brazil')
        } else if (filter === 'Kenya') {
            return items.filter(item => item.country === 'Kenya')
        } else if (filter === 'Columbia') {
            return items.filter(item => item.country === 'Columbia')
        }  else {
            return items
        }
    }

    render() {
        const {items,term,filter} = this.state;
        const visibleItems = this.filterItems(this.searchItems(items,term),filter);
        return (
            <>
                <Banner title='Our coffee'/>
                <CoffeeAbout 
                    title='About our beans'
                    img='img/coffee_girl.jpg'
                    />
                <Searchbar 
                    onUpdateSearch = {this.onUpdateSearch} 
                    onFilterChange = {this.onFilterChange}
                    />
                <Shop items={visibleItems}/>
                <Footer/>
            </>
        )
    }
}