import './ResultPage.scss';
import {Component} from 'react';
import PieChart from '../../Charts/PieChart';
class ResultPage extends Component {

    render(){
        return(
            <div>
                <PieChart/>
            </div>
        );
    }
}
export default ResultPage;

