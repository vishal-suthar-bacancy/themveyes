import React, { Component } from 'react'

import {Switch,Route} from "react-router-dom";
import AddPaymentMethod from './pages/add-payment';
import AddUser from './pages/add-user';
import AddUserPayment from './pages/add-user-payment';
import Dashboard from './pages/dashboard';
import Faq from './pages/faq';
import Favourites from './pages/favourites';
import ForgotPassword from './pages/forgot-password';
import Home from './pages/home'
import Login from './pages/login';
import PaymentMethod from './pages/payment-method';
import ProfileManagement from './pages/profile-management';
import Register from './pages/register';
import ResetPassword from './pages/resetPassword';
import RoleManagement from './pages/role-management';
import SearhResultChart from './pages/searh-result-chart';
import UserManagement from './pages/user-management';
import AddRole from './pages/add-role';
import EditRole from './pages/edit-role';

export default class Routes extends Component {
    render() {
        return (
            <>
              <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/forgot-password">
                        <ForgotPassword />
                    </Route>
                    <Route exact path="/reset-password">
                        <ResetPassword />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route exact path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route exact path="/search-result">
                        <SearhResultChart />
                    </Route>
                    <Route exact path="/faq">
                        <Faq />
                    </Route>
                    <Route exact path="/favourites">
                        <Favourites />
                    </Route>
                    <Route exact path="/user-management" >
                        <UserManagement/>
                    </Route>
                    <Route exact path="/profile-management" >
                        <ProfileManagement/>
                    </Route>                
                    <Route exact path="/add-user">
                        <AddUser />
                    </Route>
                    <Route path="/add-user-payment">
                        <AddUserPayment />
                    </Route>   
                    <Route exact path="/payment-method">
                        <PaymentMethod />
                    </Route>    
                    <Route exact path="/payment-method/add-payment">
                        <AddPaymentMethod />
                    </Route> 
                    <Route exact path="/role-management">
                        <RoleManagement />
                    </Route>
                    <Route exact path="/role-management/add">
                        <AddRole />
                    </Route>
                    <Route exact path="/role-management/:id">
                        <EditRole />
                    </Route>
                </Switch>  
            </>
        )
    }
}
