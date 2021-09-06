import React, { Component } from 'react'
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo-dark.svg"
import {Container,Row, Col, Image, Nav } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className="bg-light text-center">
                    <Container>
                     
                        <Row className="justify-content-center">
                            <Col lg={5}>
                                <div className="">
                                    <Image src={logo} width="364" height="81" fluid/>
                                    <p className="footer-label-text py-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <Row className="justify-content-center">
                                    <Col lg={6} className="py-2">
                                        <span className="mb-2 d-inline-block">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22.478" height="18.004" viewBox="0 0 22.478 18.004"><path fill="#417dab" d="M20.215,1.75a2.247,2.247,0,0,1,2.263,2.263V17.49a2.248,2.248,0,0,1-2.263,2.264H2.263A2.185,2.185,0,0,1,.658,19.1,2.182,2.182,0,0,1,0,17.49V4.013A2.185,2.185,0,0,1,.658,2.408,2.182,2.182,0,0,1,2.263,1.75Zm0,4.528V4.013l-9,5.633L2.263,4.013V6.277l8.95,5.58Z" transform="translate(0 -1.75)"/></svg>
                                        </span>
                                        <h5>ADDRESS</h5>
                                        <p>6207 Bee Cave Road, Suite 170 Austin, Texas</p>
                                    </Col>
                                    <Col lg={6} className="py-2">
                                        <span className="mb-2 d-inline-block">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12.862" height="18.007" viewBox="0 0 12.862 18.007"><path fill="#417dab" d="M13.181,2.25c-3.55,0-6.431,2.593-6.431,5.788,0,5.145,6.431,12.219,6.431,12.219s6.431-7.074,6.431-12.219C19.612,4.843,16.732,2.25,13.181,2.25Zm0,9a2.572,2.572,0,1,1,2.572-2.572A2.572,2.572,0,0,1,13.181,11.253Z" transform="translate(-6.75 -2.25)"/></svg></span>
                                        <h5>PHONE &amp; EMAIL</h5>
                                        <p className="mb-0"><a href="mailto:elchat@mvimarketing.com">elchat@mvimarketing.com</a></p>
                                        <p><a href="tel:18052969981"> 1(805)296-9981</a></p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                   
                </footer>
                <div className="footer-last bg-primary py-2">
                    <Container>
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <span className="text-white">Copyright 2021 MVIMarketing LLC.</span>
                            <Nav>
                                <Nav.Item>
                                    <Link to="/" className="nav-link">Home</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to="/" className="nav-link">Privacy Policy</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to="/" className="nav-link">Terms Of Use</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to="/" className="nav-link">Sitemap</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to="/" className="nav-link">Support</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to="/faq" className="nav-link">FAQs</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to="/" className="nav-link">Contacts</Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </Container>
                    
                </div>
            </>
        )
    }
}
