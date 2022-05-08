import React,{Component} from 'react';
// import component 
import SearchBar from './SearchBar/SearchBar';
// import style
import './../../styles/main.scss';

export default class App extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            todos: {},
        };
    }

    render() {
        return(
            <SearchBar/>
        );
    }
}