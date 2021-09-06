import React, { Component } from 'react'

import Chart from "react-apexcharts";
export default class ProductChoicesStyleTypePercentageChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: this.props.productChoicesStyleTypeNumberSerise,
            options: {
                chart: {
                  type: 'bar',
                  height: 450,
                  stacked: true,
                  toolbar: {
                    show: true
                  },
                  zoom: {
                    enabled: true
                  }
                },
                responsive: [{
                  breakpoint: 480,
                    options: {
                      legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                      }
                  }
                }],
                plotOptions: {
                  bar: {
                    horizontal: false,
                    borderRadius: 10
                  },
                },
                xaxis: {
                  categories: ['Anklet / Ankle Bracelet', 'Bangle', 'Bead (gemstones)', 'Bolo', 'Chain', 'Charm', 'Cuff', 'Link', 'Tennis/ Line', 'Wrap','Religious','Station'],
  
                  title: {
                      text: "Style Type"
                    },
                },
                yaxis: {
                  title: {
                    text: "# of Choices "
                  },
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: -20
                },
               
                fill: {
                  opacity: 1
                }
              }
            }
    }
    render() {
        return (
            <div>
                 <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    width="100%"
                    height="500px"
                />
            </div>
        )
    }
}
