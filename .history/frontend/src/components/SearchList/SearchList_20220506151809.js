import './SearchList.scss';
import PropTypes from 'prop-types';



const ListItem = ({text,updateSearchText})=>(
    <li className="list-item" onClick={(e)=> console.log('fuck')}>{text}</li>
)
ListItem.propTypes = {
    text: PropTypes.string.isRequired,
};

const SearchList = ({getText,getoptionsList,updateText}) => (
    <div className="search-list">
        {getoptionsList().map((text,idx)=>
            {
                const word = getText(text)
                if(word.length > 0 && text.includes(word) && word!== text){
                    return <ListItem    text={text} key={idx} updateSearchText={updateSearchText}
                                        />
                }
            }
            
        )}
    </div>
);
export default SearchList;
SearchList.propTypes = {
    getText: PropTypes.func.isRequired,
    getoptionsList: PropTypes.func.isRequired,
    updateText: PropTypes.func.isRequired,
};