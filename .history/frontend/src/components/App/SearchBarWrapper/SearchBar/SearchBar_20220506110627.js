import './SearchBar.scss';
//import './
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faXmark} from '@fortawesome/free-solid-svg-icons';
import {Component} from 'react';


class SearchBar extends Component { 
    constructor(...args) {
        super(...args);
        this.state = {
            text: '',
            options: [],
        };
    }

    _onInputChange = (event)  =>{
        this.setState({text: event.target.value});
    }

    _onKeyPress = (event) =>{
        if(event.key == 'Enter'){
            this._search();
        }
    }

    _onEmptyInput = (event) => {
        this.setState({text: '', options: []});
    }
    
    _search = (event) =>{
        console.log("search: ", this.state.text);
    }

    render() {
        return (<div className="SearchBar">
            <FontAwesomeIcon icon={faSearch} className="faSearch"
                onClick={this._search}
                />
            <input type="text" className="SearchInput"  placeholder="Search..." value={this.state.text} 
                onChange={this._onInputChange} 
                onKeyDown={this._onKeyPress}
                />
            <FontAwesomeIcon className="faXmark" icon={faXmark} 
                    opacity={(Number)(this.state.text !== '')}
                    onClick={this._onEmptyInput}
                    />
        </div>);
    }


}

export default SearchBar;