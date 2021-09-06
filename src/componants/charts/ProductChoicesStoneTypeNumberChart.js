import React, { Component } from 'react'

import Chart from "react-apexcharts";
export default class ProductChoicesStoneTypeNumberChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: this.props.productChoicesStoneTypeNumberSerise,
            options: {
                chart: {
                  stacked: true,
                },
                plotOptions: {
                  bar: {
                    horizontal: true,
                  },
                },
                stroke: {
                  width: 1,
                  colors: ['#fff']
                },
                
                xaxis: {
                  categories: ['alexandrite','all metal', 'amethyst','aquamarine','citrine','crystal','cubic zirconia','diamond','emerald','garnet','jade','morganite','onyx','opal','pearl','peridot','ruby','sapphire','tanzanite','topaz','aventurine','carnelian','moissanite','other','quartz','birth stone','agate','spinel',"tiger's eye"],
  
                  title: {
                      text: "# of Choices "
                    },
                  
                  labels: {
                    formatter: function (val) {
                      return val
                    }
                  }
                },
                yaxis: {
                  title: {
                    text: "Stone Type"
                  },
                },
                tooltip: {
                  y: {
                    formatter: function (val) {
                      return val + " Choices"
                    }
                  }
                },
                fill: {
                  opacity: 1
                },
                legend: {
                  position: 'top',
                  horizontalAlign: 'left',
                  offsetX: -20
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
                />
            </div>
        )
    }
}
