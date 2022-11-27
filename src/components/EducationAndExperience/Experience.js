import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const [isShowForm, setIsShowForm] = useState(false);

  function handleShowForm() {
    setIsShowForm(true);
  }
  function handleRemoveShowForm() {
    setIsShowForm(false);
  }

  return (
    <div className="bg-gray-200">
      <div className="pt-4 pb-10">
        <h1 className="pb-5">{t("work-experience")}</h1>
        <button
          type="button"
          onClick={handleShowForm}
          className="bg-[#154360] hover:bg-[#226086] text-white font-bold py-2 px-4 rounded-full  left-10 top-10 "
        >
          {t("add-item-experience")}
        </button>
      </div>
      {isShowForm && (
        <div className="pt-4">
          <h1 className="pb-5">{t("experience-item")}</h1>
          <button
            type="button"
            onClick={handleRemoveShowForm}
            className="bg-transparent hover:bg-[#154360] text-[#154360] font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
          >
            {t("remove-experience")}
          </button>
          <div className="bg-gray-200 flex flex-col justify-center">
            <form className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-200 p-8 px-8">
              <div className="flex flex-col text-black-400 py-2">
                <lable> {t("company")} </lable>
                <input
                  type="text"
                  className="rounded-lg bg-white mt-2 p-2 focus:border-blue-500  focus:outline-none"
                />
              </div>

              <div className="flex flex-col text-black-400 py-2">
                <lable> {t("location-experience")}</lable>
                <input
                  type="text"
                  required
                  className="rounded-lg bg-white mt-2 p-2 focus:border-blue-500  focus:outline-none"
                />
              </div>
              <div className="flex flex-col text-black-400 py-2">
                <lable>{t("type-of-employment-exp")}</lable>
                <input
                  type="text"
                  required
                  className="rounded-lg bg-white mt-2 p-2 focus:border-blue-500  focus:outline-none"
                />
              </div>
              <div className="flex flex-col text-black-400 py-2">
                <lable className=""> {t("position")}</lable>
                <input
                  type="text"
                  required
                  className="rounded-lg bg-white mt-2 p-2 focus:border-blue-500  focus:outline-none"
                />
              </div>
              <div className="flex flex-col text-black-400 py-2">
                <lable>{t("date-exp")}</lable>
                <input
                  type="date"
                  required
                  className="rounded-lg bg-white mt-2 p-2 focus:border-blue-500  focus:outline-none"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
