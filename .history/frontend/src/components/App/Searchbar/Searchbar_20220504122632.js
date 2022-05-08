// import components
import _ from './SearchbarWrapper/SearchbarWrapper';
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