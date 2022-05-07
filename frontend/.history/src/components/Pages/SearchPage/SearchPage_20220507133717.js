import './SearchPage.scss';
import { Component } from 'react';
import SearchLine from '../../SearchLine/SearchLine';
import SearchList from '../../SearchList/SearchList';
import { useNavigate } from 'react-router-dom';

class SearchPage extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            searchText: '',
            optionList: ['bla1','bla2','bla3'],
        };
    }
    
    updateSearchText = (text) =>{
        this.setState({searchText: text});
    }

    search = ()=>{
        const navigate = useNavigate();
        navigate('/analysis');
    }

    getText = () => {
        return this.state.searchText;
    }

    getoptionsList = () =>{
        return this.state.optionList;
    }

    render(){
        return(
            <div className="search-page">
                <div className="wrapper">
                    <div className="twitterLogo">&nbsp;</div>
                    <SearchLine search={this.search} 
                                updateText={this.updateSearchText}
                                getText={this.getText}
                                />
                    <SearchList getText={this.getText}
                                getoptionsList={this.getoptionsList}
                                updateText={this.updateSearchText}
                                />                
                </div>
            </div>
        );
    }
}

export default SearchPage;