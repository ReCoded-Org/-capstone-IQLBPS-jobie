import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import FilterButton from "./FilterButton";

function FilterResults({ filterData }) {
  const jobCard = filterData.map((job) => {
    return (
      <div
        key={job.id}
        className="rounded-md grid justify-items-center gap-3 m-5 bg-white drop-shadow-xl grid-cols-2 grid-rows-4 md:grid-cols-5 md:grid-rows-2"
      >
        <img
          className="order-1 col-span-2 h-20  md:row-span-2 md:col-span-1 md:scale-60 object-contain md:h-28 md:order-1"
          src={job.src}
          alt="hiring company logo"
        />
        <h2 className="order-4 font-semibold text-center md:font-semibold md:mt-3  md:order-2">
          {job.position}
        </h2>
        <h2 className="order-5 md:font-semibold md:mt-3 md:order-3">
          {job.jobModel}
        </h2>
        <h2 className="order-6  font-semibold md:font-semibold md:mt-3 md:order-4 ">
          {job.salary}
        </h2>
        <FontAwesomeIcon
          className="order-3 md:mt-3 md:order-5"
          icon={faBookmark}
        />
        <h2 className="order-8 font-semibold mb-5 md:font-normal md:order-6">
          {" "}
          {job.employer}
        </h2>
        <h2 className="order-9 mb-5 md:order-7"> {job.jobType}</h2>
        <h2 className="order-7 md:order-8"> {job.payFreq}</h2>
        <h2 className="order-2 font-semibold md:font-normal md:order-9">
          {" "}
          {job.postingDate}
        </h2>
      </div>
    );
  });
  return (
    <div className="bg-gray-500/5">
      <div className="flex justify-between">
        <h2 className="ml-5 mt-5 text-lg">
          {" "}
          Total{" "}
          <span className="text-accent font-semibold">
            {" "}
            {filterData.length}{" "}
          </span>
          Results
        </h2>
        <FilterButton />
      </div>
      {jobCard}
    </div>
  );
}

export default FilterResults;