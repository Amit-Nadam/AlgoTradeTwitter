import './SearchLine.scss';
import {Component} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faXmark} from '@fortawesome/free-solid-svg-icons';



const SearchLine = ()=>(
<div className="SearchBarLine">
                <FontAwesomeIcon icon={faSearch} className="faSearch"
                    onClick={this.props.handleSearch}
                    />
                <input type="text" className="SearchInput"  placeholder="Search..."
                    // value={this.state.text} 
                    onChange={this.props.handleChange} 
                    // onKeyDown={this._onKeyPress}
                    />
                <FontAwesomeIcon className="faXmark" icon={faXmark} 
                        // opacity={(Number)(this.state.text !== '')}
                        // onClick={this._onEmptyInput}
                        />
            </div>
);

SearchLine.propTypes = {
    handleSearch: PropTypes.func,
    handleChange: PropTypes.func,
};

export default SearchLine;
