import React from 'react'
import { useNavigate } from 'react-router-dom'
import TableHeader from '../../../components/Table/TableHeader'
import Table from '../../../components/Table/Table'

const CourseList = ({rows ,columns}) => {
    const navigate=useNavigate()
  return (
    <div className="px-4 h-[calc(100vh-55px)] pt-3">
            {/* Page Header */}
            <div className="flex justify-between items-center h-[55px]">
                 <span className="text-xl font-semibold text-black">Course</span>
                <button
                    onClick={() => navigate('add')}
                    className="bg-[#FECC00] text-black rounded py-1 px-3"
                >
                    {' '}
                    + Add Course{' '}
                </button>
            </div>
            <div className="border flex flex-col h-[calc(100%-55px)] rounded-xl bg-white p-4 shadow">
            {/* <TableHeader page={1} rowCount={1} rowsPerPage={4} rows={rows}  /> */}

            <div className="grow overflow-auto">   
            <Table rows={rows} columns={columns} isCheckbox={true}/> 
            </div>
            
                    
        </div>
    </div>
    )
}

export default CourseList