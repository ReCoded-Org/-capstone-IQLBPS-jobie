const Filter = () => {
  return (
    <div className="w-96 bg-gray-100 h-screen p-5 flex-col">
      <h2 className="text-secondary font-bold text-3xl">Filter</h2>

      <hr />
      <div className="salary flex-col">
        <div className="flex space-between p-3">
          <h6 className="text-secondary float-left font-bold text-xl">
            Salary Range
          </h6>
          <img src="/assets/filterComponent/dropdown-svgrepo-com.svg" alt="" />
        </div>
        <div className="  inputs -ml-20 grid-cols-2 grid-rows-2 gap-3 inline-grid pb-3  gap-x-20 object-left ">
          <p className="text-secondary text-left font-semibold text-l ">From</p>
          <p className="text-secondary text-left font-semibold text-l">To</p>
          <input type="text" className="w-20 rounded-md" />

          <input type="text" className="w-20 rounded-md" />
        </div>
      </div>

      {/* LOCATION */}
      <div className="location flex-column overflow-visible">
        <h6 className="text-secondary p-3 text-left font-bold text-xl">
          Location
        </h6>
        <button
          type="button"
          className=" group relative flex justify-center items-center bg-white border focus:outline-none shadow text-secondary rounded focus:ring ring-zinc-200  ml-3"
        >
          <p className="px-4">
            Choose all that applies... <img src="vector.png" alt="" />
          </p>
          <span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http:// www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
          <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded ">
            <ul className="text-left border rounded">
              <li className="px-4 py-1 hover:bg-gray-100 border-b">Iraq</li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">Lebanon</li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">Yemen</li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">Turkey</li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">Jordan</li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">Syria</li>
            </ul>
          </div>
        </button>
      </div>

      {/* TYPE OF EMPLOYMENT */}
      <div className="epmloyment-type flex-column ">
        <h6 className="text-secondary p-3 text-left font-bold text-xl ">
          Type Of Employment
        </h6>
        <button
          type="button"
          className=" group relative flex justify-center items-center bg-white border focus:outline-none shadow text-secondary rounded focus:ring ring-zinc-200 ml-3 "
        >
          <p className="px-4">Choose all that applies...</p>
          <span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http:// www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
          <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded">
            <ul className="text-left border rounded">
              <li className="px-4 py-1 hover:bg-gray-100 border-b">
                Full-time
              </li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">
                Part-time
              </li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">Remote</li>
            </ul>
          </div>
        </button>
      </div>

      {/* CATEGORY */}
      <div className="category flex-column ">
        <h6 className="text-secondary p-3 text-left font-bold text-xl">
          Category
        </h6>
        <button
          type="button"
          className=" group relative flex justify-center items-center bg-white border focus:outline-none shadow text-secondary rounded focus:ring ring-zinc-200 ml-3"
        >
          <p className="px-4">Choose all that applies...</p>
          <span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http:// www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
          <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded">
            <ul className="text-left border rounded">
              <li className="px-4 py-1 hover:bg-gray-100 border-b">Tech </li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">Design</li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">
                Engineering
              </li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">
                Financial Services
              </li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">
                Healthcare
              </li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">Remote</li>
            </ul>
          </div>
        </button>
      </div>

      {/* EXPERIENCE */}
      <div className="experience flex-column p-3 content-start">
        <h6
          className="text-secondary text-left pb-3 font-bold text-xl
       "
        >
          Work Exeperience
        </h6>
        <div className="flex-col text-left content-start">
          <div className="checkbox-container">
            <input type="checkbox" id="one" />
            <span className="text-secondary font-semibold text-l pl-2">
              One
            </span>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="two" />
            <span className="text-secondary font-semibold text-l pl-2">
              Two
            </span>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="three" />
            <span className="text-secondary font-semibold text-l pl-2">
              Three
            </span>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="four" />
            <span className="text-secondary font-semibold text-l pl-2">
              Four+
            </span>
          </div>
        </div>
      </div>

      {/* WORK LEVEL */}
      <div className="work-level flex-column ">
        <h6 className="text-secondary p-3 left-0 text-left font-bold text-xl">
          Work Level
        </h6>
        <button
          type="button"
          className=" group relative flex justify-center items-center bg-white border focus:outline-none shadow text-secondary rounded focus:ring ring-zinc-200 ml-3"
        >
          <p className="px-4">Choose all that applies...</p>
          <span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http:// www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
          <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded">
            <ul className="text-left border rounded">
              <li className="px-4 py-1 hover:bg-gray-100 border-b">Entry</li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">Junior</li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">Senior</li>
            </ul>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Filter;
