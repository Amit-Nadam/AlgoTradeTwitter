import './SearchLine.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faXmark} from '@fortawesome/free-solid-svg-icons';



const SearchLine = ({search,updateText,getText})=>(
    <div className="SearchBarLine">
        <FontAwesomeIcon icon={faSearch} className="faSearch"
            onClick={(_)=>search()}
            />
        <input type="text" className="SearchInput"  placeholder="Search..."
            value={getText()} 
            onChange={updateText} 
            // onKeyDown={this._onKeyPress}
            />
        <FontAwesomeIcon className="faXmark" icon={faXmark} 
                // opacity={(Number)(this.state.text !== '')}
                // onClick={this._onEmptyInput}
                />
    </div>
);

SearchLine.propTypes = {
    search: PropTypes.func.isRequired,
    updateText: PropTypes.func.isRequired,
    getText: PropTypes.func.isRequired,
};

export default SearchLine;
