import './SearchLine.scss';
import {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faXmark} from '@fortawesome/free-solid-svg-icons';

export default () =>(
        <div className="SearchBarLine">
            <FontAwesomeIcon icon={faSearch} className="faSearch"
                // onClick={this._search}
                />
            <input type="text" className="SearchInput"  placeholder="Search..."
                // value={this.state.text} 
                // onChange={this._onInputChange} 
                // onKeyDown={this._onKeyPress}
                />
            <FontAwesomeIcon className="faXmark" icon={faXmark} 
                    // opacity={(Number)(this.state.text !== '')}
                    // onClick={this._onEmptyInput}
                    />
        </div>
);

