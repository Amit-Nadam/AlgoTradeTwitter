import React,{Component} from 'react';
// import component 
import SearchBarWrapper from './SearchBarWrapper/SearchBarWrapper';
// import style
import './App.scss';

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
                <SearchBarWrapper/>
            </div>
        );
    }
}