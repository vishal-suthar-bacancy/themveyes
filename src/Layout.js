import React from 'react';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import DashboardHeader from './componants/common/dashboardHeader';

const Layout =({children}) =>{
    return(
        <>
            <DashboardHeader/>
            <main>{children}</main>
        </>
    )
}

export default Layout;