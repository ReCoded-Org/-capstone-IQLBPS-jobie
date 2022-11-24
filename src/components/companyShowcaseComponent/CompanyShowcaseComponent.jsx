import { t } from "i18next";
import CompanyDisplay from "./CompanyDisplay";

function CompanyShowcaseComponent({ showCaseData }) {
  return (
    <section className="flex flex-col bg-gray-500/5 justify-center items-center">
      <h2 className=" font-inter text-center text-blue-900 font-semibold  text-xs mt-5 mb-8 md:text-2xl">
        {t("company-showcase")}
      </h2>
      <CompanyDisplay showCaseData={showCaseData} />
    </section>
  );
}

export default CompanyShowcaseComponent;
