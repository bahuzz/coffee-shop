import React, {Component} from 'react';
import Preview from '../../preview/preview';
import About from '../../about/about';
import Best from '../../best/best';
import Footer from '../../footer/footer';
import './main.sass';
import GetService from '../../../services/getService'

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