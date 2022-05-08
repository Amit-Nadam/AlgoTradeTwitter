import './SearchList.scss';
import PropTypes from 'prop-types';


const SearchList = ({getText}) => (
    <div className="search-list">
        {getText()}
    </div>
);

export default SearchList;


SearchList.propTypes = {
    getText: PropTypes.func.isRequired,
};