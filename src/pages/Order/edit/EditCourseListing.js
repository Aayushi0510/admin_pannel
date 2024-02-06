// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// const EditCourseListing = ({ onSubmit }) => {
//   const [apiStatus, setApiStatus] = useState(false);
//   const { selectedCourseData } = useSelector((state) => state?.course);
//   console.log(singleUserData);
//   const [formData, setFormData] = useState({
//     description,
//     title,
//     discount,
//     rating,
//     quantity,
//     price,
//     categoryId,
//   });

//   useEffect(() => {
//     // Update form data when singleClientData changes
//     setFormData({
//       description: selectedCourseData?.description || "",
//       title: selectedCourseData?.title || "",
//       discount: selectedCourseData?.discount || "",
//       price: selectedCourseData?.price || "",
//       quantity: selectedCourseData?.quantity || "",

//       categoryId: singleUserData?.categoryId || "",
//     });
//   }, [singleUserData]);

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//     console.log(formData);
//   };

//   return (
//     <div className="">
//       <div className="p-4 flex flex-col gap-2  ">
//         {/* Breadcrumbs */}
//         <div className=" text-black font-bold">
//           {/* <ATMBreadCrumbs breadcrumbs={breadcrumbs} /> */}
//         </div>

//         {/* Page Heading */}
//         <div className="pt-1">
//           <span className="text-xl font-semibold text-slate-600">
//             Add New User
//           </span>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="grow max-h-full bg-white border bg-1 rounded shadow  bg-form-bg bg-cover bg-no-repeat">
//             <div className="flex justify-between px-3 h-[60px] items-center border-b border-slate-300">
//               {/* Form Heading */}
//               <div className="text-xl font-medium"> Course Details</div>

//               {/* BUTTON - Add Button */}
//               <div>
//                 <button
//                   type="button"
//                   disabled={apiStatus}
//                   onClick={onSubmit}
//                   className={`bg-blue-700 rounded py-1 px-5 text-white border border-primary-main ${
//                     apiStatus ? "opacity-50" : ""
//                   }`}
//                 >
//                   Add Course
//                 </button>
//               </div>
//             </div>
//             <div className="grow py-8 px-3 ">
//               <div className="grid grid-cols-3 gap-4">
//                 <div className="flex flex-col">
//                   <label htmlFor="speedNetworking" className="ml-1 ">
//                     Category
//                   </label>
//                   <select
//                     name="category"
//                     className="bg-transparent border border-gray-700 rounded-lg py-3 px-4"
//                   >
//                     <option className="text-black" value="no">
//                       No
//                     </option>
//                     <option className="text-black" value="Yes">
//                       Yes
//                     </option>
//                   </select>
//                 </div>
//                 <div className="flex flex-col">
//                   <label htmlFor="event_name" className="ml-1 ">
//                     Title{" "}
//                   </label>
//                   <input
//                     type="type"
//                     name="title"
//                     placeholder="Enter Event Name"
//                     className="bg-transparent border border-gray-700 rounded-lg py-3 px-4 "
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label htmlFor="message" className="ml-1">
//                     Description{" "}
//                   </label>
//                   <textarea
//                     name="description"
//                     id="description"
//                     placeholder="Description"
//                     className="bg-transparent border border-gray-700 rounded-lg py-3 px-4"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label htmlFor="event_name" className="ml-1 ">
//                     Discount
//                   </label>
//                   <input
//                     type="text"
//                     name="Discount"
//                     placeholder="Discount"
//                     className="bg-transparent border border-gray-700 rounded-lg py-3 px-4 "
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label htmlFor="event_name" className="ml-1 ">
//                     Rating
//                   </label>
//                   <input
//                     type="text"
//                     name="rating"
//                     id="rating"
//                     placeholder="Rating"
//                     className="bg-transparent border border-gray-700 rounded-lg py-3 px-4 "
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label htmlFor="event_name" className="ml-1 ">
//                     Price
//                   </label>
//                   <input
//                     type="text"
//                     name="price"
//                     placeholder="price"
//                     className="bg-transparent border border-gray-700 rounded-lg py-3 px-4 "
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditCourseListing;
