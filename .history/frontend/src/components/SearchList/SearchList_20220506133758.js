import _ from 'lodash';
import './SearchList.scss';
import PropTypes from 'prop-types';


const SearchList = ({getText,updateOptionsList}) => (
    <div className="search-list">
        {getText()}
    </div>
);

export default SearchList;


SearchList.propTypes = {
    getText: PropTypes.func.isRequired,
    updateOptionsList: PropTypes.func.isRequired,

};