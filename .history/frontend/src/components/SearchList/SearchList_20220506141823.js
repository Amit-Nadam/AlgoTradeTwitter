import './SearchList.scss';
import PropTypes from 'prop-types';



const ListItem = ({text})=>(
    <li className="list-item">{text}</li>
)


const SearchList = ({getText,getoptionsList}) => (
    <div className="search-list">
        {getoptionsList().map((text,idx)=>
            {
                const word = getText(text)
                if(word.length > 0 && text.includes(word)){
                    return <ListItem text={text} key={idx}/>
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