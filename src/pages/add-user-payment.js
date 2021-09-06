import React, { Component} from 'react';
import {Container, Card,Row, Col, ListGroup} from 'react-bootstrap';
import {Link, withRouter } from "react-router-dom";
import * as data  from '../componants/common/common-data';
import Layout from '../Layout';

 class AddUserPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCard:[],
        }
    }
    
    viewRecord = (card, index) =>{
        console.log(card)
        this.props.history.push({
            pathname: '/user-management',
        })
    }

    render() {
        return (
            <Layout>
               <section className="add-user-section">
              
              <Container fluid className="p-4">
                <Card className="card-shadow border pb-4">
                    <Card.Body className="py-4">
                            <div className="py-4">
                                <Row className="justify-content-center">
                                    <Col lg={4}>
                                        <p className="heading6 text-center">You have a limit of 5 users then you will be charged <span className="text-danger">$150/Year</span> for a user.</p>
                                        <Card className="border-0">
                                            <Card.Header className="bg-white border-top pe-0 ps-0 d-flex justify-content-between align-items-center">
                                                <h5 className="heading4 text-primary mb-0 ">Select Payment Method</h5>
                                                <span>
                                                    <Link to="/" className="btn btn-primary btn-sm">Add</Link>
                                                </span>
                                            </Card.Header>
                                            <Card.Body className="pe-0 ps-0 ">
                                                <ListGroup className="saveCardList">
                                                    {data.user.map((user)=>
                                                        <>
                                                            {user.SaveCard.map((card, i)=>
                                                            <ListGroup.Item key={i} onClick={this.viewRecord.bind(this, card, i)} >
                                                                <span className="card-type">{card.type}</span>
                                                                <span className="card-number">**** **** {card.number.substr(card.number.length - 8).replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()}</span>
                                                            </ListGroup.Item>
                                                            )}
                                                        </>
                                                    )}
                                                    
                                                </ListGroup>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                         </Card.Body>
                  </Card>
              </Container>
            </section>
              
            </Layout>
            
        )
    }
}

export default  withRouter(AddUserPayment) 
