import './SearchBar.scss';
//import './
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faXmark} from '@fortawesome/free-solid-svg-icons';
import {Component} from 'react';


class SearchBar extends Component {
    
    constructor(...args) {
        super(...args);
        this.state = {
            text: 'Search...',
        };
    }

    render() {
        return (<div className="SearchBar">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" className="SearchInput" placeholder="Search..." />
            <FontAwesomeIcon icon={faXmark} />
        </div>);
    }


}

export default SearchBar;