import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { signout } from "../../features/user/userSlice";
import { auth } from "../../firebase";

function DropDown({ setIsAuthenticated }) {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(signout());
    auth.signOut();
    setIsAuthenticated(false);
  };
  // import SignOut from "../signup/SignOut";

  return (
    <Menu
      as="div"
      data-testid="filter-button"
      className="relative inline-block text-left"
    >
      <div>
        <Menu.Button
          data-testid="filter-botton-toggle"
          className="bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-5 mx-3 rounded-full"
        >
          {t("account")}
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
        <Menu.Items className="absolute md:right-0 z-10 mt-2 w-40 origin-center md:origin-top-right rounded-md bg-accent shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
          <div>
            <Menu.Item>
              {({ active }) => (
                <div
                  data-testid="language-button-option"
                  aria-hidden="true"
                  className={`${
                    active
                      ? "bg-white text-secondary rounded"
                      : "text-black-500"
                  }`}
                >
                  <Link to="/profile">
                    <h3>{t("view-profile")}</h3>
                  </Link>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  data-testid="language-button-option"
                  aria-hidden="true"
                  className={`${
                    active
                      ? "bg-white text-secondary rounded"
                      : "text-black-500"
                  }`}
                >
                  <Link to="/profile-edit">
                    <h3>{t("edit-profile")}</h3>
                  </Link>
                </div>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <div
                  data-testid="language-button-option"
                  aria-hidden="true"
                  className={`${
                    active
                      ? "bg-white text-secondary rounded"
                      : "text-black-500"
                  }`}
                  onClick={logoutOfApp}
                >
                  <h3>{t("signout")}</h3>
                  {/* <SignOut /> */}
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default DropDown;
