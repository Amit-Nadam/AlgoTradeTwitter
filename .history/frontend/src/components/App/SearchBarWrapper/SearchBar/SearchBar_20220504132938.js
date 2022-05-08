import './SearchBar.scss';
//import './
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';

const SearchBar = ()=>(
    <div className="SearchBar">
        <FontAwesomeIcon icon={faSearch} />
    </div>
);

export default SearchBar;