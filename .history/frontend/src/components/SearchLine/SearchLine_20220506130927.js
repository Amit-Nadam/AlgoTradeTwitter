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
            onChange={(e)=>updateText(e.target.value)} 
            // onKeyDown={this._onKeyPress}
            />
        <FontAwesomeIcon className="faXmark" icon={faXmark} 
                opacity={(Number)(getText() !== '')}
                onClick={()=>updateText('')}
                />
    </div>
);

SearchLine.propTypes = {
    search: PropTypes.func.isRequired,
    updateText: PropTypes.func.isRequired,
    getText: PropTypes.func.isRequired,
};

export default SearchLine;
