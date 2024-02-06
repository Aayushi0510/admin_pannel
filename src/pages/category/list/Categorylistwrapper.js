import React, { useEffect } from 'react'
import Sidenavlayout from '../../../components/layout/sidenavLayout/Sidenavlayout'
import CategoryList from './CategoryList'
import { setCategoryData, setIsTableLoading } from '../../../redux/slices/CategorySlice';
import { useDeleteCategoryMutation, useGetCategoryQuery } from '../../../redux/slices/services/categoryService';
import { FaPencil } from 'react-icons/fa6';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ShowDialogBox from '../../../components/DialogBox/ShowDialogBox';

const Categorylistwrapper = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const { data, isFetching, isLoading } = useGetCategoryQuery();
  const [deleteCategory]=useDeleteCategoryMutation()
console.log(data)
  useEffect(() => {
    if (!isLoading && !isFetching) {
      dispatch(setCategoryData(data));
    } else {
      dispatch(setIsTableLoading(true));
    }
  }, [dispatch, data, isFetching, isLoading]);

  const columns = [
    {
        field: 'Title',
        headerName: 'Title',
        flex: 'flex-[1_1_0%]',
        renderCell: (row) => (
            <span>
                {' '}
                {row.title} {' '}
            </span>
        ),
    },
    // {
    //     field: 'Price',
    //     headerName: 'Price',
    //     flex: 'flex-[1.5_1.5_0%]',
    //     renderCell: (row) => {
    //         return <span> {row.price} </span>
    //     },
    // },
    // {
    //     field: 'Users',
    //     headerName: 'Users',
    //     flex: 'flex-[1_1_0%]',
    //     renderCell: (row) => {
    //       return <span> {row.totalUsers} </span>
    //   },
    // },
    {
        field: 'actions',
        headerName: 'Actions',
        flex: 'flex-[0.5_0.5_0%]',
        renderCell: (row) => (
          <>
          <FaPencil onClick={() => handleEdit(row)} style={{ cursor: 'pointer', marginRight: '8px' }} />
          <FaTrashAlt onClick={() => handleDelete(row)} style={{ cursor: 'pointer', marginRight: '8px' }} />
          {/* <FaEye onClick={() => handleView(row)} style={{ cursor: 'pointer' }} /> */}
      </>

            //     // handleOnAction={() => {
            //     //     setShowDropdown(!showDropdown)
            //     //     //   setCurrentId(row?._id);
            //     // }}
            // >
            //     <></>
        ),
        align: 'end',
    },
]
const handleEdit = (row) => {
  navigate(`edit/${row._id}`);
};
const handleDelete = async (row) => {
  try {
    // Open the confirmation dialog
    const result = await ShowDialogBox({
      title: "Delete Item",
      text: "Are you sure you want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    // Proceed with deletion if the user clicked "Yes"
    if (result.isConfirmed) {
      console.log(row._id);
      const res = await deleteCategory(row._id);
      console.log(res);

      if (res.data) {
        // ShowDialogBox({
        //   title: "Deleted!",
        //   text: "The item has been deleted successfully.",
        //   icon: "success",
        // });
        
      }
    }
  } catch (error) {
    console.error("Error deleting client:", error);

    ShowDialogBox({
      title: "Error",
      text: "An error occurred while deleting the item.",
      icon: "error",
    });
  }
};

 
 

  return (
  <Sidenavlayout>
    <CategoryList rows={data} columns={columns}/>
    </Sidenavlayout> 
 )
}

export default Categorylistwrapper