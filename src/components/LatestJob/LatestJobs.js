import { useTranslation } from "react-i18next";
import { useState } from "react";
import CustomButton from "../UI/Button/CustomButton";

const LatestJobs = ({ headers, data }) => {
  const { t } = useTranslation();
  const [fullTime, setFullTime] = useState(false);
  const [partTime, setPartTime] = useState(false);
  const [remote, setRemote] = useState(false);
  const handleFullTime = () => {
    setFullTime((prev) => !prev);
  };
  const handlePartTime = () => {
    setPartTime((prev) => !prev);
  };
  const handleRemote = () => {
    setRemote((prev) => !prev);
  };
  const filteredJobs = data.filter(
    (job) =>
      (partTime && job.partTime && !fullTime && !remote) ||
      (fullTime && job.fullTime && !partTime && !remote) ||
      (remote && job.remote && !partTime && !fullTime) ||
      (!remote && partTime && job.partTime && fullTime && job.fullTime) ||
      (remote && job.remote && partTime && job.partTime && !fullTime) ||
      (remote && job.remote && !partTime && fullTime && job.fullTime) ||
      !(remote || partTime || fullTime)
  );
  return (
    <div className="bg-gray-100">
      <div className="max-w-[70%] large:max-w-[70%] medium:max-w-[80%] small:max-w-[85%] h-full mx-auto py-10 small:py-5">
        <h1 className="text-3xl small:text-xl text-secondary mb-10 small:mb-5 font-semibold">
          {t('latest-jobs')}
        </h1>
        <div className="flex justify-end">
          <label htmlFor="full-time" className="mr-4 small:mr-2 small:text-sm">
            <input
              type="checkbox"
              id="full-time"
              className="mr-2 small:mr-1"
              onChange={handleFullTime}
              checked={fullTime}
            />
            {t('full-time')}
          </label>
          <label htmlFor="part-time" className="mr-4 small:mr-2 small:text-sm">
            <input
              type="checkbox"
              id="part-time"
              className="mr-2 small:mr-1"
              onChange={handlePartTime}
              checked={partTime}
            />
            {t('part-time')}
          </label>
          <label htmlFor="remote" className="small:text-sm">
            <input
              type="checkbox"
              id="remote"
              className="mr-2 small:mr-1"
              onChange={handleRemote}
              checked={remote}
            />
            {t('remote')}
          </label>
        </div>
        <div className="overflow-x-auto shadow-md">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-secondary bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {headers.map((header) => {
                  if (header.title === "") {
                    return <td key={header.id} />;
                  }
                  return (
                    <th
                      scope="col"
                      className="py-3 px-6 small:py-2 small:px-3"
                      key={header.id}
                    >
                      {header.title}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {filteredJobs.map((rowData) => {
                return (
                  <tr
                    className="bg-white dark:bg-gray-800 small:text-xs"
                    key={rowData.id}
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 small:py-1 small:px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {rowData.position}
                    </th>
                    <td className="py-4 px-6 small:py-1 small:px-2">
                      {rowData.salary}
                    </td>
                    <td className="py-4 px-6 small:py-1 small:px-2">
                      {rowData.date}
                    </td>
                    <td className="py-4 px-6 small:py-1 small:px-2 w-20">
                      <CustomButton btnName={t('apply-job')} />
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
