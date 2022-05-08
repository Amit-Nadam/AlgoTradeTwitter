import './SearchLine.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faXmark} from '@fortawesome/free-solid-svg-icons';



handleSearch= (e) => (searchFunc)=>{
    searchFunc();
}
function handleChange(changeTextToFunc){
    changeTextToFunc();
}

const SearchLine = ({searchFunc,changeTextToFunc})=>(
    <div className="SearchBarLine">
        <FontAwesomeIcon icon={faSearch} className="faSearch"
            onClick={(e) => handleSearch(searchFunc)}
            />
        <input type="text" className="SearchInput"  placeholder="Search..."
            // value={this.state.text} 
            onChange={(e) => handleChange(changeTextToFunc)} 
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
