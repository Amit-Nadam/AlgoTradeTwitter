import React,{Component} from 'react';
// import component 
import SearchBarWrapper from './SearchBarWrapper/SearchBarWrapper';
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
            <div className="App">
                <SearchBarWrapper/>
            </div>
        );
    }
}