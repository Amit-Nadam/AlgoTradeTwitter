import './ResultPage.scss';
import {Component} from 'react';
import PieChart from '../../Charts/PieChart';
import NegativePosativeChart from '../../Charts/NegativePosativeChart';
import TreeMapChart from '../../Charts/TreeMapChart';
import TimeGraph from '../../Charts/TimeGraph';


class ResultPage extends Component {

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
export default ResultPage;

