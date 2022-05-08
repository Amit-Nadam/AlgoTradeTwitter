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

    _onEmptyInput = (event) => {
        this.setState({text: ''});
    }

    render() {
        return (<div className="SearchBar">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" className="SearchInput"  placeholder="Search..." value={this.state.text} onChange={this._onInputChange} />
            <FontAwesomeIcon className="faXmark" icon={faXmark} opacity={(Number)(this.state.text !== '')} />
        </div>);
    }


}

export default SearchBar;