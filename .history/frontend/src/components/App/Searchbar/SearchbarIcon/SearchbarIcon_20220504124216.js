// import styles
import './SearchbarIcon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/free-solid-svg-icons';

const SearchbarIcon = ()=>{
    return (
        <div className="SearchbarIcon">
            <FontAwesomeIcon icon="fas fa-search" />
        </div>
    );
};

export default SearchbarIcon;