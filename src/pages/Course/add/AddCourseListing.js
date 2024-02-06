import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetCourseByIdQuery,
  useGetCourseQuery,
} from "../../../redux/slices/services/courseServices";
import {
  setCategoryData,
  setIsTableLoading,
} from "../../../redux/slices/CategorySlice";
import { useGetCategoryQuery } from "../../../redux/slices/services/categoryService";

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
    { name: "", summary: "", parts: [{ partNumber: 1, video: "" }] },
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
      video: "",
    });
    setModules(newModules);
  };

  const handleAddModule = () => {
    setModules([
      ...modules,
      {
        name: "",
        summary: "",
        parts: [{ partNumber: 1, video: "" }],
      },
    ]);
  };

  const handleVideoChange = (moduleIndex, partIndex, event) => {
    const newModules = [...modules];
    const file = event.target.files[0];
    newModules[moduleIndex].parts[partIndex].video = file;
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
        <div className="pt-1 pb-2 pl-2">
          <span className="text-xl font-semibold text-black">
            Add New Course
          </span>
        </div>
        <form onSubmit={onSubmit}>
          <div className="grow max-h-full bg-white border  rounded-xl shadow  bg-form-bg bg-cover bg-no-repeat p-4">
            <div className="flex justify-between px-3 h-[60px] items-center border-b border-slate-300">
              <div className="w-full flex justify-end">
                <button
                  type="submit"
                  disabled={apiStatus}
                  // onClick={onSubmit}
                  className={`bg-primary-main rounded py-1 px-5 text-black border border-primary-main ${
                    apiStatus ? "opacity-50" : ""
                  }`}
                >
                  Publish Course
                </button>
              </div>
            </div>
            <div className="grow py-8 px-3 ">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="ml-1 font-medium mb-2 ">
                    Select Category
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
                  <label htmlFor="title" className="ml-1 font-medium mb-2  ">
                    Title{" "}
                  </label>
                  <input
                    type="type"
                    name="title"
                    placeholder="Enter Course Title"
                    className="bg-transparent border border-gray-700 rounded-lg py-3 px-4 "
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="title" className="ml-1 font-medium mb-2  ">
                    Sub Title{" "}
                  </label>
                  <input
                    type="type"
                    name="subTitle"
                    placeholder="Enter Course Title"
                    className="bg-transparent border border-gray-700 rounded-lg py-3 px-4 "
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="price" className="ml-1 font-medium mb-2  ">
                    Price
                  </label>
                  <input
                    name="price"
                    id="price"
                    placeholder="Price"
                    className="bg-transparent border border-gray-700 rounded-lg py-3 px-4"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="rating" className="ml-1 font-medium mb-2 ">
                    Rating
                  </label>
                  <input
                    type="text"
                    name="rating"
                    id="rating"
                    placeholder="Rating"
                    className="bg-transparent border border-gray-700 rounded-lg py-3 px-4 "
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="ml-1 font-medium mb-2 ">
                    Overview
                  </label>
                  <input
                    name="overview"
                    id="overview"
                    placeholder="Overview"
                    className="bg-transparent border border-gray-700 rounded-lg py-3 px-4"
                    required
                  />
                </div>
              </div>
              <div className="flex w-full flex-col mt-4">
                <div className="flex flex-col">
                  <label htmlFor="message" className="ml-1 font-medium mb-2 ">
                    Description{" "}
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    rows={10}
                    placeholder="Description"
                    className="bg-transparent border border-gray-700 rounded-lg py-3 px-4"
                    required
                  />
                </div>
                <div className="flex w-full flex-col mt-4"></div>
              </div>
              <div className="flex w-full flex-col mt-4">
                <label htmlFor="modules" className="ml-1 font-medium  ">
                  Modules
                </label>
                {modules.map((module, moduleIndex) => (
                  <div key={moduleIndex} className="flex mt-4 w-full flex-col">
                    <input
                      type="text"
                      name={`module-${moduleIndex}-name`}
                      placeholder="Module Name"
                      value={module.name}
                      onChange={(e) =>
                        handleModuleChange(moduleIndex, "name", e.target.value)
                      }
                      className="bg-transparent border border-gray-700 rounded-lg py-3 px-4"
                      required
                    />
                    <div className="flex w-full flex-col mt-4">
                      <label
                        htmlFor="summary"
                        className="ml-1 font-medium mb-2 "
                      >
                        Summary
                      </label>
                      <textarea
                        name={`module-${moduleIndex}-summary`}
                        rows={5}
                        placeholder="Enter Course Summary"
                        value={module.summary} // Assuming summary is in the first module
                        onChange={(e) =>
                          handleModuleChange(
                            moduleIndex,
                            "summary",
                            e.target.value
                          )
                        }
                        className="bg-transparent border border-gray-700 rounded-lg py-3 px-4"
                        required
                      />
                    </div>
                    <div className="mt-4 w-full">
                      <label
                        htmlFor={`module-${moduleIndex}-parts`}
                        className="ml-1 font-medium mb-2 "
                      >
                        Parts
                      </label>
                      {module.parts.map((part, partIndex) => (
                        <div key={partIndex} className="flex w-full gap-3 mt-2">
                          <div className="w-full">
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
                              className="bg-transparent w-full border border-gray-700 rounded-lg py-3 px-4"
                              required
                            />
                          </div>
                          <div className="w-full">
                            <input
                              type="file"
                              name={`module-${moduleIndex}-part-${partIndex}-video`}
                              accept="video/*"
                              onChange={(e) =>
                                handleVideoChange(moduleIndex, partIndex, e)
                              }
                              className="bg-transparent w-full border border-gray-700 rounded-lg py-2 px-4"
                              required
                            />
                          </div>

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
                    </div>

                    <div className="mt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => handleAddPart(moduleIndex)}
                        className=" bg-primary-main text-[#333] text-sm rounded font-medium px-4 py-2"
                      >
                        Add Part
                      </button>
                    </div>
                  </div>
                ))}
                <div>
                  <button
                    type="button"
                    onClick={() => handleAddModule()}
                    className="bg-primary-main text-[#333] font-medium text-sm rounded px-4 py-2"
                  >
                    Add New Module
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
