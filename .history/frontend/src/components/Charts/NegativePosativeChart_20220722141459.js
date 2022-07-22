import React from "react";
import ReactApexChart from "react-apexcharts";

class NegativePosativeChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: props.data,
        options: {
            chart: {
                type: 'bar',
                height: 440,
                stacked: true
            },
            colors: ['#008FFB', '#FF4560'],
            plotOptions: {
                bar: {
                    horizontal: true,
                    barHeight: '80%',
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 1,
                colors: ["#fff"]
            },
            
            grid: {
                xaxis: {
                    lines: {
                        show: false
                    }
                }
            },
            yaxis: {
                min: -5,
                max: 5,
                title: {
                    // text: 'Age',
                },
            },
            tooltip: {
                shared: false,
                x: {
                    formatter: function (val) {
                        return val
                    }
                },
                y: {
                    formatter: function (val) {
                        return Math.abs(val) + "%"
                    }
                }
            },
            title: {
                text: 'Mauritius population pyramid 2011'
            },
            xaxis: {
                categories: 
                    ['0', '0-0.1', '0.1-0.2', '0.2-0.3', '0.3-0.4',  
                        '0.4-0.5', '0.5-0.6', '0.6-0.7', '0.7-0.8', '0.8-0.9','0.9-1', '1'],
                title: {
                    text: 'Percent'
                },
                labels: {
                    formatter: function (val) {
                        return Math.abs(Math.round(val)) + "%"
                    }
                }
            },
        },
        };
    }
    render() {
        return ( 
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={400} />
            </div> 
        );
    }
}

export default NegativePosativeChart;