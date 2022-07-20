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
        }
        axios({
            method: "GET",
            url:"http://127.0.0.1:5000/analysis",
        }).then(response =>{
            this.treeMapData = response.data.treeMap;

            this.positiveData = response.data.positive;
    
            this.pieData = response.data.pie;
    
            this.timeData = response.data.time;
            console.log(response)
            this.state.after_load = 
                <div className="result-page">
                    <TreeMapChart data={this.treeMapData} title="TreeMap11"/>
                    <NegativePosativeChart data={this.positiveData}/>
                    <PieChart data ={this.pieData}/>
                    <TimeGraph data={this.timeData}/>
                </div>
        });

    }

    render(){
        return(
            this.after_load
        );
    }
}
export default function(props){
    const location = useLocation();
    return <ResultPage location={location}/>
}

