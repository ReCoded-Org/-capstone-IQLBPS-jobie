import { Trans } from "react-i18next";
import CompanyDisplay from "../companyShowcaseComponent/CompanyDisplay";

function OurCollaborators({ showCaseData }) {
  return (
    <section className="flex flex-col bg-gray-500/5 justify-center items-center">
      <h2 className=" font-inter text-center text-blue-900 font-semibold text-xs mt-5 mb-8 md:text-5xl">
        <Trans i18nKey='our-collaborators'>
        Our <span className="text-accent">Collaborators</span>
        </Trans>
      </h2>
      <CompanyDisplay showCaseData={showCaseData} />
    </section>
  );
}

export default OurCollaborators;
