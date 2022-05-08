import './SearchLine.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faXmark} from '@fortawesome/free-solid-svg-icons';



function handleSearch(event,searchFunc){
    searchFunc();
}
function handleChange(event,changeTextToFunc){
    changeTextToFunc(event.target.value);
}

const SearchLine = ({searchFunc,changeTextToFunc})=>(
    <div className="SearchBarLine">
        <FontAwesomeIcon icon={faSearch} className="faSearch"
            onClick={(e) => handleSearch(e,searchFunc)}
            />
        <input type="text" className="SearchInput"  placeholder="Search..."
            // value={this.state.text} 
            onChange={(e) => handleChange(e,changeTextToFunc)} 
            // onKeyDown={this._onKeyPress}
            />
        <FontAwesomeIcon className="faXmark" icon={faXmark} 
                // opacity={(Number)(this.state.text !== '')}
                // onClick={this._onEmptyInput}
                />
    </div>
);

SearchLine.propTypes = {
    searchFunc: PropTypes.func.isRequired,
    changeTextToFunc: PropTypes.func.isRequired,
};

export default SearchLine;
