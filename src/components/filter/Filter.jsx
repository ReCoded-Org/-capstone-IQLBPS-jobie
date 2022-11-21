import { Trans,useTranslation } from "react-i18next";

const Filter = () => {
  const {t} = useTranslation();
  return (
    <div className="w-96 bg-gray-100 h-screen p-5 flex-col">
      <h2 className="text-secondary font-bold text-3xl">{t('filter')}</h2>

      <hr />
      <div className="salary flex-col">
        <div className="flex space-between p-3">
          <h6 className="text-secondary float-left font-bold text-xl">
          {t('salary-range')}
          </h6>
          <img src="/assets/filterComponent/dropdown-svgrepo-com.svg" alt="" />
        </div>
        <div className="  inputs -ml-20 grid-cols-2 grid-rows-2 gap-3 inline-grid pb-3  gap-x-20 object-left ">
          <p className="text-secondary text-left font-semibold text-l ">{t('from')}</p>
          <p className="text-secondary text-left font-semibold text-l">{t('to')}</p>
          <input type="text" className="w-20 rounded-md" />

          <input type="text" className="w-20 rounded-md" />
        </div>
      </div>

      {/* LOCATION */}
      <div className="location flex-column overflow-visible">
        <h6 className="text-secondary p-3 text-left font-bold text-xl">
          {t('location')}
        </h6>
        <button
          type="button"
          className=" group relative flex justify-center items-center bg-white border focus:outline-none shadow text-secondary rounded focus:ring ring-zinc-200  ml-3"
        >
          <p className="px-4">
           <Trans i18nKey="choose-all1"> Choose all that applies...</Trans> <img src="vector.png" alt="" />
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
          <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded group-focus:z-10">
            <ul className="text-left border rounded">
              <li className="px-4 py-1 hover:bg-gray-100 border-b">{t('iraq')}</li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">{t('lebanon')}</li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">{t('yemen')}</li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">{t('turkey')}</li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">{t('jordan')}</li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">{t('syr')}</li>
            </ul>
          </div>
        </button>
      </div>

      {/* TYPE OF EMPLOYMENT */}
      <div className="epmloyment-type flex-column ">
        <h6 className="text-secondary p-3 text-left font-bold text-xl ">
          {t('type-of-employment')}
        </h6>
        <button
          type="button"
          className=" group relative flex justify-center items-center bg-white border focus:outline-none shadow text-secondary rounded focus:ring ring-zinc-200 ml-3 "
        >
          <p className="px-4">{t('choose-all2')}
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
          <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded group-focus:z-10">
            <ul className="text-left border rounded ">
              <li className="px-4 py-1 hover:bg-gray-100 border-b">
                {t('full-time')}
              </li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">
              {t('part-time')}
              </li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">{t('remote')}</li>
            </ul>
          </div>
        </button>
      </div>

      {/* CATEGORY */}
      <div className="category flex-column ">
        <h6 className="text-secondary p-3 text-left font-bold text-xl">
         {t('category')}
        </h6>
        <button
          type="button"
          className=" group relative flex justify-center items-center bg-white border focus:outline-none shadow text-secondary rounded focus:ring ring-zinc-200 ml-3"
        >
          <p className="px-4">{t('choose-all3')}</p>
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
          <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded group-focus:z-10">
            <ul className="text-left border rounded">
              <li className="px-4 py-1 hover:bg-gray-100 border-b">{t('tech')} </li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">{t('design')}</li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">
                {t('engineering')}
              </li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">
                {t('financial-services')}
              </li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">
                {t('healthcare')}
              </li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">{t('remote')}</li>
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
          {t('work-exeperience')}
        </h6>
        <div className="flex-col text-left content-start">
          <div className="checkbox-container">
            <input type="checkbox" id="one" />
            <span className="text-secondary font-semibold text-l pl-2">
              {t('one')}
            </span>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="two" />
            <span className="text-secondary font-semibold text-l pl-2">
              {t('two')}
            </span>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="three" />
            <span className="text-secondary font-semibold text-l pl-2">
              {t('three')}
            </span>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="four" />
            <span className="text-secondary font-semibold text-l pl-2">
              {t('four+')}
            </span>
          </div>
        </div>
      </div>

      {/* WORK LEVEL */}
      <div className="work-level flex-column ">
        <h6 className="text-secondary p-3 left-0 text-left font-bold text-xl">
          {t('work-level')}
        </h6>
        <button
          type="button"
          className=" group relative flex justify-center items-center bg-white border focus:outline-none shadow text-secondary rounded focus:ring ring-zinc-200 ml-3"
        >
          <p className="px-4">{t('choose-all4')}</p>
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
          <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded group-focus:z-10">
            <ul className="text-left border rounded hover:z-3">
              <li className="px-4 py-1 hover:bg-gray-100 border-b">{t('enternee')}</li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">{t('junior')}</li>
              <li className="px-4 py-1 hover:bg-gray-100 border-b">{t('senior')}</li>
            </ul>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Filter;
