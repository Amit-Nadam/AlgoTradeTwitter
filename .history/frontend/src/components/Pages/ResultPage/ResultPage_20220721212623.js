import './ResultPage.scss';
import {Component} from 'react';
import PieChart from '../../Charts/PieChart';
import NegativePosativeChart from '../../Charts/NegativePosativeChart';
import TreeMapChart from '../../Charts/TreeMapChart';
import TimeGraph from '../../Charts/TimeGraph';
import {useLocation} from 'react-router-dom';
import axios from 'axios';

class ResultPage extends Component {

    constructor(...args) {
        super(...args);
        this.location = this.props.location;
        this.state = {
            after_load: null,
        };
        axios.get(`http://127.0.0.1:5000/analysis`,{params: {symbol: this.props.symbol}})
        .then(response =>{
            console.log(response.data["pie"]);
            this.treeMapData = response.data.treeMap;
            this.positiveData = response.data.positive;
            this.pieData = response.data.pie;
            this.timeData = response.data.time;
            this.setState({
                after_load: 
                <div className="result-page">
                    {/* <TreeMapChart data={this.treeMapData} title="TreeMap11"/> */}
                    {/* <NegativePosativeChart data={this.positiveData}/> */}
                    <PieChart data ={this.pieData}/>
                    {/* <TimeGraph data={this.timeData}/> */}
                </div>
            });
        });
    }
    render(){return(this.state.after_load);}
}
export default function(props){
    const location = useLocation();
    return <ResultPage location={location} symbol={location.state.query} />
}