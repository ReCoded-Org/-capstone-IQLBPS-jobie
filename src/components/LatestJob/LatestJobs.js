import ApplyButton from '../UI/ApplyButton';

const LatestJobs = ({ headers, data }) => {
  return (
    <div className="bg-gray-100">
      <div className=" max-w-[70%] h-full mx-auto py-10">
        <h1 className="text-3xl text-sky-800 mb-10 font-semibold">
          {headers.title}
        </h1>
        <div className="flex justify-end">
          <label htmlFor="full-time" className="mr-4">
            <input type="checkbox" id="full-time" className="mr-2" />
            Full Time
          </label>
          <label htmlFor="part-time" className="mr-4">
            <input type="checkbox" id="part-time" className="mr-2" />
            Part Time
          </label>
          <label htmlFor="remote">
            <input type="checkbox" id="remote" className="mr-2" />
            Remote
          </label>
        </div>
        <div className="overflow-x-auto shadow-md">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-sky-800 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  {headers.first}
                </th>
                <th scope="col" className="py-3 px-6">
                  {headers.second}
                </th>
                <th scope="col" className="py-3 px-6">
                  {headers.third}
                </th>
                <td />
              </tr>
            </thead>
            <tbody>
              {data.map((rowData) => {
                return (
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {rowData.position}
                    </th>
                    <td className="py-4 px-6">{rowData.salary}</td>
                    <td className="py-4 px-6">{rowData.date}</td>
                    <td className="py-4 px-6 w-20">
                      <ApplyButton />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default LatestJobs;
