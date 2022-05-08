import React,{Component} from 'react';
// import component 
// import style
import './App.scss';
import SearchLine from '../SearchLine/SearchLine';

export default class App extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            search:'',
        };
    }

    onSearch = (e) => () =>{
        // this.state.search = 'sadas';
    }

    render() {
        return(
            <div className="App">
                <div className="wrapper"> 
                    <div className="twitterLogo">&nbsp;</div>
                    
                </div>
            </div>
        );
    }
}