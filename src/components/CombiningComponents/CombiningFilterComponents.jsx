import  {useState} from 'react'
import JobsFinder from "../Hero/JobsFinder";
import Filter from "../filter/Filter";
import FilterResults from "../FilterResults/FilterResults";
import { filterData } from "../../data/filterData";

function CombiningFilterComponents() {
  const [data, setData] = useState(filterData);
  
  return (
    <div className="App px-7">
      <div>
        {" "}
        <JobsFinder setData={setData} />
      </div>
      <div className="flex px-6 small:flex-col-reverse ">
        <Filter />
        {/* here we check if result exists if yes pass it to card else pass the
        data instead */}
        {data && <FilterResults setData={setData} data={ data} />}
      </div>
    </div>
  );
}

export default CombiningFilterComponents;
