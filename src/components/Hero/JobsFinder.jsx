import { useState } from "react";
import { useTranslation } from "react-i18next";
// import { filterData } from "../../data/filterData";

function JobsFinder({ setData, data }) {
  const [t] = useTranslation();
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      console.log("first");
    } else {
      setData(
        data.filter((item) => {
          if (item.position.toLowerCase().includes(text.toLocaleLowerCase())) {
            console.log(item);
            return item;
          }
          return null;
        })
      );
    }
  };

  return (
    <div className="App  bg-gray-200  flex-col justify-around  py-[50px]  ">
      <div className="flex  flex-col">
        <div>
          <h1 className="text-3xl font-medium text-dark-gray leading-loose ">
            {t("jobs-finder")}
          </h1>
          <p className="decoration-solid pt-0 text-dark-gray leading-loose">
            {t("find-your-best-job")}
          </p>
        </div>
        <div className=" flex-col mt-2">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder={t("type-to-search")}
              className="rounded-3xl px-6 py-2 outline-none relative md:left-8"
              value={text}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="py-2 bg-accent px-5 rounded-3xl text-white relative   hover:bg-red-500 "
            >
              {t("search-finder")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JobsFinder;
