import React, {Component} from 'react';
import Preview from '../../components/preview/preview';
import About from '../../components/about/about';
import Best from '../../components/best/best';
import Footer from '../../components/footer/footer';
import './main.sass';
import GetService from '../../services/getService';

export default class Main extends Component {
    constructor() {
        super();
        this.getService = new GetService();
        this.state = {
            best: []
        }
    }

    componentDidMount() {
        this.getService.getBest()
        .then(best => {
            this.setState({best})
        }) 
    }

    render() {
        return (
            <>
                <Preview/>
                <About/>
                <Best items={this.state.best}/>
                <Footer/>
            </>
        )
    }
}