import React, { Component} from 'react';
import {Container, Card,Button,Row, Col, Form, Image} from 'react-bootstrap';
import {Link} from "react-router-dom";
import * as data  from '../componants/common/common-data';
import Layout from '../Layout';
import maleAvator from '../assets/images/male.svg';
export default class ProfileManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            EditMode:false
        }
        this.ResetPassword = this.ResetPassword.bind(this);
    }
    ResetPassword(){
        this.setState({
            EditMode: !this.state.EditMode
        });
    }
    render() {
        return (
            <Layout>
               <section className="profile-section">
              
              <Container fluid className="p-4">
                <Card className="card-shadow border pb-4">
                    <Card.Header className="d-flex justify-content-between align-items-center bg-none border-bottom py-4  ">
                        <h5 className="heading4 text-primary mb-0 ">Profile Management</h5>
                    </Card.Header>
                      <Card.Body className="">
                         <Form method="post" className="p-4 custom-from">
                              <Row>
                                <Col lg={3} className="border-end">
                                    <div className="userProfile">
                                        <Image src={maleAvator} fluid className="w-100"/>
                                    </div>
                                </Col>
                                  <Col lg={9} >
                                      <Row className="justify-content-center">
                                         
                                              {data.user.map((user,i)=>
                                                 <Col lg={5} key={i}>
                                                <Form.Group className="mb-3 form-group">
                                                    <Form.Label className="label-text ">NAME</Form.Label>
                                                    <Form.Control placeholder="Enter Name" readOnly="read-only" defaultValue={user.userName} />
                                                </Form.Group>
                                                <Form.Group className="mb-3 form-group">
                                                    <Form.Label className="label-text ">EMAIL ADDRESS</Form.Label>
                                                    <Form.Control placeholder="Email Address" readOnly="read-only" defaultValue={user.emailAddress} />
                                                </Form.Group>
                                                {this.state.EditMode === true? <></>:<><Button type="button" onClick={this.ResetPassword}  className="p-0 btn-none btn-text-danger">Reset password</Button></>}
                                            
                                            </Col>
                                              )}
                                            
                                           
                                          <Col lg={5}>
                                          {this.state.EditMode === true? <><Form.Group className="mb-3 form-group">
                                                <Form.Label className="label-text ">OLD PASSWORD</Form.Label>
                                                <Form.Control placeholder="OLD PASSWORD"   />
                                            </Form.Group>
                                            <Form.Group className="mb-3 form-group">
                                                <Form.Label className="label-text ">NEW PASSWORD</Form.Label>
                                                <Form.Control placeholder="NEW PASSWORD"  />
                                            </Form.Group>
                                            <Form.Group className="mb-3 form-group">
                                                <Form.Label className="label-text ">CONFIRM PASSWORD</Form.Label>
                                                <Form.Control placeholder="CONFIRM PASSWORD"  />
                                            </Form.Group></>:<></>}
                                          </Col>
                                          {this.state.EditMode === true? <><Col lg={10}>
                                                <Button type="button" onClick={this.ResetPassword} className="btn btn-primary me-2">BACK</Button>
                                                <Link to="/add-user-payment" className="btn btn-primary  ms-2">Save</Link>
                                        </Col></>:<></>}
                                          
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
