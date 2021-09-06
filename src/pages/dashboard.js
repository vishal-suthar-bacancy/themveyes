import React, { Component,useState } from 'react';
import {Container, Row, Col, Nav, Card, Form,OverlayTrigger, Tooltip} from 'react-bootstrap';
import Layout from '../Layout';
import {Link} from "react-router-dom";
import * as data  from '../componants/common/common-data';
import { Range,getTrackBackground } from 'react-range';
import { InfoIcon } from '../componants/common/icons';
const STEP = 0.1;
const MIN = 0;
const MAX = 10000;
  
  
  function RangeChart(props) {
    
  const [values, setValues] = useState([500, 1500])
  return(
    <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => {
          setValues(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%'
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '7px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,
                  colors: ['#F7F7F7 ', '#417DAB', '#F7F7F7 '],
                  min: MIN,
                  max: MAX,
                  rtl:false,
                }),
                alignSelf: 'center'
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '20px',
              width: '20px',
              borderRadius: '50px',
              backgroundColor: '#417DAB ',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 2px 6px #417DAB',
              outline:"none"
            }}
          >
            
              <span style={{
              ...props.style,
              position:"absolute",
              top:"30px",
              padding: '7px 20px',
              borderRadius: '5px',
              backgroundColor: '#417DAB ',
              display: 'flex',
              fontSize:'13px',
              color:'#ffffff',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 2px 6px #417DAB'
            }}>${values[index].toFixed(1)}</span>
          </div>
        )}
      />
                                        )
}

  class Dashboard extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
           values: [50],
            
        }
        }

    render() {
      
        return (
            <Layout>
              <section className="search-filter-section">              
                <Container fluid className="p-4">
                  <Card className="card-shadow border py-4">
                        <Card.Body className="">
                            <h1 className="heading4 text-primary my-2 text-center">Product Search</h1>
                            <p className="label-text text-center mb-4">Please input jewellery name and we will show you the analytics for your search.</p>
                            <Form method="post" className="p-4">
                                <Row>
                                    <Col lg={3}>
                                    <Form.Group className="mb-3 form-group">
                                      <Form.Label className="label-text ">Gender      
                                      <OverlayTrigger  key="auto" placement="auto" overlay={
                                            <Tooltip>
                                              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            </Tooltip>
                                          }
                                        >
                                        <span className="ms-1"><InfoIcon/></span>
                                      </OverlayTrigger>
                                    </Form.Label>
 
                                        <Form.Select>
                                              {data.gender.map((gender) =><option key={gender} value={gender}>{gender}</option>)}
                                        </Form.Select>
                                    </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3 form-group">
                                            <Form.Label className="label-text ">Metal
                                              <OverlayTrigger  key="auto" placement="auto" overlay={
                                                    <Tooltip>
                                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    </Tooltip>
                                                  }
                                                >
                                                <span className="ms-1"><InfoIcon/></span>
                                              </OverlayTrigger>
                                            </Form.Label>
                                            <Form.Select>
                                              {data.Matel.map((Matel) =><option key={Matel} value={Matel}>{Matel}</option>)}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3 form-group">
                                            <Form.Label className="label-text ">Jewelry
                                              <OverlayTrigger  key="auto" placement="auto" overlay={
                                                    <Tooltip>
                                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    </Tooltip>
                                                  }
                                                >
                                                <span className="ms-1"><InfoIcon/></span>
                                              </OverlayTrigger>
                                            </Form.Label>
                                            <Form.Select>
                                              <option value="-1" selected disabled>Select...</option>
                                              {data.Jewelry.map((Jewelry) =><option key={Jewelry} value={Jewelry}>{Jewelry}</option>)}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3 form-group">
                                            <Form.Label className="label-text ">Metal color
                                              <OverlayTrigger  key="auto" placement="auto" overlay={
                                                    <Tooltip>
                                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    </Tooltip>
                                                  }
                                                >
                                                <span className="ms-1"><InfoIcon/></span>
                                              </OverlayTrigger>
                                            </Form.Label>
                                            <Form.Select>
                                              <option value="-1" selected disabled>Select...</option>
                                              {data.MatelColor.map((MatelColor) =><option key={MatelColor} value={MatelColor}>{MatelColor}</option>)}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3 form-group">
                                            <Form.Label className="label-text ">Stone
                                              <OverlayTrigger  key="auto" placement="auto" overlay={
                                                    <Tooltip>
                                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    </Tooltip>
                                                  }
                                                >
                                                <span className="ms-1"><InfoIcon/></span>
                                              </OverlayTrigger>
                                            </Form.Label>
                                            <Form.Select>
                                              <option value="-1" selected disabled>Select...</option>
                                              {data.Stone.map((Stone) =><option key={Stone} value={Stone}>{Stone}</option>)}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3 form-group">
                                            <Form.Label className="label-text ">Style
                                              <OverlayTrigger  key="auto" placement="auto" overlay={
                                                    <Tooltip>
                                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    </Tooltip>
                                                  }
                                                >
                                                <span className="ms-1"><InfoIcon/></span>
                                              </OverlayTrigger>
                                            </Form.Label>
                                            <Form.Select>
                                              <option value="-1" selected disabled>Select...</option>
                                              {data.Style.map((Style) =><option key={Style} value={Style}>{Style}</option>)}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3 form-group">
                                            <Form.Label className="label-text ">Origin
                                              <OverlayTrigger  key="auto" placement="auto" overlay={
                                                    <Tooltip>
                                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    </Tooltip>
                                                  }
                                                >
                                                <span className="ms-1"><InfoIcon/></span>
                                              </OverlayTrigger>
                                            </Form.Label>
                                            <Form.Select>
                                              <option value="-1" selected disabled>Select...</option>
                                              {data.Origin.map((Origin) =><option key={Origin} value={Origin}>{Origin}</option>)}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3 form-group">
                                            <Form.Label className="label-text ">Channel
                                              <OverlayTrigger  key="auto" placement="auto" overlay={
                                                    <Tooltip>
                                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    </Tooltip>
                                                  }
                                                >
                                                <span className="ms-1"><InfoIcon/></span>
                                              </OverlayTrigger>
                                            </Form.Label>
                                            <Form.Select>
                                              <option value="-1" selected disabled>Select...</option>
                                              {data.Channel.map((Channel) =><option key={Channel}  value={Channel}>{Channel}</option>)}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3 form-group">
                                            <Form.Label className="label-text ">Cttw
                                              <OverlayTrigger  key="auto" placement="auto" overlay={
                                                    <Tooltip>
                                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    </Tooltip>
                                                  }
                                                >
                                                <span className="ms-1"><InfoIcon/></span>
                                              </OverlayTrigger>
                                            </Form.Label>
                                            <Form.Select>
                                              <option value="-1" selected disabled>Select...</option>
                                              {[...Array(data.Cttw)].map((elementInArray, i) => ( 
                                                    <option  value={i+1} key={i}> {i+1} </option> 
                                                )
                                              )}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3 form-group">
                                            <Form.Label className="label-text ">kt
                                              <OverlayTrigger  key="auto" placement="auto" overlay={
                                                    <Tooltip>
                                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    </Tooltip>
                                                  }
                                                >
                                                <span className="ms-1"><InfoIcon/></span>
                                              </OverlayTrigger>
                                            </Form.Label>
                                           
                                            <Form.Select>
                                              <option value="-1" selected disabled>Select...</option>
                                              {data.KT.map((KT) =><option key={KT} value={KT}>{KT}</option>)}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12}>
                                      <h5 className="heading4 text-primary text-uppercase">Retailer</h5>
                                      <Nav as="ul" className="retailerSelectLIst">
                                        {data.Retailer.map((Name) =><Nav.Item key={Name} as="li">
                                        <Form.Check
                                              required
                                              name={Name}
                                              label={Name}
                                              id={Name}
                                            />
                                        </Nav.Item>
                                        )}
                                      </Nav>
                                      
                                        <h5 className="heading4 text-primary text-uppercase mt-4">Price range</h5>
                                        <RangeChart/>
                                        
                                    </Col>
                                    <Col lg={12}>
                                      <Row className="justify-content-center py-4 mt-4">
                                        <Col lg={4}>
                                              {/* <Button type="button"  >See Result</Button> */}
                                              <Link to="/search-result" className="w-100 btn btn-lg btn-primary rounded py-4">See Result</Link>
                                        </Col>
                                      </Row>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
              </section>              
            </Layout>
        )
    }
}

export default (Dashboard)