import React from 'react'
import Sidenavlayout from '../../components/layout/sidenavLayout/Sidenavlayout'
import Dashboard from './Dashboard'


const DashboardWrappper = () => {
    return (
        <div className=''>
            <Sidenavlayout>
                <Dashboard />
            </Sidenavlayout>
        </div>
    )
}

export default DashboardWrappper