import React, { Component} from 'react';
import {Container, Nav, Card, Form, Button, Tab} from 'react-bootstrap';
import Layout from '../Layout';
import * as data  from '../componants/common/common-data';
import { CalenderIcon, DownloadIcon, PrinterIcon } from '../componants/common/icons';
import ReactToPrint from 'react-to-print';
import Calendar from "react-range-calendar";
import ProductChoicesRangeNumberChart from '../componants/charts/ProductChoicesRangeNumberChart';
import ProductChoicesRangePercentageChart from '../componants/charts/ProductChoicesRangePercentageChart';
import ProductChoicesMatelTypePercentageChart from '../componants/charts/ProductChoicesMatelTypePercentageChart';
import ProductChoicesMatelTypeNumberChart from '../componants/charts/ProductChoicesMatelTypeNumberChart';
import ProductChoicesStoneTypeNumberChart from '../componants/charts/ProductChoicesStoneTypeNumberChart';
import ProductChoicesStoneTypePercentageChart from '../componants/charts/ProductChoicesStoneTypePercentageChart';
import ProductChoicesStyleTypeNumberChart from '../componants/charts/ProductChoicesStyleTypeNumberChart';
import ProductChoicesStyleTypePercentageChart from '../componants/charts/ProductChoicesStyleTypePercentageChart';



  class SearhResultChart extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
           values: [50],
           productChoicesStyleTypeNumberSerise: [{
                name: 'Kay',
                data: [105,94,27,277,66,22,44,75,15,14,0,0]
              }, {
                name: 'Benbridge',
                data: [0,120,21,24,51,31,29,30,19,2,1,3]
              },  {
                name: 'Helzberg',
                data: [4,29,0,82,12,0,18,11,149,0,0,0]
            }],
           
            productChoicesStoneTypeNumberSerise: [{
              name: 'Kay',
              data: [0,495,33,19,5,5,0,536,7,5,0,0,7,12,16,12,20,54,2,34,0,0,0,0,1,46,0,0,0]
            }, {
              name: 'Benbridge',
              data: [0,239,1,1,0,0,7,76,1,1,0,0,4,0,22,1,2,9,1,1,0,0,0,0,6,0,1,1,1]
            },  {
              name: 'Helzberg',
              data: [0,59,9,4,0,1,1,135,5,1,0,0,0,9,15,2,12,55,7,5,1,1,3,1,1,0,0,0,0]
            }],
            ProductChoicesRangeNumberSerise: [{
                name: "Kay",
                data: [82,134,204,172,67,85,53,62,33,39,50,34,34,27,27,19,26,20,20,20,16,11,12,17,12,0,5,5,3,7,4,2,5],
                color: '#0066A7',
                y: 0
              },
              {
                name: "Benbridge",
                data: [4,68,36,23,13,7,4,13,5,19,13,12,7,10,15,8,14,7,8,17,6,14,8,6,7,1,9,3,2,7,2,3,0],
                color: '#AFCF75',
                y: 0
              },
              {
                name: "Helzberg",
                data: [0,59,9,4,0,1,1,135,5,1,0,0,0,9,15,2,12,55,7,5,1,1,3,1,1,0,0,0,0,0,0,0,0],
                color: '#F1B0B1',
                y: 0
              }
            ],
            productChoicesMatelTypeNumberSerise: [{
                name: "Kay",
                data: [0,0,0,0,164,544,0,6,7,43,0,0]
              },
              {
                name: "Benbridge",
                data: [0,4,0,0,9,106,0,0,1,0,15,1]
              },
              {
                name: "Helzberg",
                data: [0,0,0,0,1,178,0,0,0,2,0,0]
            },],
            visible: false,
            dateRange: [new Date("11/10/2019"), new Date("11/18/2019")],
        };
        
    }
 
    render() {
      
      
        return (
            <Layout >
                <section ref={el => (this.componentRef = el)} className="chart-result-section">
                <Container fluid className="d-flex justify-content-between align-items-center ">
                    <h1 className="heading4 mb-0">Ruby_Lab-Grown Ruby_Karat Gold_white</h1>
                    <Nav className="align-items-center">
                        <Nav.Item>
                            <ReactToPrint trigger={() => {
                                return <Button type="button" variant="none" className="p-0" ><PrinterIcon/></Button>;
                            }} content={() => this.componentRef}/>
                        </Nav.Item>

                        <Nav.Item>
                            <Button type="button" variant="none" className="p-0"><DownloadIcon/></Button>
                        </Nav.Item>
                        <Nav.Item className="position-relative">
                            <Button type="button" variant="none" className="p-0"    onClick={() => {
                              this.setState({ visible: !this.state.visible  });
                            }}><CalenderIcon/></Button>
                            {this.state.visible === true ? <>
                            <Card className="calendar-popup card">
                              <Card.Body>
                              <Calendar
                                  visible="true"
                                  dateRange={this.state.dateRange}
                                  baseColor="#417DAB"
                                  hoverBackgroundColor="#417DAB"
                                  weekendsDaysColor="#ccc"
                                  disabledColor="rgb(220 220 220)"
                                  onDateClick={(minDate, maxDate) => {
                                    this.setState({ dateRange: [minDate, maxDate] });
                                  }} type="free-range" /> 
                                </Card.Body>
                                <Card.Footer >
                                  <Button type="button" variant="primary"  className="m-2 pe-4 w-100" onClick={() => {
                                      this.setState({ visible: !this.state.visible  });
                                    }}>Ok</Button>
                                  </Card.Footer>
                                </Card>
                          </> : ""}
                        </Nav.Item>
                        <Nav.Item>
                        <Form.Select className="custom-select-box">
                                {data.Retailer.map((Retailer) =><option value={Retailer}>{Retailer}</option>)}
                          </Form.Select>
                        </Nav.Item>
                    </Nav>
                </Container>
              
               <Container fluid>
                  <Card className="my-4 card-shadow chart-card">
                    <Card.Header className="border-0 bg-none">
                      <span className="heading5 pt-2 d-block  mb-0">Product Choices/ Range</span>
                    </Card.Header>
                    <Card.Body>
                      <Tab.Container id="left-tabs-example" defaultActiveKey="NumberOfChoices">
                          <div className="d-flex justify-content-between align-items-center ">
                              <Nav variant="pills" className="">
                                <Nav.Item>
                                  <Nav.Link eventKey="NumberOfChoices"> Number of choices</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey="PercentageOfChoices">% of choices</Nav.Link>
                                </Nav.Item>
                              </Nav>
                          </div>
                          <Tab.Content className="mt-4">
                            <Tab.Pane eventKey="NumberOfChoices">
                                <ProductChoicesRangeNumberChart ProductChoicesRangeNumberSerise={this.state.ProductChoicesRangeNumberSerise}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="PercentageOfChoices">
                                <ProductChoicesRangePercentageChart ProductChoicesRangeNumberSerise={this.state.ProductChoicesRangeNumberSerise}/>
                            </Tab.Pane>
                          </Tab.Content>
                      </Tab.Container>
                   
                        </Card.Body>
                  </Card>
                  <Card className="my-4 card-shadow chart-card">
                    <Card.Header className="border-0 bg-none">
                      <span className="heading5 pt-2 d-block  mb-0">Product Choices/ Matel Type</span>
                    </Card.Header>
                    <Card.Body>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="MetelTypeNumberOfChoices">
                            <div className="d-flex justify-content-between align-items-center ">
                                <Nav variant="pills" className="">
                                  <Nav.Item>
                                    <Nav.Link eventKey="MetelTypeNumberOfChoices">Number of choices</Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                    <Nav.Link eventKey="MetelTypePercentageOfChoices">% of choices</Nav.Link>
                                  </Nav.Item>
                                </Nav>
                            </div>
                            <Tab.Content className="mt-4">
                              <Tab.Pane eventKey="MetelTypeNumberOfChoices"> 
                                  <ProductChoicesMatelTypeNumberChart productChoicesMatelTypeNumberSerise={this.state.productChoicesMatelTypeNumberSerise}/>
                              </Tab.Pane>
                              <Tab.Pane eventKey="MetelTypePercentageOfChoices">
                                <ProductChoicesMatelTypePercentageChart productChoicesMatelTypeNumberSerise={this.state.productChoicesMatelTypeNumberSerise}/>
                            </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                      </Card.Body>
                  </Card>
                  <Card className="my-4 card-shadow chart-card">
                    <Card.Header className="border-0 bg-none">
                      <span className="heading5 pt-2 d-block  mb-0">Product Choices/ Stone Type</span>
                    </Card.Header>
                    <Card.Body>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="NumberOfChoices">
                            <div className="d-flex justify-content-between align-items-center ">
                                <Nav variant="pills" className="">
                                  <Nav.Item>
                                    <Nav.Link eventKey="NumberOfChoices">Number of choices</Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                    <Nav.Link eventKey="PercentageOfChoices">% of choices</Nav.Link>
                                  </Nav.Item>
                                </Nav>
                            </div>
                            <Tab.Content className="mt-4">
                              <Tab.Pane eventKey="NumberOfChoices"> 
                                  <ProductChoicesStoneTypeNumberChart productChoicesStoneTypeNumberSerise={this.state.productChoicesStoneTypeNumberSerise}/>
                              </Tab.Pane>
                              <Tab.Pane eventKey="PercentageOfChoices">
                                <ProductChoicesStoneTypePercentageChart productChoicesStoneTypeNumberSerise={this.state.productChoicesStoneTypeNumberSerise}/>
                            </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                      </Card.Body>
                  </Card>
                  <Card className="my-4 card-shadow chart-card">
                    <Card.Header className="border-0 bg-none">
                      <span className="heading5 pt-2 d-block  mb-0">Product Choices/ Style</span>
                    </Card.Header>
                    <Card.Body>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="NumberOfChoices">
                            <div className="d-flex justify-content-between align-items-center ">
                                <Nav variant="pills" className="">
                                  <Nav.Item>
                                    <Nav.Link eventKey="NumberOfChoices">Number of choices</Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                    <Nav.Link eventKey="PercentageOfChoices">% of choices</Nav.Link>
                                  </Nav.Item>
                                </Nav>
                            </div>
                            <Tab.Content className="mt-4">
                              <Tab.Pane eventKey="NumberOfChoices"> 
                                  <ProductChoicesStyleTypeNumberChart productChoicesStyleTypeNumberSerise={this.state.productChoicesStyleTypeNumberSerise}/>
                              </Tab.Pane>
                              <Tab.Pane eventKey="PercentageOfChoices">
                                <ProductChoicesStyleTypePercentageChart productChoicesStyleTypeNumberSerise={this.state.productChoicesStyleTypeNumberSerise}/>
                            </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                      </Card.Body>
                  </Card>
                    
                   
                </Container>
               </section>
              </Layout>
        )
    }
}

export default (SearhResultChart)