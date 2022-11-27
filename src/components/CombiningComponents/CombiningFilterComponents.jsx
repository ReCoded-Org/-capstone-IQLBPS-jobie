import { useState, useEffect } from "react";
import JobsFinder from "../Hero/JobsFinder";
import Filter from "../filter/Filter";
import FilterResults from "../FilterResults/FilterResults";
import { useDispatch } from "../../app/store";
import { getJobsList } from "../../features/jobSlice";

function CombiningFilterComponents() {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [data, setData] = useState(items);

  console.log("items", items);

  useEffect(() => {
    const jobsFetch = async () => {
      const results = await dispatch(getJobsList());
      const newData = results.payload;
      const unique = newData.map((m) => [m.id, m]);
      //  console.log(unique);
      const newMap = new Map(unique);
      // console.log('newMap',newMap);
      const iterator = newMap.values();
      // console.log('iterator',iterator)
      const uniqueJobs = [...iterator];
      //  console.log('uniqueJobs',uniqueJobs);

      setItems(results.payload);
      //  console.log('results',results.payload)
      setData(uniqueJobs);
    };
    jobsFetch();
  }, []);

  return (
    <div className="App bg-gray-200 px-7 bg-gray-200 ">
      <div>
        {" "}
        <JobsFinder setData={setData} />
      </div>
      <div className="flex px-6 small:flex-col-reverse ">
        <Filter setData={setData} items={items} />
        {/* here we check if result exists if yes pass it to card else pass the
        data instead */}
        <FilterResults setData={setData} data={data} items={items} />
      </div>
    </div>
  );
}

export default CombiningFilterComponents;
