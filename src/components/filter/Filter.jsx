import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Filter = ({ setData, items }) => {
  // console.log("hi items", data);
  const { t } = useTranslation();
  // obtaining min and max values for salary range from filterData.js to be set as initial states //
  const minSalaryArray = items.map((item) => item.minSalary);
  const minSalaryValue = Math.min(minSalaryArray);

  const maximumSalaryArray = items.map((item) => item.maxSalary);
  const maxSalaryValue = Math.max(maximumSalaryArray);

  const [filter, setFilter] = useState({
    salary: {
      min: `${minSalaryValue}`,
      max: `${maxSalaryValue}`,
    },

    location: "",
    employmentType: "",
    category: "",
    experience: "",
    workLevel: "",
  });

  const salaryHandler = (e) => {
    if (e.target.name === "min") {
      setFilter({
        ...filter,
        salary: {
          ...filter.salary,
          min: e.target.value,
        },
      });
    } else {
      setFilter({
        ...filter,
        salary: {
          ...filter.salary,
          max: e.target.value,
        },
      });
    }
  };

  useEffect(() => {
    setData(
      items.filter((item) => {
        if (
          item.minSalary >= filter.salary.min &&
          item.maxSalary <= filter.salary.max
        ) {
          return item;
        }
        return null;
      })
    );
  }, [filter.salary]);

  const locationHandler = (e) => {
    setFilter({
      ...filter,
      location: e.target.value,
    });

    setData(
      items.filter((item) => {
        if (item.location === e.target.value) {
          return item;
        }
        return null;
      })
    );
  };

  const employmentTypeHandler = (e) => {
    setFilter({
      ...filter,
      employmentType: e.target.value,
    });
  };

  const categoryHandler = (e) => {
    setFilter({
      ...filter,
      category: e.target.value,
    });
  };

  const levelHandler = (e) => {
    setFilter({
      ...filter,
      workLevel: e.target.value,
    });
  };

  const experienceHandler = (e) => {
    setFilter({
      ...filter,
      experience: e.target.id,
    });
  };

  const handleCheck = (e) => {
    const checkboxes = Array.from(document.getElementsByClassName("checkbox"));

    /* eslint-disable-next-line no-plusplus */
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].id !== e.target.id) checkboxes[i].checked = false;
    }
  };

  const experienceClickHandler = (e) => {
    experienceHandler(e);
    handleCheck(e);
  };

  return (
    <div className="flex ">
      <div className="bg-gray-200 h-screen p-5 flex flex-col items-center">
        <h2 className="text-secondary font-bold text-3xl">{t("filter")}</h2>

        {/* SALARY */}
        <div className="salary pl-3">
          <div className="flex space-between pt-3 pb-3 text-center">
            <h6 className="text-secondary  font-bold text-xl">
              {t("salary-range")}
            </h6>
            <img
              src="/assets/filterComponent/dropdown-svgrepo-com.svg"
              alt=""
            />
          </div>
          <div className="  inputs grid-cols-2 grid-rows-2 gap-y-2 inline-grid pb-3  gap-x-20  ">
            <p className="text-secondary text-left font-semibold text-l ">
              {t("from")}
            </p>
            <p className="text-secondary text-left font-semibold text-l">
              {t("to")}
            </p>
            <input
              type="text"
              className="w-20 rounded-md"
              name="min"
              value={filter.salary.min}
              onChange={(e) => {
                salaryHandler(e);
              }}
            />

            <input
              type="text"
              className="w-20 rounded-md"
              name="max"
              value={filter.salary.max}
              onChange={(e) => {
                salaryHandler(e);
              }}
            />
          </div>
        </div>

        {/* LOCATION */}
        <div className="location overflow-visible pb-3 pt-3">
          <h6 className="text-secondary pb-3 text-left font-bold text-xl">
            {t("location")}
          </h6>
          <div className="relative inline-block text-left">
            <div>
              <div className="relative inline-flex">
                <svg
                  className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 412 232"
                >
                  <path
                    d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                    fill="#648299"
                    fillRule="nonzero"
                  />
                </svg>
                {/* <form onSubmit={handleChangeLocation}> */}
                <select
                  className="border border-gray-300 rounded-md text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none w-56 "
                  value={filter.location}
                  onChange={(e) => locationHandler(e)}
                >
                  <option>{t("choose-all-location")}</option>
                  <option>{t("iraq")}</option>
                  <option>{t("jordan")}</option>
                  <option>{t("yemen")}</option>
                  <option>{t("syria")}</option>
                  <option>{t("lebanon")}</option>
                  <option>{t("turkey")}</option>
                </select>
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>

        {/* TYPE OF EMPLOYMENT */}
        <div className="employment-type pb-3 pt-3 ">
          <h6 className="text-secondary pb-3 text-left font-bold text-xl ">
            {t("type-of-employment")}
          </h6>
          <div className="relative inline-flex">
            <svg
              className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 412 232"
            >
              <path
                d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                fill="#648299"
                fillRule="nonzero"
              />
            </svg>
            <select
              className="border border-gray-300 rounded-md text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none w-56 "
              value={filter.employmentType}
              onChange={(e) => {
                employmentTypeHandler(e);
              }}
            >
              <option>{t("choose-all-employment")}</option>
              <option>{t("full-time")}</option>
              <option>{t("part-time")}</option>
              <option>{t("remote")}</option>
            </select>
          </div>
        </div>

        {/* CATEGORY */}
        <div className="category  pb-3 pt-3">
          <h6 className="text-secondary pb-3 text-left font-bold text-xl">
            {t("category")}
          </h6>
          <div className="relative inline-flex">
            <svg
              className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 412 232"
            >
              <path
                d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                fill="#648299"
                fillRule="nonzero"
              />
            </svg>
            <select
              className="border border-gray-300 rounded-md text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none w-56"
              value={filter.category}
              onChange={(e) => {
                categoryHandler(e);
              }}
            >
              <option>{t("choose-all-category")}</option>
              <option>{t("tech")}</option>
              <option>{t("design")}</option>
              <option>{t("engineering")}</option>
            </select>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="experience pb-3 pt-3 ">
          <h6 className="text-secondary pb-3 text-left font-bold text-xl">
            {t("work-exeperience")}
          </h6>

          <div className="flex flex-col text-left ">
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="one"
                className="checkbox"
                onClick={(e) => experienceClickHandler(e)}
              />
              <span className="text-secondary font-semibold text-l pl-2">
                {t("one")}
              </span>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="two"
                className="checkbox"
                onClick={(e) => experienceClickHandler(e)}
              />
              <span className="text-secondary font-semibold text-l pl-2">
                {t("two")}
              </span>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="three"
                className="checkbox"
                onClick={(e) => experienceClickHandler(e)}
              />
              <span className="text-secondary font-semibold text-l pl-2">
                {t("three")}
              </span>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="four"
                className="checkbox"
                onClick={(e) => experienceClickHandler(e)}
              />
              <span className="text-secondary font-semibold text-l pl-2">
                {t("four+")}
              </span>
            </div>
          </div>
        </div>

        {/* WORK LEVEL */}
        <div className="work-level pb-3 pt-3">
          <h6 className="text-secondary pb-3  text-left font-bold text-xl">
            {t("work-level")}
          </h6>
          <div className="relative inline-flex">
            <svg
              className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 412 232"
            >
              <path
                d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                fill="#648299"
                fillRule="nonzero"
              />
            </svg>
            <select
              className="border border-gray-300 rounded-md text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none w-56"
              value={filter.workLevel}
              onChange={(e) => {
                levelHandler(e);
              }}
            >
              <option>{t("choose-all-work-level")}</option>
              <option>{t("internee")}</option>
              <option>{t("junior")}</option>
              <option>{t("senior")}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
