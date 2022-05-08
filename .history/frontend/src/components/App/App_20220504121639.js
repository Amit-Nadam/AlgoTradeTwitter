import React,{Component} from 'react';
// import component 
import './Searchbar/Searchbar';


export default class App extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            todos: {},
        };
    }

    render() {
        return(
            <h1>Hello World</h1>
        );
    }
}