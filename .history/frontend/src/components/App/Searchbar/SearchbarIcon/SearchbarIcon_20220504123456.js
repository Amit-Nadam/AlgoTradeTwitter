// import styles
import './SearchbarIcon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchengin} from '@fortawesome/free-solid-svg-icons'


const SearchbarIcon = ()=>{
    return (
        <div className="SearchbarIcon">
            <FontAwesomeIcon icon={faSearchengin} />
        </div>
    );
};

export default SearchbarIcon;