import './SearchList.scss';
import PropTypes from 'prop-types';



const ListItem = ({text,key})=>(
    <li key={idx}>{text}</li>
)

function generateListItem(text,key){
    return
}

const SearchList = ({getText,getoptionsList}) => (
    <div className="search-list">
        {getoptionsList().map((text,idx)=>
           
        )}
    </div>
);

export default SearchList;


SearchList.propTypes = {
    getText: PropTypes.func.isRequired,
    getoptionsList: PropTypes.func.isRequired,

};