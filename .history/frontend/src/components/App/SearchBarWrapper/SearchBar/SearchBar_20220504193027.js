import './SearchBar.scss';
//import './
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScaleRight, faSearch,faXmark} from '@fortawesome/free-solid-svg-icons';
import {Component} from 'react';


class SearchBar extends Component {
    
    constructor(...args) {
        super(...args);
        this.state = {
            text: 'Search...',
        };
    }

    _onInputChange = (e) => (value){
        this.setState({
            name: value
       });
    }

    render() {
        return (<div className="SearchBar">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" className="SearchInput" value={this.state.text} />
            <FontAwesomeIcon icon={faXmark} />
        </div>);
    }


}

export default SearchBar;