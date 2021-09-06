import React, { Component} from 'react';
import {Container, Card} from 'react-bootstrap';
import Layout from '../Layout';
import {Link, withRouter } from "react-router-dom";
import {roleManagement} from '../componants/common/common-data'
import {  DeleteIcon, EditIcon } from '../componants/common/icons';
import ReactDatatable from '@ashvin27/react-datatable';
// import  { ReactComponent as SuccessIcon } from '../assets/images/success.svg';


class RoleManagement extends Component {
    constructor(props) {
        super(props);
        
        this.columns = [
            {
                key: "name",
                text: "Name",
                sortable: false,
                TrOnlyClassName:"bg-white",
            },{
                key: "action",
                text: "Action",
                width: "100px",
                cell: (record, index) => {
                    return (
                        <span key={"btnGroup"+index}>
                            <Link className="btn table-btn" to={{pathname: '/role-management/' + record.name, state: {UserData:record} }}   ><EditIcon/></Link>
                            <button 
                                className="btn table-btn" key={"deleteRecord"+index} 
                                onClick={this.deleteRecord.bind(this, record, index)}>
                                <DeleteIcon/>
                            </button>
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
            records: roleManagement,
            UserData:[],
        }
    }
    
  
    
    deleteRecord = () => {
        this.setState({

        })
    }
    
    render() {
        return (
            <Layout>
               <section className="user-management-section">
                    <Container fluid className="p-4">
                        <Card className="card-shadow ps-4 pe-4" >
                            <Card.Header className="d-flex justify-content-between align-items-center bg-none border-bottom py-4  ">
                                <h5 className="heading4 text-primary mb-0 ">Role Management</h5>
                                <Link to="/role-management/add"  className="btn btn-primary  m-1">+ Add New</Link>
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
                   </section>
                
            </Layout>
            
        )
    }
}

export default  withRouter(RoleManagement) 