import './ResultPage.scss';
import {Component} from 'react';
import PieChart from '../../Charts/PieChart';
import NegativePosativeChart from '../../Charts/NegativePosativeChart';
import TreeMapChart from '../../Charts/TreeMapChart';
import TimeGraph from '../../Charts/TimeGraph';
import {useLocation} from 'react-router-dom';


class ResultPage extends Component {

    constructor(...args) {
        super(...args);
        this.location = this.props.location;
    }

    render(){
        return(
            <div className="result-page">
                <TreeMapChart/>
                <NegativePosativeChart/>
                <PieChart/>
                <TimeGraph/>
            </div>
        );
    }
}
export default function(props){
    const location = useLocation();
    return <ResultPage location={location}/>
}

