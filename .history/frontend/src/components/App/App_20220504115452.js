import React,{Component} from 'react';

class App extends Component {

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
export default App;