import React,{Component} from 'react';
// import component 
// import style
import './App.scss';
import SearchPage from '../Pages/SearchPage/SearchPage';
import ResultPage from '../Pages/ResultPage/ResultPage';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

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
                    <Routes>
                        <Route path="/" element={<SearchPage />} />
                        <Route path="./analysis" element={<ResultPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}