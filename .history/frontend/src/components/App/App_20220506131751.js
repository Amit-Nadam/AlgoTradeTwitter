import React,{Component} from 'react';
// import component 
// import style
import './App.scss';
import SearchPage from '../Pages/SearchPage/SearchPage';
export default class App extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            searchText:'',
        };
    }

    render() {
        return(
            <div className="App">
                <div className="wrapper"> 
                    <div className="twitterLogo">&nbsp;</div>
                    <SSearchPage/>
            
                </div>
            </div>
        );
    }
}