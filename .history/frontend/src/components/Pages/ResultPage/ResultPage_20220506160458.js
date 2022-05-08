import './ResultPage.scss';
import {Component} from 'react';
import PieChart from '../../Charts/PieChart';
import NegativePosativeChart from '../../Charts/NegativePosativeChart';



class ResultPage extends Component {

    render(){
        return(
            <div className="result-page">
                <PieChart/>
                <PieChart/>
                <NegativePosativeChart/>

            </div>
        );
    }
}
export default ResultPage;

