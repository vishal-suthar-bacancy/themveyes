
import React, { useState } from "react"
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.svg"
import {Navbar,Container,Nav, Image,Button, Form, Collapse} from 'react-bootstrap';
import { ToggleIcon , PowerIcon, NotificationIcon, SearchIcon, DashboardIcon, FavouritesIcon,UserManagementIcon,SettingsIcon, SubMenuIcon} from "./icons";
 


export default function DashboardHeader(props) {
  
  const [open, setOpen] = useState(false);
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
   
<>
          <Navbar fixed="top" as="header"  className={isActive ? "sidebar-open" : "py-2"} expand  variant="light">
            <Container fluid>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                  <Nav className="align-items-center">
                     
                      <Nav.Item>
                          <Form.Group className="me-3 form-group">
                              <Form.Control  placeholder="Search..."></Form.Control>
                              <span className="icon"><SearchIcon/></span>
                          </Form.Group>
                      </Nav.Item>
                      <Nav.Item>
                          <Link to="/" className="nav-link"><NotificationIcon/></Link>
                      </Nav.Item>
                      <Nav.Item>
                          <Link to="/" className="nav-link "><PowerIcon/></Link>
                      </Nav.Item>
                  </Nav>
                </Navbar.Collapse>
                </Container>
                <div className="sidebar" >
                  <div className="sidebar-header d-flex justify-content-between align-items-center p-3">
                    <Image  fluid src={logo}/>
                    <Button type="button" onClick={handleToggle} className="btn-toggle "><ToggleIcon/> </Button>
                  </div>
                  <div className="sidebar-body">
                      <Nav className="flex-column">
                        <Nav.Item>
                            <Link to="/dashboard" className="nav-link"><DashboardIcon/> Dashboard</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/favourites" className="nav-link"><FavouritesIcon/> Favourites</Link>
                        </Nav.Item>
                        
                        <Nav.Item>
                            <Link to="/user-management" className="nav-link"><UserManagementIcon/> User Management</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <a href="javasScript:;"  className="nav-link" onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}><SettingsIcon/> Settings</a>
                          <Collapse as="ul" className="sub-menu" in={open}>
                            <Nav className="flex-column">
                              <Nav.Item>
                                  <Link to="/profile-management" className="nav-link"><SubMenuIcon/> Profile Management</Link>
                              </Nav.Item>
                              <Nav.Item>
                                  <Link to="/payment-method" className="nav-link"><SubMenuIcon/> Payment Methods</Link>
                              </Nav.Item>
                              
                              <Nav.Item>
                                  <Link to="/role-management" className="nav-link"><SubMenuIcon/> Role Management</Link>
                              </Nav.Item>
                            </Nav>
                          </Collapse>
                        </Nav.Item>
                      </Nav>
                  </div>
                </div>
            </Navbar>
          </>
  )
}
