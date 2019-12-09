import React, {Component} from 'react';
import Banner from '../../components/banner/banner';
import Footer from '../../components/footer/footer';
import CoffeeAbout from '../../components/coffee-about/coffee-about';
import Goods from '../../components/goods/goods';
import GetService from '../../services/getService';

export default class Pleasure extends Component {
    constructor() {
        super();
        this.getService = new GetService();
        this.state = {
            goods: []
        }
    }

    componentDidMount() {
        this.getService.getGoods()
        .then(goods => {
            this.setState({goods})
        }) 
    }

    render() {
        return (
            <>
                <Banner 
                    title="For your pleasure"
                    pleasure="true"
                    />
                <CoffeeAbout 
                    title='About our goods'
                    img='img/goods.jpg'
                    />
                <Goods items={this.state.goods}/>
                <Footer/>
            </>
        )
    }
}