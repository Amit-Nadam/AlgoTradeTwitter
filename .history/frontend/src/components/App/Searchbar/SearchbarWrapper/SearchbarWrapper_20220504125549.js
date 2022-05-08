// import components
import SearchbarIcon from '../SearchbarIcon/SearchbarIcon';
import SearchbarInput from '../SearchbarInput/SearchbarInput';
// import style
import './SearchbarWrapper.scss';

const SearchbarWrapper = () =>(
    <div className="SearchbarWrapper">
        <SearchbarInput/>
        <SearchbarIcon/>
    </div>

);

export default SearchbarWrapper;