import React, { Component } from 'react';
import {Container,  Card,Button} from 'react-bootstrap';
import Layout from '../Layout';
import {Favourite} from '../componants/common/common-data'
export default class Favourites extends Component {
    render() {
        return (
            <Layout>
                <section className="favourites-section">
                    <Container fluid className="p-4">
                        <Card className="card-shadow ps-4 pe-4" >
                            <Card.Header className=" bg-none border-0 mb-0 ">
                                <h5 className="heading4 text-primary py-4 mb-0 border-bottom">Favourites</h5>
                            </Card.Header>
                            <Card.Body >
                                <div className="favourites-table">
                                <div className="table-heading">
                                    <div className="d-xl-flex d-none justify-content-between align-items-center">
                                        <span className="product-title m-xl-1 m-0">Product Name</span>
                                        <div className="d-xl-flex d-block justify-content-xl-end justify-content-between align-items-center">
                                            <span className="product-date m-xl-1 m-0 ">Date</span>
                                            <span className="product-action m-xl-1 m-0">Action</span>
                                        </div>
                                    </div>
                                </div>
                                {Favourite.map((Favourite) =>
                                    <div className="table-card">
                                        <div className="d-xl-flex d-block justify-content-between align-items-center">
                                            <span className="product-title m-xl-1 m-0">{Favourite.productName}</span>
                                            <div className="d-flex justify-content-xl-end justify-content-between align-items-center">
                                                <span className="product-date">{Favourite.productDate}</span>
                                                <span className="product-action "><Button type="button" variant="primary" className="rounded  m-1">View Detail</Button></span>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                    
                                </div>
                            </Card.Body>

                        </Card>
                    </Container>
                </section>
            </Layout>
        )
    }
}
