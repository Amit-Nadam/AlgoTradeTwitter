import React,{Component} from 'react';
// import component 
// import style
import './App.scss';
import SearchLine from '../SearchLine/SearchLine';

export default class App extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            searchText:'',
        };
    }

    updateSearchText = (e) =>{
        this.setState({searchText: e.target.value});
    }

    render() {
        return(
            <div className="App">
                <div className="wrapper"> 
                    <div className="twitterLogo">&nbsp;</div>
                    <SearchLine searchFunc={this.handleSearch} 
                                updateText={this.updateSearchText}/>
                </div>
            </div>
        );
    }
}