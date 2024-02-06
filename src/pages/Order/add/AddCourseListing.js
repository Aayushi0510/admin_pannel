import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetCourseByIdQuery,
  useGetCourseQuery,
} from "../../../services/courseServices";
import {
  setCategoryData,
  setIsTableLoading,
} from "../../../redux/slices/CategorySlice";
import { useGetCategoryQuery } from "../../../services/categoryService";

const AddCourseListing = ({ onSubmit, onModulesChange }) => {
  const dispatch = useDispatch();
  const [apiStatus, setApiStatus] = useState(false);
  const { data, isFetching, isLoading } = useGetCategoryQuery();

  useEffect(() => {
    if (!isLoading && !isFetching) {
      dispatch(setCategoryData(data));
    } else {
      dispatch(setIsTableLoading(true));
    }
  }, [dispatch, data, isFetching, isLoading]);
  const [modules, setModules] = useState([
    { name: "", parts: [{ partNumber: 1, video: { path: "", publicId: "" } }] },
  ]);

  useEffect(() => {
    onModulesChange(modules);
  }, [modules, onModulesChange]);

  const handleModuleChange = (index, field, value) => {
    const newModules = [...modules];
    newModules[index] = { ...newModules[index], [field]: value };
    setModules(newModules);
  };

  const handlePartChange = (moduleIndex, partIndex, field, value) => {
    const newModules = [...modules];
    newModules[moduleIndex].parts[partIndex] = {
      ...newModules[moduleIndex].parts[partIndex],
      [field]: value,
    };
    setModules(newModules);
  };

  const handleAddPart = (moduleIndex) => {
    const newModules = [...modules];
    newModules[moduleIndex].parts.push({
      partNumber: 1,
      video: { file: null, publicId: "" },
    });
    setModules(newModules);
  };

  const handleAddModule = () => {
    setModules([
      ...modules,
      {
        name: "",
        parts: [{ partNumber: 1, video: { file: "", publicId: "" } }],
      },
    ]);
  };

  const handleVideoChange = (moduleIndex, partIndex, event) => {
    const newModules = [...modules];
    const file = event.target.files[0];
    newModules[moduleIndex].parts[partIndex].video.path = file;
    setModules(newModules);
  };
  return (
    <div className="">
      <div className="p-4 flex flex-col gap-2  ">
        {/* Breadcrumbs */}
        <div className=" text-black font-bold">
          {/* <ATMBreadCrumbs breadcrumbs={breadcrumbs} /> */}
        </div>

        {/* Page Heading */}
        <div className="pt-1">
          <span className="text-xl font-semibold text-slate-600">
            Add New User
          </span>
        </div>
        <form onSubmit={onSubmit}>
          <div className="grow max-h-full bg-white border bg-1 rounded shadow  bg-form-bg bg-cover bg-no-repeat">
            <div className="flex justify-between px-3 h-[60px] items-center border-b border-slate-300">
              {/* Form Heading */}
              <div className="text-xl font-medium"> Course Details</div>

              {/* BUTTON - Add Button */}
              <div>
                <button
                  type="submit"
                  disabled={apiStatus}
                  // onClick={onSubmit}
                  className={`bg-blue-700 rounded py-1 px-5 text-white border border-primary-main ${
                    apiStatus ? "opacity-50" : ""
                  }`}
                >
                  Add Course
                </button>
              </div>
            </div>
            <div className="grow py-8 px-3 ">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="speedNetworking" className="ml-1 ">
                    Category
                  </label>

                  <select
                    name="categoryId"
                    className="bg-transparent border border-gray-700 rounded-lg py-3 px-4"
                  >
                    {data?.map((category) => (
                      <option
                        key={category._id} // Assuming your category object has an _id property
                        className="text-black"
                        value={category._id} // Send category ID as the value
                      >
                        {category.title}{" "}
                        {/* Assuming your category object has a name property */}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="event_name" className="ml-1 ">
                    Title{" "}
                  </label>
                  <input
                    type="type"
                    name="title"
                    placeholder="Enter Event Name"
                    className="bg-transparent border border-gray-700 rounded-lg py-3 px-4 "
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="ml-1">
                    Description{" "}
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    placeholder="Description"
                    className="bg-transparent border border-gray-700 rounded-lg py-3 px-4"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="event_name" className="ml-1 ">
                    Total Users
                  </label>
                  <input
                    type="text"
                    name="totalUsers"
                    placeholder="total Users"
                    className="bg-transparent border border-gray-700 rounded-lg py-3 px-4 "
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="event_name" className="ml-1 ">
                    Rating
                  </label>
                  <input
                    type="text"
                    name="rating"
                    id="rating"
                    placeholder="Rating"
                    className="bg-transparent border border-gray-700 rounded-lg py-3 px-4 "
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="event_name" className="ml-1 ">
                    Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="price"
                    className="bg-transparent border border-gray-700 rounded-lg py-3 px-4 "
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="modules" className="ml-1">
                    Modules
                  </label>
                  {modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="flex flex-col">
                      <input
                        type="text"
                        name={`module-${moduleIndex}-name`}
                        placeholder="Module Name"
                        value={module.name}
                        onChange={(e) =>
                          handleModuleChange(
                            moduleIndex,
                            "name",
                            e.target.value
                          )
                        }
                        className="bg-transparent border border-gray-700 rounded-lg py-3 px-4"
                      />
                      <label
                        htmlFor={`module-${moduleIndex}-parts`}
                        className="ml-1"
                      >
                        Parts
                      </label>
                      {module.parts.map((part, partIndex) => (
                        <div key={partIndex} className="flex flex-row gap-2">
                          <input
                            type="text"
                            name={`module-${moduleIndex}-part-${partIndex}-partNumber`}
                            placeholder="Part Number"
                            value={part.partNumber}
                            onChange={(e) =>
                              handlePartChange(
                                moduleIndex,
                                partIndex,
                                "partNumber",
                                e.target.value
                              )
                            }
                            className="bg-transparent border border-gray-700 rounded-lg py-3 px-4"
                          />
                          <input
                            type="file"
                            name={`module-${moduleIndex}-part-${partIndex}-video`}
                            onChange={(e) =>
                              handleVideoChange(moduleIndex, partIndex, e)
                            }
                            className="bg-transparent border border-gray-700 rounded-lg py-3 px-4"
                          />
                          {/* <input
                  type="text"
                  name={`module-${moduleIndex}-part-${partIndex}-video-publicId`}
                  placeholder="Video PublicId"
                  value={part.video.publicId}
                  onChange={(e) =>
                    handlePartChange(moduleIndex, partIndex, "video", {
                      ...part.video,
                      publicId: e.target.value,
                    })
                  }
                  className="bg-transparent border border-gray-700 rounded-lg py-3 px-4"
                /> */}
                        </div>
                      ))}

                      <button
                        type="button"
                        onClick={() => handleAddPart(moduleIndex)}
                      >
                        Add Part
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={() => handleAddModule()}>
                    Add Module
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourseListing;
