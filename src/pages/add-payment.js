import React, { Component} from 'react';
import {Container, Card,Row, Col, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import Layout from '../Layout';
export default class AddPaymentMethod extends Component {
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
                        <h5 className="heading4 text-primary mb-0 ">Payment Method</h5>
                    </Card.Header>
                      <Card.Body className="">
                      <Form method="post" className="p-4 custom-from">
                              <Row>
                                  <Col lg={8}>
                                    <Row>
                                        <Col lg={6}>
                                            <Form.Group className="mb-3 form-group">
                                                <Form.Label className="label-text ">CARDHOLDER NAME </Form.Label>
                                                <Form.Control placeholder="CARDHOLDER NAME" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group className="mb-3 form-group">
                                                <Form.Label className="label-text ">CARD NUMBER</Form.Label>
                                                <Form.Control placeholder="CARD NUMBER" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group className="mb-3 form-group">
                                                <Form.Label className="label-text ">VALID THROUGH</Form.Label>
                                                <Form.Control placeholder="VALID THROUGH" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group className="mb-3 form-group">
                                                <Form.Label className="label-text ">CVV</Form.Label>
                                                <Form.Control placeholder="CVV" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                  </Col>
                                  <Col lg={12} className="py-2">
                                        <Link to="/payment-method" className="btn btn-primary me-2">BACK</Link>
                                        <Link to="/payment-method" className="btn btn-primary  ms-2">SAVE</Link>
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
