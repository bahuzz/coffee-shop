import React, {Component} from 'react';
import Banner from '../../banner/banner';
import Footer from '../../footer/footer';
import CoffeeAbout from '../../coffee-about/coffee-about';
import Searchbar from '../../searchbar/searchbar';
import Shop from '../../shop/shop';
import GetService from '../../../services/getService'

export default class Coffee extends Component {
    constructor() {
        super();
        this.getService = new GetService();
        this.state = {
            coffee: []
        }
    }

    componentDidMount() {
        this.getService.getCoffee()
        .then(coffee => {
            this.setState({coffee})
        }) 
    }

    render() {
        return (
            <>
                <Banner title='Our coffee'/>
                <CoffeeAbout/>
                <Searchbar/>
                <Shop coffee={this.state.coffee}/>
                <Footer/>
            </>
        )
    }
}