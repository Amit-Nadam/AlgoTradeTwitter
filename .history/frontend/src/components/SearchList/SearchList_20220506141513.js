import './SearchList.scss';
import PropTypes from 'prop-types';



const ListItem = ({text})=>(
    <li >
        {text}
    </li>
)


const SearchList = ({getText,getoptionsList}) => (
    <div className="search-list">
        {getoptionsList().map((text,idx)=>
            {
                if(text in getText()){
                    <ListItem text={text} key={idx}/>
                }
            }
            
        )}
    </div>
);

export default SearchList;


SearchList.propTypes = {
    getText: PropTypes.func.isRequired,
    getoptionsList: PropTypes.func.isRequired,
};