import React, {Component} from 'react';
import Preview from '../../components/preview/preview';
import About from '../../components/about/about';
import Best from '../../components/best/best';
import Footer from '../../components/footer/footer';
import './main.sass';
import GetService from '../../services/getService';
import Spinner from '../../components/spinner/spinner';
import Error from '../../components/error/error';

export default class Main extends Component {
    constructor() {
        super();
        this.getService = new GetService();
        this.state = {
            best: [],
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        this.getService.getBest()
        .then(best => {
            this.setState({
                best,
                loading: false
            })
        })
        .catch(() => {
            this.setState({
                error: true,
                loading: false
            })
        }) 
    }

    render() {
        const {best,error,loading} = this.state;
        let content = '';
        if(error) {
            content = <Error/> 
        } else {
            content = (!loading) ? <Best items={best}/> : <Spinner/>
        }
        
        return (
            <>
                <Preview/>
                <About/>
                {content}
                <Footer/>
            </>
        )
    }
}