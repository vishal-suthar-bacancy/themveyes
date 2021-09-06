import React, { Component} from 'react';
import {Container, Card,ListGroup,Row, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";
import * as data  from '../componants/common/common-data';
import Layout from '../Layout';
export default class PaymentMethod extends Component {
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
                        <Link to="/payment-method/add-payment" className="btn btn-primary">+ Add</Link>
                    </Card.Header>
                      <Card.Body className="">
                        <Row className="">
                                    <Col lg={4}>
                                        <ListGroup className="saveCardList">
                                            {data.user.map((user)=>
                                                <>
                                                    {user.SaveCard.map((card, i)=>
                                                    <ListGroup.Item key={i}  >
                                                        <span className="card-type">{card.type}</span>
                                                        <span className="card-number">**** **** {card.number.substr(card.number.length - 8).replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()}</span>
                                                    </ListGroup.Item>
                                                    )}
                                                </>
                                            )}
                                        </ListGroup>
                                    </Col>
                                </Row>    
                    </Card.Body>
                  </Card>
              </Container>
            </section>
              
            </Layout>
            
        )
    }
}
