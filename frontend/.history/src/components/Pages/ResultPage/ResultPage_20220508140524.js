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
        console.log(this.location.state.query);

        this.treeMapData = [
            {
                x: 'New Delhi',
                y: 218
            },
            {
                x: 'Kolkata',
                y: 149
            },
            {
                x: 'Mumbai',
                y: 184
            },
            {
                x: 'Ahmedabad',
                y: 55
            },
            {
                x: 'Bangaluru',
                y: 84
            },
            {
                x: 'Pune',
                y: 31
            },
            {
                x: 'Chennai',
                y: 70
            },
            {
                x: 'Jaipur',
                y: 30
            },
            {
                x: 'Surat',
                y: 44
            },
            {
                x: 'Hyderabad',
                y: 68
            },
            {
                x: 'Lucknow',
                y: 28
            },
            {
                x: 'Indore',
                y: 19
            },
            {
                x: 'Kanpur',
                y: 29
            }
        ];

    }

    render(){
        return(
            <div className="result-page">
                <TreeMapChart data={this.treeMapData} title="TreeMap11"/>
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

