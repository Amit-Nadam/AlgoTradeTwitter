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
        this.setState({text: ''});
    }
    
    _search = (event) =>{
        
    }

    render() {
        return (<div className="SearchBar">
            <FontAwesomeIcon icon={faSearch} />
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