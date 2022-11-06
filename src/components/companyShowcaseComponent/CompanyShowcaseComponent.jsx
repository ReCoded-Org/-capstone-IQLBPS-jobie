import CompanyDisplay from "./CompanyDisplay";

function CompanyShowcaseComponent({ showCaseData }) {
  return (
    <section className="flex flex-col bg-gray-500/5 justify-center items-center">
        <h2 className=" font-inter text-center text-blue-900 font-semibold  text-xs mt-5 mb-8 md:text-2xl">
        More than 20,000 companies are using our service to hire their employees.
        </h2>
      <CompanyDisplay showCaseData={showCaseData}/>
    </section>
  );
}

export default CompanyShowcaseComponent;
