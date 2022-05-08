import React from "react";
import ReactApexChart from "react-apexcharts";

class TreeMapChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        series: 
            [
                {
                    data: props.data
                }
            ],
            options: {
                legend: {
                    show: false
                },
                chart: {
                    height: 350,
                    type: 'treemap'
                },
                title: {
                    text: 'Basic Treemap'
                }
            },
        };
    }


    render() {
        return (
            <div id="chart">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="treemap" height={350} />
            </div>
        );
    }
}

export default TreeMapChart;
