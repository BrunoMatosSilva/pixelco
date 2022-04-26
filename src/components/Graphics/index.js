import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Container } from "./styles";

class Graphics extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'This mont',
                color: '#E03A45',
                data: [31, 40, 28, 51, 42, 109, 100]
            }, {
                name: 'Last mont',
                color: '#B5BCCD',
                data: [11, 32, 45, 32, 34, 52, 41]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'area',
                    toolbar: false
                },
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    enabled: false,
                    position: 'right'
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm',
                        color: '#000'
                    },

                },
            },


        };
    }

    render() {
        return (
            <Container>
                <section>
                    <h5>227,067</h5>
                </section>
                <div className="app">
                    <div className="row">
                        <div className="mixed-chart">

                            <Chart
                                options={this.state.options}
                                series={this.state.series}
                                type="area"
                                height={350}
                                width={950}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Graphics;