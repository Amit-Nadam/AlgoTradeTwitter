import _ from 'lodash';
import './SearchList.scss';
import PropTypes from 'prop-types';


const  generateItem= (itemInfo,onClickHandler)=>{
    console.log(itemInfo)
    return <button>itemInfo</button>
}


const SearchList = ({getText,getoptionsList}) => (
    <div className="search-list">
        {_.map(getoptionsList,generateItem)}
    </div>
);

export default SearchList;


SearchList.propTypes = {
    getText: PropTypes.func.isRequired,
    getoptionsList: PropTypes.func.isRequired,

};