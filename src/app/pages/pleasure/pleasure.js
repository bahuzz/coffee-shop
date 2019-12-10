import React, {Component} from 'react';
import Banner from '../../components/banner/banner';
import Footer from '../../components/footer/footer';
import CoffeeAbout from '../../components/coffee-about/coffee-about';
import Goods from '../../components/goods/goods';
import GetService from '../../services/getService';
import Spinner from '../../components/spinner/spinner';
import Error from '../../components/error/error';

export default class Pleasure extends Component {
    constructor() {
        super();
        this.getService = new GetService();
        this.state = {
            goods: [],
            error: false,
            loading: true
        }
    }

    componentDidMount() {
        this.getService.getGoods()
        .then(goods => {
            this.setState({
                goods,
                loading: false
            })
        })
        .catch(() => {
            this.setState({
                loading: false,
                error: true
            })
        }) 
    }

    render() {
        const {goods,error,loading} = this.state;
        let content = '';
        if(error) {
            content = <Error/>
        } else {
            content = (!loading) ? <Goods items={goods}/> : <Spinner/>
        }
        
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
                {content}
                <Footer/>
            </>
        )
    }
}