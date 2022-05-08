// import styles
import './SearchbarIcon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const SearchbarIcon = ()=>{
    return (
        <div className="SearchbarIcon">
            <FontAwesomeIcon className="FaSearch" icon={faSearch}/>
        </div>
    );
};

export default SearchbarIcon;