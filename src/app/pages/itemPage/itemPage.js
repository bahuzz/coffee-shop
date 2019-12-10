import React, {Component} from 'react';
import Banner from '../../components/banner/banner';
import Footer from '../../components/footer/footer';
import ItemBlock from '../../components/itemBlock/itemBlock';
import GetService from '../../services/getService';
import Spinner from '../../components/spinner/spinner';
import Error from '../../components/error/error';


export default class ItemPage extends Component {
    constructor(props) {
        super();
        this.getService = new GetService();
        this.id = props.match.params.id;
        this.state = {
            item: {},
            error: false,
            loading: true,
        }
    }

    componentDidMount() {
        this.getService.getItem(this.id)
            .then(res => {
                const [item] = res;
                this.setState({
                    item,
                    loading: false
                })
            })
            .catch(() => {
                this.setState({
                    error: true,
                    loading: false
                })
            });
    }
    
    render() {
        const {item,error,loading} = this.state;
        let content = '';
        if (error) {
            content = <Error/>
        } else {
            content = (loading) ? <Spinner/> : <ItemBlock {...item}/> 
        }
        
        return(
            <>
                <Banner title='Our coffee'/>
                {content}
                <Footer/>
            </>
        )
    }
}
