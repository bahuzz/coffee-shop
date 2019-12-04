import React, {Component} from 'react';
import Preview from '../../preview/preview';
import About from '../../about/about';
import Best from '../../best/best';
import Footer from '../../footer/footer';
import './main.sass'

export default class Main extends Component {
    render() {
        return (
            <>
                <Preview/>
                <About/>
                <Best/>
                <Footer/>
            </>
        )
    }
}