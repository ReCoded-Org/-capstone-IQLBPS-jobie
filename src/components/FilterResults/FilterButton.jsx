import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";

function FilterButton({ handleChange }) {
  const { t } = useTranslation();
  return (
    <Menu
      as="div"
      data-testid="filter-button"
      className="relative inline-block text-left"
    >
      <div>
        <Menu.Button
          data-testid="filter-botton-toggle"
          className="rounded-full bg-gray-300 mr-5 mt-5 pl-5 pr-5 text-lg duration-500 hover:bg-accent"
        >
          {" "}
          {t("sort-results-by")}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 md:right-0 z-10 mt-2 w-40 origin-center md:origin-top-right rounded-md bg-accent shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
          <div>
            <Menu.Item>
              {({ active }) => (
                <div
                  data-testid="language-button-option"
                  aria-hidden="true"
                  onClick={(e) => handleChange("newest", e)}
                  className={`${
                    active
                      ? "bg-white text-secondary rounded"
                      : "text-black-500"
                  }`}
                >
                  <h3>{t("newest")}</h3>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  data-testid="language-button-option"
                  aria-hidden="true"
                  onClick={(e) => handleChange("oldest", e)}
                  className={`${
                    active
                      ? "bg-white text-secondary rounded"
                      : "text-black-500"
                  }`}
                >
                  <h3>{t("oldest")}</h3>
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default FilterButton;
