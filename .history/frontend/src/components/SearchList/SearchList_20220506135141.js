import _ from 'lodash';
import './SearchList.scss';
import PropTypes from 'prop-types';


function  generateItem(itemInfo){
    console.log(itemInfo)
    // return <div></div>
}


const SearchList = ({getText,getoptionsList}) => (
    <div className="search-list">
        {_.map(getoptionsList(),generateItem)}
    </div>
);

export default SearchList;


SearchList.propTypes = {
    getText: PropTypes.func.isRequired,
    getoptionsList: PropTypes.func.isRequired,

};