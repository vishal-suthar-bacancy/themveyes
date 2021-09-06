import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Container, Row, Col, Image, Card, Form, Button} from 'react-bootstrap';
import siteicon from "../assets/images/siteicon.svg"
import { CompanyIcon, EmailIcon, HideEye, PhoneIcon, UserIcon } from '../componants/common/icons';




export default class Register extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { showPassword: false };
            this.showpassword = this.showpassword.bind(this);
        }
    showpassword(){
        this.setState(prevState => ({
            showPassword: !this.state.showPassword
        }));
    }
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
                                            <h1 className="heading3 text-center text-uppercase font-weight-bold mb-4">Register</h1>
                                            <Form>
                                                <Row>
                                                    <Col lg={6}>
                                                        <Form.Group className="mb-4 form-group">
                                                            <Form.Control placeholder="First Name"></Form.Control>
                                                            <UserIcon/>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <Form.Group className="mb-4 form-group">
                                                            <Form.Control placeholder="Last Name"></Form.Control>
                                                            
                                                            <UserIcon/>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Form.Group className="mb-4 form-group">
                                                    <Form.Control placeholder="Company Name"></Form.Control>
                                                    <CompanyIcon/>
                                                </Form.Group>
                                                <Form.Group className="mb-4 form-group">
                                                    <Form.Control placeholder="Email Address"></Form.Control>
                                                    <EmailIcon/>
                                                </Form.Group>
                                                <Form.Group className="mb-4 form-group">
                                                    <Form.Control placeholder="Phone Number"></Form.Control>
                                                   <PhoneIcon/>
                                                </Form.Group>
                                                <Form.Group className="mb-4 form-group">
                                                    <Form.Control type={this.state.showPassword === true ?"text": "password"} placeholder="Password"></Form.Control>
                                                    <Button onClick={this.showpassword} className=" w-100 btn-none icon" type="button"> <HideEye/></Button>
                                               
                                                </Form.Group>
                                                <Form.Group className="mb-4">
                                                    <Button className="d-block w-100" type="submit">Register</Button>
                                                </Form.Group>
                                            </Form>
                                        </Card.Body>
                                        <Card.Footer className="bg-white border-0 p-4"><span className="text-center d-block">Already have an account ?  <Link to="/login" className="nav-link d-inline ps-0">Login</Link></span></Card.Footer>
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
 