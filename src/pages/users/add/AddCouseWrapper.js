import React, { useState } from 'react'
import Sidenavlayout from '../../../components/layout/sidenavLayout/Sidenavlayout'
import AddUserListing from './AddUserListing'
import { useAddUserMutation } from '../../../redux/slices/services/authService';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddUserWrapper = () => {
   const [addUser] = useAddUserMutation(); // Use the mutation hook
  const navigate=useNavigate()
   const [apiStatus, setApiStatus] = useState(false);


  const handleAddCourse = async (event) => {
    event.preventDefault();
    const {  
    name,
    email,
    mobileNo,
    password,
  }= event.target.elements;
    try {
      setApiStatus(true);
    const response =  addUser({
        name: name.value,
        email: email.value,
        mobileNo: mobileNo.value,
        password: password.value,
       
      });

      if (response  ) {
        toast.success('User added successfully');
        navigate("/users")
      } else {
        // Show error toast
        toast.error('Error adding User');
      }

      // Call the mutatio
    } catch (error) {
      console.error('Error adding User', error);
      // Show error toast
      toast.error('Error adding User');
      setApiStatus(false);
    }
  };

  return (
    <Sidenavlayout>
        <AddUserListing onSubmit={handleAddCourse}/>
    </Sidenavlayout>
  )
}

export default AddUserWrapper