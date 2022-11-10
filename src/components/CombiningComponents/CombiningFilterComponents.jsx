import React from 'react';
import JobsFinder from '../Hero/JobsFinder';
 import Filter from '../filter/Filter';
import FilterResults from '../FilterResults/FilterResults';
import { filterData } from "../../data/filterData";

function CombiningFilterComponents() {
  return (
    <div className="App px-7">
      <div>
        {" "}
        <JobsFinder />
      </div>
      <div className="flex px-6 small:flex-col-reverse ">
        <Filter />
        <FilterResults filterData={filterData} />
      </div>
    </div>
  );
}

export default CombiningFilterComponents;