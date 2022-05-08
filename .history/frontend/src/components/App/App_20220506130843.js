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

    updateSearchText = (text) =>{
        this.setState({searchText: text});
    }

    search = ()=>{
        console.log(this.state.searchText);
    }

    getText = () => {
        return this.state.searchText;
    }

    render() {
        return(
            <div className="App">
                <div className="wrapper"> 
                    <div className="twitterLogo">&nbsp;</div>
                    <SearchLine search={this.search} 
                                updateText={this.updateSearchText}
                                getText={this.getText}/>
            
                </div>
            </div>
        );
    }
}