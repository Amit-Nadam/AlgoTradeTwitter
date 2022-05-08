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

    updateOptionsList = (optionList) =>{
        this.setState({optionList: optionList});
    }

    render(){
        return(
            <div className="searchPage">
                <SearchLine search={this.search} 
                            updateText={this.updateSearchText}
                            getText={this.getText}
                            />
                <SearchList getText={this.getText}
                            updateOptionsList={this.updateOptionsList}
                            />
            </div>
        );
    }
}

export default SearchPage;