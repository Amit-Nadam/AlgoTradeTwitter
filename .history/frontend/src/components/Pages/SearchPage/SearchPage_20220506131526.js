import './SearchPage.scss';
import { Component } from 'react';


class SearchPage extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            searchText: '',
            optionList: [],
        };
    }
    
    render(){
        return(
            <div className="searchPage">

            </div>
        );
    }
}

export default SearchPage;