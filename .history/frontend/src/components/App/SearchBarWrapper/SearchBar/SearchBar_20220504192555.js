import './SearchBar.scss';
//import './
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faXmark} from '@fortawesome/free-solid-svg-icons';
import {Component} from 'react';


class SearchBar extends React.Component {

}


const SearchBar = ()=>(
    <div className="SearchBar">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" className="SearchInput" placeholder="Search..." />
        <FontAwesomeIcon icon={faXmark} />
    </div>
);

export default SearchBar;