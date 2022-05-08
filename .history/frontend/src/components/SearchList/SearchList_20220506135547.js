import './SearchList.scss';
import PropTypes from 'prop-types';



const SearchList = ({getText,getoptionsList}) => (
    <div className="search-list">
        {console.log( getoptionsList().entries()}
    </div>
);

export default SearchList;


SearchList.propTypes = {
    getText: PropTypes.func.isRequired,
    getoptionsList: PropTypes.func.isRequired,

};