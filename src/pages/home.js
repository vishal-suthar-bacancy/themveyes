import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Container, Row, Col, Image, Card} from 'react-bootstrap';
import HomeSectionMainImage from "../assets/images/dashboard-first-time-login.png"
import Accurate from "../assets/images/accurate.png"
import AboutUs from "../assets/images/about-us.png"
import ourMission from "../assets/images/our-mission.png"
import dataJewelryIndustrySpecific from "../assets/images/data-jewelry-industry-specific.png"
import EPMServices from "../assets/images/EPM-services.png"
import instantAnalyticsAtYourFingertips from "../assets/images/instant–analytics-at-your-fingertips.png"


import Header from '../componants/common/header';
import Footer from '../componants/common/footer';

export default class Home extends Component {
    render() {
        return (
            <>
                <Header></Header>
                <section className="home-main-section">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={8}>
                                <h1 className="main-section-heading text-white mb-4 pb-4">Current - Accurate – Fast Ecomm Fine Jewelry Analytics</h1>
                                <Link to="/" className="btn btn-primary">Get Started</Link>
                            </Col>
                            <Col  lg={4}>
                                <Image src={HomeSectionMainImage} fluid/>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="home-section-2 bg-light" >
                    <span className="target-Scroll" id="howtouse"></span>
                    <Container>
                        <h2 className="heading-main text-center">How to use Ecomm Product Monitoring</h2>
                        <Row>
                            <Col lg={6} className="py-4">
                                <Row className="align-items-cente ">
                                    <Col xl={5} lg={4}  md={5}>
                                        <Card className="me-4 border-0">
                                            <Image src={ourMission} fluid alt=""/>
                                        </Card>
                                    </Col>  
                                    <Col xl={7} lg={8}  md={7}>
                                        <div className="p-2">
                                            <h3 className="heading3 mb-4">Our Mission</h3>
                                            <p className="label-text">EPM enables our subscribers to search all the product being posted on major ecommerce fine jewelry
retailer’s websites.

EPM’s mission is to provide our subscribers with the data insights needed to identify growth
opportunities and benchmark performance in the rapidly changing world of ecommerce.</p>
                                        </div>
                                    </Col>  
                                </Row>
                            </Col>
                            <Col lg={6} className="py-4">
                                <Row className="align-items-center flex-lg-row  flex-md-row-reverse">
                                    <Col xl={5} lg={4}  md={5}>
                                        <Card className="me-4 border-0">
                                            <Image src={dataJewelryIndustrySpecific} fluid alt=""/>
                                        </Card>
                                    </Col>  
                                    <Col xl={7} lg={8}  md={7}>
                                        <div className="p-2">
                                            <h3 className="heading3 mb-4">Data - Jewelry Industry Specific</h3>
                                            <p className="label-text">EPM uses technology built by industry experts. Using web-based reporting EPM enables our subscribers to search all the product being offered on over 20 ecommerce fine jewelry retailer’s websites.</p>
                                        </div>
                                    </Col>  
                                </Row>
                            </Col>
                            <Col lg={6} className="py-4">
                                <Row className="align-items-center flex-lg-row-reverse  flex-md-row">
                                    <Col xl={5} lg={4}  md={5}>
                                        <Card className="me-4 border-0">
                                            <Image src={instantAnalyticsAtYourFingertips} fluid alt=""/>
                                        </Card>
                                    </Col>  
                                    <Col xl={7} lg={8}  md={7}>
                                        <div className="p-2">
                                            <h3 className="heading3 mb-4">Instant – Analytics At Your Fingertips</h3>
                                            <p className="label-text">Save valuable and expensive people-hours searching website after website trying to find, track and analyze the jewelry that is most important to you. All fine jewelry category are covered by EPM including - bridal, diamond fashion, colored gemstones, men’s and even kids (starting in Dec 2021)</p>
                                        </div>
                                    </Col>  
                                </Row>
                            </Col>
                            <Col lg={6} className="py-4">
                                <Row className="align-items-center flex-md-row-reverse">
                                    <Col xl={5} lg={4}  md={5}>
                                        <Card className="me-4 border-0">
                                            <Image src={Accurate} fluid alt=""/>
                                        </Card>
                                    </Col>  
                                    <Col xl={7} lg={8}  md={7}>
                                        <div className="p-2">
                                            <h3 className="heading3 mb-4">Accurate</h3>
                                            <p className="label-text">Our site is updated every 48 hours with accurate data as the retailers make changes to their assortments. EPM provides a granular view of style choices, price points, stone types, and metal attributes at both a category and subcategory level.</p>
                                        </div>
                                    </Col>  
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="home-section-3">
                        <span className="target-Scroll" id="services"></span>
                    <Container>
                        <Row className="justify-content-center"> 
                            <Col lg={11}>
                                <Card className="border-0 bg-light">
                                    <Row className="align-items-center justify-content-around ">
                                        <Col xl={5} lg={4}  md={5} className="h-100">
                                            <Card className="border-0 h-100  ms-4 ">
                                                <Image src={EPMServices} className="ms-4" fluid alt=""/>
                                            </Card>
                                        </Col>  
                                        <Col xl={6} lg={8}  md={7}>
                                            <div className="p-2">
                                                <h3 className="heading-main mb-4">EPM Services</h3>
                                                <p className="label-text">EPM’s leadership team are industry experts who understand the unique needs of fine jewelry retailers, manufacturers, wholesalers, gemstone dealers and other rare material suppliers. We are passionate about our industry, and our goal is to deliver best in class prescriptive analytics to help our subscribers make data-driven decisions that boost their bottom line.</p>
                                                <p className="label-text">Ecommerce business is evolving at warp speed and no other subscription service provides a more accurate, granular view of current online assortments.</p>
                                                <Link to="/" className="btn btn-primary  mt-4">View More</Link>
                                            </div>
                                        </Col>  
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                        </Container>
                </section>
                <section className="home-section-3 ">
                    <span className="target-Scroll" id="aboutus"></span>
                    <Container>
                        <Row className="justify-content-center"> 
                            <Col lg={10} >
                                <Card className="border-0 bg-light ps-4 pe-4">
                                <Row className="align-items-center justify-content-around flex-md-row-reverse">
                                    <Col xl={5} lg={4}  md={5} className="h-100">
                                        <Card className="border-0 h-100 ">
                                            <Image src={AboutUs} fluid alt=""/>
                                        </Card>
                                        
                                    </Col>  
                                    <Col xl={6} lg={8}  md={7}>
                                        <div className="p-4">
                                            <h3 className="heading-main mb-4">About Us</h3>
                                            <p className="label-text">THE MVEye (MVI Marketing LLC) is the only major research company focused exclusively on the gem, jewelry and watch industries with 30 years of product analysis experience.</p>
                                            <p className="label-text">With the rapid growth of ecommerce fine jewelry sales, we saw the need to view, analyzes, track and forecast jewelry in real time … so we launched Ecomm Product Monitoring (EPM).</p>
                                            <Link to="/" className="btn btn-primary mt-4">View More</Link>
                                        </div>
                                    </Col>  
                                </Row>
                                </Card>
                               
                            </Col>
                        </Row>
                        </Container>
                </section>
            <Footer></Footer>
         </>
        )
    }
}
