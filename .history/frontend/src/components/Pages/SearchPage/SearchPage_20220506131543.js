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
    
    updateSearchText = (text) =>{
        this.setState({searchText: text});
    }

    search = ()=>{
        console.log(this.state.searchText);
    }

    getText = () => {
        return this.state.searchText;
    }


    render(){
        return(
            <div className="searchPage">

            </div>
        );
    }
}

export default SearchPage;