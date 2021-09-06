import React, { Component} from 'react';
import {Container, Modal, Card,Button,Image,Row, Col, Form} from 'react-bootstrap';
import Layout from '../Layout';
import {Link, withRouter } from "react-router-dom";
import {userManagement} from '../componants/common/common-data'
import { ApproveMemberIcon, ConfirmUserIcon, DeleteIcon, DeleteMemberIcon, EditIcon, EyeIcon } from '../componants/common/icons';
import ReactDatatable from '@ashvin27/react-datatable';
import maleAvator from '../assets/images/male.svg';
import FemaleAvator from '../assets/images/female.svg';
// import  { ReactComponent as SuccessIcon } from '../assets/images/success.svg';


class UserManagement extends Component {
    constructor(props) {
        super(props);
        
        this.columns = [
            {
                key: "name",
                text: "Name",
                sortable: false,
                TrOnlyClassName:"bg-white",
                cell: (record, index) => {
                    return (
                        <span key={"name"+index} className="d-flex align-items-center">
                               <span className="userIcon"> {(record.profileImage !== "") ? (<><Image src={record.profileImage} fluid alt={record.name}/></>):(<>
                                <Image src={record.gender === "Male" ? maleAvator : FemaleAvator} fluid alt={record.name}/></>)}
                                
                                </span><span key={"name"+index}>{record.name}</span>
                        </span>
                        
                    );
                }
            },
            {
                key: "email",
                text: "Email",
                TrOnlyClassName:"bg-white",
                sortable: false
            },
            {
                key: "phone",
                text: "Phone",
                className: "phone",
                TrOnlyClassName:"bg-white",
                sortable: false
            },
            {
                key: "action",
                text: "Action",
                className: "action-button-group",
                cell: (record, index) => {
                    return (
                        <span key={"btnGroup"+index}>
                            <button
                                className="btn table-btn"  key={"editRecord"+index}
                                onClick={this.viewRecord.bind(this, record, index)}
                                >
                                <EyeIcon/>
                            </button>
                            <button 
                                className="btn table-btn"  key={"viewRecord"+index} 
                                onClick={this.editRecord.bind(this, record, index)}>
                                <EditIcon/>
                            </button>
                            <button 
                                className="btn table-btn" key={"deleteRecord"+index} 
                                onClick={this.deleteRecord.bind(this, record, index)}>
                                <DeleteIcon/>
                            </button>
                            {record.isMember !== true ? <><button 
                                className="btn table-btn" key={"ConfirmUser"+index}  
                                onClick={this.approveMember.bind(this, record, index)}>
                                <ConfirmUserIcon/>
                            </button></>:""}
                        </span>
                    );
                }
            }
        ];
        this.config = {
            page_size:10,
            length_menu: [],
            show_filter: false,
            show_pagination: true,
            filename: "restaurents",
            button: false,
            show_info :false,
            show_last :false,
            show_first :false,
            key_column:true,
            TrOnlyClassName:"bg-white"
        }
        this.state = {
            records: userManagement,
            showModal:false,
            UserData:[],
            modalType:"",
        }
        this.showModalBtn= this.showModalBtn.bind(this);
        this.closeModalBtn= this.closeModalBtn.bind(this);
    }
    showModalBtn(){
        this.setState({
            showModal: true
        });
    }
    closeModalBtn(){
        this.setState({
            showModal: false,
            UserData: [],
            
        });
    }
    editRecord = (record) => {
        
        this.setState({
            UserData: [ record],
            modalType: "EditDetail"
        })
        this.showModalBtn()
    }
    viewRecord = (record) => {
        this.setState({
            UserData: [record],
            modalType: "viewDetail"
        })
        
        this.showModalBtn()
    }
    deleteRecord = () => {
        this.setState({
            modalType: "deleteRecord"
        })
        this.showModalBtn()
    }
    approveMember = () => {
        this.setState({
            modalType: "approveMember"
        })
        this.showModalBtn()
    }


    render() {
        return (
            <Layout>
               <section className="user-management-section">
                    <Container fluid className="p-4">
                        <Card className="card-shadow ps-4 pe-4" >
                            <Card.Header className="d-flex justify-content-between align-items-center bg-none border-bottom py-4  ">
                                <h5 className="heading4 text-primary mb-0 ">User Management</h5>
                                <Link to="/add-user"  className="btn btn-primary  m-1">+ Add New</Link>
                            </Card.Header>
                            <Card.Body>
                            <ReactDatatable
                                config={this.config}
                                records={this.state.records}
                                columns={this.columns}
                                className="table"
                                />
                            </Card.Body>

                        </Card>
                    </Container>
                    <Modal show={this.state.showModal} centered  onHide={this.closeModalBtn}>


                    {/* <div className="text-center py-4 my-4">
                        <Row className="justify-content-center">
                            <Col lg={8}>
                                    <SuccessIcon/>
                                <h4 className="heading4  text-success py-2">Successful !</h4>
                                
                                <p className="heading5 py-2">Your credit card charged $150 for john doe's subscription.</p>
                            </Col>
                        </Row>
                    </div> */}
                    {this.state.modalType ==="approveMember"?
                        <div className="text-center py-4 my-4">
                            <Row className="justify-content-center">
                                <Col lg={8}>
                                    <ApproveMemberIcon/>
                                    <h4 className="heading5 py-2">Do you want to approve the request and add this user?</h4>
                                    <div>
                                        <Button variant="danger" onClick={this.closeModalBtn} className="btn-sm me-2">NO</Button>
                                        <Button variant="success" className="btn-sm ms-2">Yes</Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>:<></>
                    }
                    {this.state.modalType ==="deleteRecord"?
                        <div className="text-center py-4 my-4">
                             <Row className="justify-content-center">
                                <Col lg={8}>
                                    <DeleteMemberIcon/>
                                    <h4 className="heading5 py-2">Do you want to delete this user?</h4>
                                    <div>
                                        <Button variant="danger" onClick={this.closeModalBtn} className="btn-sm me-2">NO</Button>
                                        <Button variant="success" className="btn-sm ms-2">Yes</Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>:<></>
                    }
                    {(this.state.modalType ==="viewDetail" || this.state.modalType === "EditDetail") ? <><Modal.Header closeButton>
                        <Modal.Title>User Detail</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.UserData.map((userdata)=>
                            <>
                                <Form.Group className="mb-3 form-group">
                                    <Form.Label className="label-text ">Name</Form.Label>
                                    <Form.Control readOnly={this.state.modalType === "viewDetail"? "readonly": ""} defaultValue={userdata.name}></Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3 form-group">
                                    <Form.Label className="label-text ">Email</Form.Label>
                                    <Form.Control readOnly={this.state.modalType === "viewDetail"? "readonly": ""} defaultValue={userdata.email}></Form.Control>
                                </Form.Group>
                            
                                <Form.Group className="mb-3 form-group">
                                    <Form.Label className="label-text ">Phone</Form.Label>
                                    <Form.Control readOnly={this.state.modalType === "viewDetail"? "readonly": ""} defaultValue={userdata.phone}></Form.Control>
                                </Form.Group>
                            </>
                        )}    
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" className="btn-sm"  onClick={this.closeModalBtn}>
                            Close
                        </Button>
                        {this.state.modalType ==="EditDetail" ? <><Button variant="primary" className="btn-sm" onClick={this.closeModalBtn}>
                            Save
                        </Button></>:<></>}
                        
                    </Modal.Footer>
                    </>:<></>}
                </Modal>
               
                </section>
                
            </Layout>
            
        )
    }
}

export default  withRouter(UserManagement) 