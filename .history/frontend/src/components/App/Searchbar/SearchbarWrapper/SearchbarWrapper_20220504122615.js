// import components
import SearchbarIcon from './SearchbarIcon/SearchbarIcon';
import SearchbarInput from './SearchbarInput/SearchbarInput';
// import style
import './SearchbarWrapper.scss';

const SearchbarWrapper = () =>(
    <div className="SearchbarWrapper">
        <SearchbarIcon/>
        <SearchbarInput/>
    </div>

);

export default SearchbarWrapper;