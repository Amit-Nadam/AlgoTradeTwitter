import React,{Component} from 'react';

export default class App extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            todos: {},
        };
    }

    render() {
        return(
            <div>
            <h1>Hello World</h1>

            </div>
        );
    }
}