import _ from 'lodash';
import './SearchList.scss';
import PropTypes from 'prop-types';


function generateItem(){

}


const SearchList = ({getText,updateOptionsList}) => (
    <div className="search-list">
        {_.ggetText()}
    </div>
);

export default SearchList;


SearchList.propTypes = {
    getText: PropTypes.func.isRequired,
    updateOptionsList: PropTypes.func.isRequired,

};