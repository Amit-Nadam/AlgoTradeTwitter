import './SearchLine.scss';
import {Component} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faXmark} from '@fortawesome/free-solid-svg-icons';




function handleSearch(){

}

const SearchLine = ({searchFunc,changeTextToFunc})=>(
    <div className="SearchBarLine">
        <FontAwesomeIcon icon={faSearch} className="faSearch"
            onClick={handleSearch()}
            />
        <input type="text" className="SearchInput"  placeholder="Search..."
            // value={this.state.text} 
            onChange={handleChange()} 
            // onKeyDown={this._onKeyPress}
            />
        <FontAwesomeIcon className="faXmark" icon={faXmark} 
                // opacity={(Number)(this.state.text !== '')}
                // onClick={this._onEmptyInput}
                />
    </div>
);

SearchLine.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default SearchLine;
