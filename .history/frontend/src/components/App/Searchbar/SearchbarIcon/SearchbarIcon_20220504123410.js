// import styles
import './SearchbarIcon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const SearchbarIcon = ()=>{
    return (
        <div className="SearchbarIcon">
        <FontAwesomeIcon icon={faCoffee} />
        </div>
    );
};

export default SearchbarIcon;