import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
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
import BookmarkedJobs from "./components/BookmarkedJobs/BookmarkedJobs";


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
=======
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/signup/SignUp";
import Login from "./components/Login/Login";
import AboutPage from "./pages/about-us";
import Index from "./pages/index";
import UserProfile from "./components/UserProfile/UserProfile";
import { users } from "./data/usersData";
>>>>>>> 92a53a239bd03329b9571effc28224d64768e926

function App() {
  return (
    <div>
<<<<<<< HEAD
      <FilterResults filterData={filterData}/>
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
      <BookmarkedJobs />
=======
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/roadmap" element={<h1>Roadmap page</h1>} />
        <Route path="/jobs" element={<h1>jobs page</h1>} />
        <Route path="/contact" element={<h1>contact us page</h1>} />
      </Routes>
      <UserProfile users={users} />
>>>>>>> 92a53a239bd03329b9571effc28224d64768e926
    </div>
  );
}

export default App;
