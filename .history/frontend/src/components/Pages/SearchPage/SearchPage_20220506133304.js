import './SearchPage.scss';
import { Component } from 'react';
import SearchLine from '../../SearchLine/SearchLine';
import SearchList from '../../SearchList/SearchList';


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

    updateOptions = (options) =>{

    }

    render(){
        return(
            <div className="searchPage">
                <SearchLine search={this.search} 
                            updateText={this.updateSearchText}
                            getText={this.getText}
                            />
                <SearchList getText={this.getText}
                            />
            </div>
        );
    }
}

export default SearchPage;