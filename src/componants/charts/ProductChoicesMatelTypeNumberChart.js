import React, { Component } from 'react'

import Chart from "react-apexcharts";
export default class ProductChoicesMatelTypeChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: this.props.productChoicesMatelTypeNumberSerise,
            options: {
                chart: {
                  stacked: false,
                  height: 350,
                  zoom: {
                    enabled: false
                  },
                },
                dataLabels: {
                  enabled: false
                },
                markers: {
                  size: 0,
                },
                fill: {
                  type: 'gradient',
                  gradient: {
                      shadeIntensity: 1,
                      inverseColors: false,
                      opacityFrom: 0.45,
                      opacityTo: 0.05,
                      stops: [20, 100, 100, 100]
                    },
                },
                yaxis: {
                  labels: {
                      style: {
                          colors: '#8e8da4',
                      },
                      
                  },
                  axisBorder: {
                      show: false,
                  },
                  axisTicks: {
                      show: false
                  }
                },
                xaxis: {
                    categories: ['cobalt','palladium','platinaire','platinum','stainless steel','sterling silver','tantalum','titanium','tungsten','gold','pandora rose','sil+sil cop blnd 14krg plating'],
                },
                tooltip: {
                  shared: true
                },
                legend: {
                  position: 'top',
                  horizontalAlign: 'left',
                  offsetX: -20
                }
              },
            }
    }
    render() {
        return (
            <div>
                 <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="area"
                    width="100%"
                    height="500px"
                />
            </div>
        )
    }
}
