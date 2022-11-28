import { useState, useEffect } from "react";
import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { bookmark } from "../../features/bookmark/bookmark";
import FilterButton from "./FilterButton";

function FilterResults({ setData, data, auth, onAuthStateChanged, db }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [markedJobs, setMarkedJobs] = useState([]);

  useEffect(() => {
    const getBookMarks = async () => {
      const marks = await bookmark();
      setMarkedJobs(marks);
    };
    getBookMarks();
  }, [currentUser]);

  const updateBookMark = async (job) => {
    if (currentUser) {
      const booked = {
        ...job,
        uidRef: currentUser.uid,
        isBookedMark: true,
      };
      const selecedMarkedJobs = markedJobs.find(
        (marked) => marked.id === job.id
      );
      if (selecedMarkedJobs) {
        // ...delete
        console.log(selecedMarkedJobs);
        await deleteDoc(doc(db, "bookedMarkedJobs", selecedMarkedJobs.docRef));
        setMarkedJobs((prev) =>
          prev.filter((marked) => marked.id !== booked.id)
        );
      } else {
        const ref = await addDoc(collection(db, "bookedMarkedJobs"), booked);
        setMarkedJobs((prev) => [...prev, { ...booked, docRef: ref.id }]);
      }
    } else {
      alert("please login first");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        setCurrentUser(userAuth);
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const { t } = useTranslation();
  const handleChange = (props) => {
    const newArray = data?.map((key) => ({
      ...key,
      date: new Date(key.postingDate),
    }));
    if (props === "newest") {
      const sortingDataByNewest = newArray.sort((a, b) => b.date - a.date);
      setData(sortingDataByNewest);
    } else {
      const sortingDataByOldest = newArray.sort((a, b) => a.date - b.date);
      setData(sortingDataByOldest);
    }
  };

  return (
    <div className="bg-gray-100 w-full md:ml-5">
      <div className="flex justify-between">
        <h2 className="ml-5 mt-5 text-lg">
          {t("total")}
          <span className="text-accent mr-1 font-semibold">{data?.length}</span>
          {t("results")}
        </h2>
        <FilterButton handleChange={handleChange} />
      </div>
      {data?.length
        ? data.map((job) => {
            const isBooked = markedJobs.find((marked) => marked.id === job.id);
            return (
              <div
                key={job.id}
                className="rounded-md grid justify-items-center gap-3 m-5 bg-white drop-shadow-xl grid-cols-2 grid-rows-4 md:grid-cols-5 md:grid-rows-2"
              >
                <img
                  className="order-1 col-span-2 h-20  md:row-span-2 md:col-span-1 md:scale-60 object-contain md:h-28 md:order-1"
                  src={job.src}
                  alt="hiring company logo"
                />
                <h2 className="order-4 font-semibold text-center md:font-semibold md:mt-3  md:order-2">
                  {job.position}
                </h2>
                <h2 className="order-5 md:font-semibold md:mt-3 md:order-3">
                  {job.jobModel}
                </h2>
                <h2 className="order-6  font-semibold md:font-semibold md:mt-3 md:order-4 ">
                  ${job.minSalary} - ${job.maxSalary}
                </h2>

                <FontAwesomeIcon
                  className="order-3 md:mt-3 md:order-5"
                  icon={isBooked ? solidBookmark : faBookmark}
                  onClick={() => updateBookMark(job)}
                />

                <h2 className="order-8 font-semibold mb-5 md:font-normal md:order-6">
                  {job.employer}
                </h2>
                <h2 className="order-9 mb-5 md:order-7"> {job.jobType}</h2>
                <h2 className="order-7 md:order-8"> {job.payFreq}</h2>
                <h2 className="order-2 font-semibold md:font-normal md:order-9">
                  {job.postingDate}
                </h2>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default FilterResults;
