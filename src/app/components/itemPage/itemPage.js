import React, {Component} from 'react';
import Banner from '../banner/banner';
import Footer from '../footer/footer';
import ItemBlock from '../itemBlock/itemBlock';
import GetService from '../../services/getService';
// import './coffee-page.sass';



export default class ItemPage extends Component {
    constructor(props) {
        super();
        this.getService = new GetService();
        this.id = props.match.params.id;
        this.state = {
            item: {}
        }
    }

    componentDidMount() {
        this.getService.getItem(this.id)
            .then(res => {
                const [item] = res;
                this.setState({item})
            });
    }
    
    render() {
        return(
            <>
                <Banner title='Our coffee'/>
                <ItemBlock {...this.state.item}/>
                <Footer/>
            </>
        )
    }
}
