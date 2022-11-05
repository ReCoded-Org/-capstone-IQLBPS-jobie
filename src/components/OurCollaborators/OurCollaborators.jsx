import CompanyDisplay from "../companyShowcaseComponent/CompanyDisplay";
import { showCaseData } from "../../data/showCaseData";


function OurCollaborators() {
    return (
      <section className="flex flex-col bg-gray-500/5 justify-center items-center">
        <h2 className=" font-inter text-center text-blue-900 font-semibold text-xs mt-5 mb-8 md:text-5xl">
        Our <span className="text-accent">Collaborators</span> 
        </h2>
      <CompanyDisplay showCaseData={showCaseData}/>
    </section>
  );
}

export default OurCollaborators;
