import React,{Component} from 'react';
// import component 
import Searchbar from './Searchbar/Searchbar';


export default class App extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            todos: {},
        };
    }

    render() {
        return(
            <Searchbar/>
        );
    }
}