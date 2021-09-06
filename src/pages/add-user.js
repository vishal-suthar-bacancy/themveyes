import React, { Component} from 'react';
import {Container, Card,Row, Col, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import * as data  from '../componants/common/common-data';
import Layout from '../Layout';
export default class AddUser extends Component {
    render() {
        return (
            <Layout>
               <section className="add-user-section">              
                <Container fluid className="p-4">
                  <Card className="card-shadow border pb-4">
                      <Card.Header className="d-flex justify-content-between align-items-center bg-none border-bottom py-4  ">
                          <h5 className="heading4 text-primary mb-0 ">Add User</h5>
                      </Card.Header>
                        <Card.Body className="">
                          <Form method="post" className="p-4 custom-from">
                                <Row>
                                    <Col lg={4}>
                                    <Form.Group className="mb-3 form-group">
                                      <Form.Label className="label-text ">EMAIL ADDRESS      
                                    
                                    </Form.Label>

                                      <Form.Control placeholder="Francesca@gmail.com" />
                                    </Form.Group>
                                    </Col>
                                    <Col lg={4}>
                                    <Form.Group className="mb-3 form-group">
                                      <Form.Label className="label-text ">FIRST NAME      
                                    
                                    </Form.Label>

                                      <Form.Control placeholder="Francesca" />
                                    </Form.Group>
                                    </Col>
                                    <Col lg={4}>
                                    <Form.Group className="mb-3 form-group">
                                      <Form.Label className="label-text ">LAST NAME      
                                    
                                    </Form.Label>

                                      <Form.Control placeholder="Metts" />
                                    </Form.Group>
                                    </Col>
                                    <Col lg={4}>
                                    <Form.Group className="mb-3 form-group">
                                      <Form.Label className="label-text ">JOB TITLE      
                                    
                                    </Form.Label>

                                      <Form.Select defaultValue="-1">
                                          <option value="-1"  disabled>Select...</option>
                                          {data.JobTitle.map((JobTitle) =><option key={JobTitle} value={JobTitle}>{JobTitle}</option>)}
                                      </Form.Select>
                                    </Form.Group>
                                    </Col>
                                    <Col lg={4}>
                                    <Form.Group className="mb-3 form-group">
                                      <Form.Label className="label-text ">PHONE NUMBER      
                                    
                                    </Form.Label>
                                      <Form.Control placeholder="9389478972" />
                                    </Form.Group>
                                    </Col>
                                    <Col lg={12}>
                                          <Link to="/user-management" className="btn btn-primary me-2">BACK</Link>
                                          <Link to="/add-user-payment" className="btn btn-primary  ms-2">Add</Link>
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
