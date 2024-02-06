// AddQuizWrapper.js

import React from "react";
import Sidenavlayout from "../../../components/layout/sidenavLayout/Sidenavlayout";
import AddQuizListing from "./AddQuizListing";


const AddQuizWrapper = () => {
  return (
    <Sidenavlayout>
      <AddQuizListing />
    </Sidenavlayout>
  );
};

export default AddQuizWrapper;
