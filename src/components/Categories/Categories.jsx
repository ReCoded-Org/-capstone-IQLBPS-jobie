import { useTranslation } from "react-i18next";

function Categories() {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-4 gap-4 px-56 pt-20 pb-20 small:grid-cols-2 small:gap-x-6 small:px-12 medium:grid-cols-3 medium:px-2">
      <div>
        <div className="bg-[#d4e6f1] rounded-full w-16 h-16 p-4 mx-auto small:w-12 small:h-12 small:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8  small:w-6 small:h-6"
          >
            <path
              fillRule="evenodd"
              d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.472l3.386-5.079A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497.75.75 0 00-.7 1.123 5.25 5.25 0 009.8-2.62 3.75 3.75 0 00-3.75-3.75z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-center">
          <h4 className="font-semibold text-dark-gray text-xl small:text-base">
            {" "}
            {t("design-category")}
          </h4>
          <p className="text-gray-600 text-base small:text-sm">
            {t("design-vacancies")}
          </p>
        </div>
      </div>

      <div>
        <div className="bg-[#d4e6f1] rounded-full w-16 h-16 p-4 mx-auto small:w-12 small:h-12 small:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8  small:w-6 small:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>
        </div>
        <div className="text-center">
          <h4 className="font-semibold text-dark-gray text-xl small:text-base">
            {t("frontend")}
          </h4>
          <p className="text-gray-600 text-base small:text-sm">
            {t("frontend-vacancies")}
          </p>
        </div>
      </div>

      <div>
        <div className="bg-[#d4e6f1] rounded-full w-16 h-16 p-4 mx-auto small:w-12 small:h-12 small:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8  small:w-6 small:h-6"
          >
            <path
              fillRule="evenodd"
              d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-center">
          <h4 className="font-semibold text-dark-gray text-xl small:text-base ">
            {t("backend")}
          </h4>
          <p className="text-gray-600 text-base small:text-sm">
            {t("backend-vacancies")}
          </p>
        </div>
      </div>

      <div>
        <div className="bg-[#d4e6f1] rounded-full w-16 h-16 p-4 mx-auto small:w-12 small:h-12 small:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8  small:w-6 small:h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
              clipRule="evenodd"
            />
            <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
            <path
              fillRule="evenodd"
              d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-center">
          <h4 className="font-semibold text-dark-gray text-xl  small:text-base">
            {t("web-developer")}
          </h4>
          <p className="text-gray-600 text-base small:text-sm">
            {t("web-vacancies")}
          </p>
        </div>
      </div>

      <div>
        <div className="bg-[#d4e6f1] rounded-full w-16 h-16 p-4 mx-auto small:w-12 small:h-12 small:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8  small:w-6 small:h-6"
          >
            <path
              fillRule="evenodd"
              d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
              clipRule="evenodd"
            />
            <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
          </svg>
        </div>
        <div className="text-center">
          <h4 className="font-semibold text-dark-gray text-xl small:text-base">
            {t("network")}
          </h4>
          <p className="text-gray-600 text-base small:text-sm">
            {t("network-vacancies")}
          </p>
        </div>
      </div>

      <div>
        <div className="bg-[#d4e6f1] rounded-full w-16 h-16 p-4 mx-auto small:w-12 small:h-12 small:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8  small:w-6 small:h-6"
          >
            <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
          </svg>
        </div>
        <div className="text-center">
          <h4 className="font-semibold text-dark-gray text-xl small:text-base">
            {t("project-manager")}
          </h4>
          <p className="text-gray-600 text-base small:text-sm">
            {t("pmanager-vacancies")}
          </p>
        </div>
      </div>

      <div>
        <div className="bg-[#d4e6f1] rounded-full w-16 h-16 p-4 mx-auto small:w-12 small:h-12 small:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8  small:w-6 small:h-6"
          >
            <path
              fillRule="evenodd"
              d="M15.22 6.268a.75.75 0 01.968-.432l5.942 2.28a.75.75 0 01.431.97l-2.28 5.941a.75.75 0 11-1.4-.537l1.63-4.251-1.086.483a11.2 11.2 0 00-5.45 5.174.75.75 0 01-1.199.19L9 12.31l-6.22 6.22a.75.75 0 11-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l3.606 3.605a12.694 12.694 0 015.68-4.973l1.086-.484-4.251-1.631a.75.75 0 01-.432-.97z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-center">
          <h4 className="font-semibold text-dark-gray text-xl small:text-base">
            {t("data-analystics")}
          </h4>
          <p className="text-gray-600 text-base small:text-sm">
            {t("analyst-vacancies")}
          </p>
        </div>
      </div>

      <div className="flex justify-center  items-center ">
        <button
          className="text-2xl pr-2 font-semibold small:text-lg medium:xl"
          type="button"
        >
          {t("view-all-categories")}
        </button>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8  small:w-6 small:h-6"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default Categories;
