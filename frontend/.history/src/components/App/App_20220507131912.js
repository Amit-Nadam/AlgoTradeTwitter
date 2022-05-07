import React,{Component} from 'react';
// import component 
// import style
import './App.scss';
import SearchPage from '../Pages/SearchPage/SearchPage';
import ResultPage from '../Pages/ResultPage/ResultPage';
import { BrowserRouter } from 'react-router-dom';

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
                <BrowserRouter>
                    <SearchPage/>
                    <ResultPage/>
                </BrowserRouter>

            </div>
        );
    }
}