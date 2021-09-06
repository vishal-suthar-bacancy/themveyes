import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts'
export default class ProductChoicesRangeNumberChart extends Component {
    constructor(props) {
        super(props);
        this.state = {

          HighChartConfig:{
              chart: {
                type: 'spline',
                inverted: false,
                scrollablePlotArea: {
                    minWidth: 3000,
                }
              },
              title: {
                text: ''
            },
           
            xAxis: {
                reversed: false,
              
                showLastLabel: false,
                categories: ['$0-$49','$50-$99','$100-$149','$150-$199','$200-$249','$250-$299','$300-$349','$350-$399','$400-$449','$450-$499','$500-$599','$600-$699','$700-$799','$800-$899','$900-$999','$1000-$1199','$1200-$1399','$1400-$1599','$1600-$1799','$2000-$2399','$2400-$2699','$2700-$2999','$3000-$3499','$3500-$3999','$4000-$4499','$4500-$4999','$5000-$5499','$5500-$5999','$6000-$6999','$7000-$7999','$8000-$8999','$9000-$9999','$10,000 and Over'],
                
            },
            yAxis: {
              title: {
                text: ''
            }
            },
            legend: {
                enabled: true,
                align: 'left',
               
            },
            tooltip: {
              backgroundColor: '#ffffff',
              borderColor: '#417DAB',
              borderRadius: 10,
              borderWidth: 3
            },
            plotOptions: {
                spline: {
                    marker: {
                        enable: false
                    }
                }
            },
            series: this.props.ProductChoicesRangeNumberSerise,
          },
        }
    }
   
    render() {
        return (
            <div>
              <ReactHighcharts config={this.state.HighChartConfig}  ref="chart"></ReactHighcharts>
               
            </div>
        )
    }
}
