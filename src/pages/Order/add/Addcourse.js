import React, { useEffect, useState } from 'react'
;
import { toast } from 'react-hot-toast';
import AddCourseListing from './AddCourseListing';
import { useAddCourseMutation } from '../../../services/courseServices';
import Sidenavlayout from '../../../components/layout/sidenavLayout/Sidenavlayout';
import { setCategoryData, setIsTableLoading } from '../../../redux/slices/CategorySlice';
import { useDispatch, useSelector } from 'react-redux';
import { useGetCategoryQuery } from '../../../services/categoryService';

const AddCourse = () => {
  const dispatch = useDispatch();

  const [apiStatus, setApiStatus] = useState(false);
  const [addCourse] = useAddCourseMutation(); // Use the mutation hook
  const [modules, setModules] = useState([]); // State to manage modules

  const { data, isFetching, isLoading } = useGetCategoryQuery();
  
  // const { categoryData } = useSelector((state) => state.category);
  // console.log(data);
  // console.log(categoryData);

  
  useEffect(() => {
    if (!isLoading && !isFetching) {
      dispatch(setCategoryData(data));
    } else {
      dispatch(setIsTableLoading(true));
    }
  }, [dispatch, data, isFetching, isLoading]);


  const handleAddCourse = async (event) => {
    event.preventDefault()
    const {  
    description,
    title,
    rating,
    totalUsers,
    price,
    categoryId}=event.target.elements;
    try {
      setApiStatus(true);
    const response =  addCourse({
        categoryId: categoryId.value,
        title: title.value,
        description: description.value,
        totalUsers: totalUsers.value,
        rating: rating.value,
        price: price.value,
        modules:modules
      });

      if (response && response.data ) {
        toast.success('Course added successfully');
      } else {
        // Show error toast
        toast.error('Error adding course');
      }

      // Call the mutatio
    } catch (error) {
      console.error('Error adding course:', error);
      // Show error toast
      toast.error('Error adding course');
      setApiStatus(false);
    }
  };

  const handleModulesChange = (updatedModules) => {
    setModules(updatedModules);
  };
  return (
    <Sidenavlayout> 
      <AddCourseListing onSubmit={handleAddCourse}
      onModulesChange={handleModulesChange}
     /> 
    </Sidenavlayout>

  )
}

export default AddCourse