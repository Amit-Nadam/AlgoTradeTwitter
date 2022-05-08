import './SearchList.scss';
import PropTypes from 'prop-types';



const SearchList = ({getText,getoptionsList}) => (
    <div className="search-list">
        {getoptionsList().entries().map(([idx,text])=>
            <li>text</li>
        )}
    </div>
);

export default SearchList;


SearchList.propTypes = {
    getText: PropTypes.func.isRequired,
    getoptionsList: PropTypes.func.isRequired,

};