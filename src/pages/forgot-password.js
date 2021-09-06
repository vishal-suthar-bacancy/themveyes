import React, { Component } from 'react';
import {Container, Row, Col, Image, Card, Form, Button} from 'react-bootstrap';
import siteicon from "../assets/images/siteicon.svg"
import { EmailIcon } from '../componants/common/icons';



export default class ForgotPassword extends Component {
    render() {
        return (
            <>
                <section className="login-section">
                    <Container fluid>
                        <Row className="align-items-center">
                            <Col lg={6} className="loginLeftImage">
                            </Col>
                            <Col lg={6}>
                                <Row className="justify-content-center">
                                    <Col lg={8}>
                                    <Card className="card-shadow border-0">
                                        <div className="SiteIcon text-center mb-2">
                                            <Image src={siteicon} fluid alt=""/>
                                        </div>
                                        <Card.Body className="p-4 pb-0">
                                            <h1 className="heading3 text-center font-weight-bold mb-4">FORGOT PASSWORD</h1>
                                            <p className="label-text-small text-center">Forgot Password ?<br/> No Worries! Please enter your registered email address and we will send you the link to reset password</p>
                                            <Form>
                                                <Form.Group className="mb-4 form-group">
                                                <Form.Control placeholder="Email Address"></Form.Control>
                                                    <EmailIcon/>
                                                </Form.Group>
                                                <Form.Group className="mb-4">
                                                    <Button className="d-block w-100" type="submit">Submit</Button>
                                                </Form.Group>
                                            </Form>
                                        </Card.Body>
                                      </Card>
                                    </Col>
                                </Row>
                               
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        )
    }
}
 