import './SearchList.scss';
import PropTypes from 'prop-types';



const ListItem = ({text,idx})=>(
    <li key={idx}>
        {text}
    </li>
)


const SearchList = ({getText,getoptionsList}) => (
    <div className="search-list">
        {getoptionsList().map((text,idx)=>
            <ListItem text={text} key={idx}/>
        )}
    </div>
);

export default SearchList;


SearchList.propTypes = {
    getText: PropTypes.func.isRequired,
    getoptionsList: PropTypes.func.isRequired,

};