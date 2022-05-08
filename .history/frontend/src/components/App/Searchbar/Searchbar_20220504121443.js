// import components
import SearchbarIcon from './SearchbarIcon/SearchbarIcon';
import SearchbarInput from './SearchbarInput/SearchbarInput';


// import styles
import './Searchbar.scss';

const Searchbar = ()=>{
    return(
        <div className="SearchbarWrapper">
            <SearchbarIcon/>
            <SearchbarInput/>
        </div>
    );
};

export default Searchbar;