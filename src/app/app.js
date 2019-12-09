import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Main from './pages/main/main';
import Coffee from './pages/coffee/coffee';
import Pleasure from './pages/pleasure/pleasure';
import itemPage from './pages/itemPage/itemPage';


export default class App extends Component {


    render() {
        return (
            <Router>
                <Route path='/' exact component={Main}/>
                <Route path='/coffee' exact component={Coffee}/>
                <Route path='/coffee/:id' component={itemPage}/>
                <Route path='/bestsellers/:id' component={itemPage}/>
                <Route path='/pleasure' component={Pleasure}/>
            </Router>
        )
    }
}