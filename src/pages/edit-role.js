import React, { Component, useState} from 'react';
import {Container, Card,Row, Col, Form, Table} from 'react-bootstrap';
import {Link, useLocation} from "react-router-dom";
import * as data  from '../componants/common/common-data';
import Layout from '../Layout';

export default function EditRole() {
    const location = useLocation(); 
    const [role,setRole]= useState(location.state.UserData)
    const [roleName,setRoleName]= useState(location.state.UserData.name)
        return (
            <Layout>
               <section className="add-role-section">
               
              <Container fluid className="p-4">
                <Card className="card-shadow border pb-4">
                    <Card.Header className="d-flex justify-content-between align-items-center bg-none border-bottom py-4  ">
                    <h5 className="heading4 text-primary mb-0">Add Role</h5>
                    </Card.Header>
                      <Card.Body className="">
                                <Form method="post" className="p-4 custom-from">
                                <Row>
                                    <Col lg={4}>
                                        <Form.Group className="mb-3 form-group">
                                        <Form.Label className="label-text">ENTER ROLE NAME </Form.Label>
                                        <Form.Control placeholder="ENTER ROLE NAME" defaultValue={roleName}/>
                                        </Form.Group>
                                    </Col>
                                    </Row>
                                    <Row>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3 form-group">
                                            <Form.Label className="label-text ">SET PERMISSION </Form.Label>
                                        </Form.Group>
                                        <Table  bordered >
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th className="text-center">View</th>
                                                <th className="text-center">Edit</th>
                                                <th className="text-center">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            {role.permission.map((permission, i)=>
                                                <tr>
                                                    <td>{permission.moduleName}</td>
                                                    <td className="text-center">
                                                        <div className="custom-control m-1 d-inline customCheckBox ">
                                                            <input type="checkbox" defaultChecked={permission.view  === true ? "checked":""} id={"View"+ i}  />
                                                            <label className="custom-control-label" htmlFor={"View"+ i}></label>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="custom-control m-1 d-inline customCheckBox ">
                                                            <input type="checkbox" defaultChecked={permission.edit === true  ?"checked":""} id={"Edit"+ i}  />
                                                            <label className="custom-control-label" htmlFor={"Edit"+ i}></label>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="custom-control m-1 d-inline customCheckBox ">
                                                            <input type="checkbox" defaultChecked={permission.delete === true ?"checked":""} id={"Delete"+ i}  />
                                                            <label className="custom-control-label" htmlFor={"Delete"+ i}></label>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                        </Table>
                                    </Col>
                                    <Col lg={12} className="py-2">
                                          <Link to="/role-management" className="btn btn-primary me-2">BACK</Link>
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
