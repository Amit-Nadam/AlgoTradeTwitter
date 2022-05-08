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

    handleSearch = (event) =>{
        console.log("Search");
    }

    handleChange = (event) =>{
        console.log("Change");
    }
    onSearch = (e) => () =>{
        // this.state.search = 'sadas';
    }

    render() {
        return(
            <div className="App">
                <div className="wrapper"> 
                    <div className="twitterLogo">&nbsp;</div>
                    <SearchLine handleSearch={this.handleSearch} 
                                handleChange={this.handleChange}/>
                </div>
            </div>
        );
    }
}