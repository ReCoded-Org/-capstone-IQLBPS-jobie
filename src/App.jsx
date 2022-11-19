/* eslint-disable no-console */
import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { signup, selectUser, signout } from "./features/user/userSlice";
import { auth, onAuthStateChanged } from "./firebase";
import Hero from "./components/Hero/Hero";
import AboutHero from "./components/aboutHero/AboutHero";
import Localize from "./Localize";
import MeetOurTeam from "./components/MeetOurTeam/MeetOurTeam";
import { teamMembers } from "./data/teamData";
import WyChooseUs from "./components/whyChooseUs/WhyChooseUs";
import CompanyShowcaseComponent from "./components/companyShowcaseComponent/CompanyShowcaseComponent";
import { showCaseData } from "./data/showCaseData";
import FilterResults from "./components/FilterResults/FilterResults";
import { filterData } from "./data/filterData";
import "./App.css";
import JobsShowcase from "./components/JobsShowcase/JobsShowcase";
import { showcaseData } from "./data";
import Categories from "./components/Categories/Categories";
import Education from "./components/EducationAndExperience/Education";
import Experience from "./components/EducationAndExperience/Experience";
import LatestJobs from "./components/LatestJob/LatestJobs";
import HowItWorks from "./components/About/HowItWorks/HowItWorks";
import OurCollaborators from "./components/OurCollaborators/OurCollaborators";
import JobsFinder from "./components/Hero/JobsFinder";
import RoadMaps from "./components/Roadmaps/RoadMaps";
import SignUp from "./components/signup/SignUp";
import SignOut from "./components/signup/SignOut";
import Login from "./components/Login/Login";

const data = [
  {
    position: "Web Developer f",
    salary: "2000$-3000$",
    date: "10/10/2022",
    fullTime: true,
    partTime: false,
    remote: false,
    id: 1,
  },
  {
    position: "Web Developer p",
    salary: "2000$-3000$",
    date: "10/10/2022",
    fullTime: false,
    partTime: true,
    remote: false,
    id: 2,
  },
  {
    position: "Web Developer fr",
    salary: "2000$-3000$",
    date: "10/10/2022",
    fullTime: true,
    partTime: false,
    remote: true,
    id: 3,
  },
  {
    position: "Web Developer pr",
    salary: "2000$-3000$",
    date: "10/10/2022",
    fullTime: false,
    partTime: true,
    remote: true,
    id: 4,
  },
  {
    position: "Web Developer fr",
    salary: "2000$-3000$",
    date: "10/10/2022",
    fullTime: true,
    partTime: false,
    remote: true,
    id: 5,
  },
  {
    position: "Web Developer r",
    salary: "2000$-3000$",
    date: "10/10/2022",
    fullTime: false,
    partTime: false,
    remote: true,
    id: 6,
  },
  {
    position: "Web Developer fp",
    salary: "2000$-3000$",
    date: "10/10/2022",
    fullTime: true,
    partTime: true,
    remote: false,
    id: 7,
  },
];
const header = [
  { title: "Position", id: 1 },
  { title: "Salary", id: 2 },
  { title: "Date", id: 3 },
  { title: "", id: 4 },
];

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          signup({
            email: userAuth.email,
            uid: userAuth.uid,
            fullname: userAuth.fullname,
            password: userAuth.password,
          })
        );
      } else {
        dispatch(signout());
      }
    });
  }, []);

  console.log("page loaded");

  const { t } = useTranslation();
  return (
    <div>
      <SignOut />
      {!user ? (
        <SignUp />
      ) : (
        <div>
          <div>
            <h1>Hello {user.fullname}!</h1>
            <p>{user.email}</p>
          </div>
        </div>
      )}
      <Login />
      <FilterResults filterData={filterData} />
      <RoadMaps />
      <Hero />
      <AboutHero />
      <JobsFinder />
      <OurCollaborators showCaseData={showCaseData} />
      <Categories />
      <WyChooseUs />
      <JobsShowcase showcaseArray={showcaseData} />
      <Categories />
      <h1>{t("hello")}</h1>
      <Localize />
      <HowItWorks />
      <CompanyShowcaseComponent showCaseData={showCaseData} />
      <LatestJobs data={data} headers={header} />
      <MeetOurTeam teamMembers={teamMembers} />
      <WyChooseUs />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
