import './SearchList.scss';
import PropTypes from 'prop-types';


const SearchList = ({getText,updateOptions}) => (
    <div className="search-list">
        {getText()}
    </div>
);

export default SearchList;


SearchList.propTypes = {
    getText: PropTypes.func.isRequired,
    updateOptions: PropTypes.func.isRequired,

};