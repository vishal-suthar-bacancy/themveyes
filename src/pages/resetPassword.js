import React, { Component } from 'react';
import {Container, Row, Col, Image, Card, Form, Button} from 'react-bootstrap';
import siteicon from "../assets/images/siteicon.svg"
import { HideEye } from '../componants/common/icons';



export default class ResetPassword extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { showPassword: false,showConfirmpassword:false };
            this.showpassword = this.showpassword.bind(this);
            this.showConfirmpassword = this.showConfirmpassword.bind(this);
        }
    showpassword(){
        this.setState(prevState => ({
            showPassword: !this.state.showPassword
        }));
    }
    
    showConfirmpassword(){
        this.setState(prevState => ({
            showConfirmpassword: !this.state.showConfirmpassword
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
                                            <h1 className="heading3 text-center font-weight-bold mb-4">Reset Your Password</h1>
                                            <Form>
                                                 <Form.Group className="mb-4 form-group">
                                                    <Form.Control autocomplete="off" type={this.state.showPassword === true ?"text": "password"} placeholder="Password"></Form.Control>
                                                    <Button onClick={this.showpassword} className=" w-100 btn-none icon" type="button"> <HideEye/></Button>
                                                </Form.Group>
                                                <Form.Group className="mb-4 form-group">
                                                    <Form.Control  type={this.state.showConfirmpassword === true ?"text": "password"} placeholder="Confirm Password"></Form.Control>
                                                    <Button onClick={this.showConfirmpassword} className=" w-100 btn-none icon" type="button"> <HideEye/></Button>
                                                </Form.Group>
                                                <Form.Group className="mb-4">
                                                    <Button className="d-block w-100" type="submit">Reset Password</Button>
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
 