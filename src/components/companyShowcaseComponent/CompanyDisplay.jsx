function CompanyDisplay({ showCaseData }) {
  const topRowComanpies = showCaseData.companies.slice(0, 5).map((company) => {
    return (
      <a
        key={`${company}`}
        className="w-50"
        rel="noreferrer"
        target="_blank"
        href={`https://www.${company}.com`}
      >
        <img
          className="hover:scale-75"
          src={`/assets/company-showcase-component-assets/${company}.png`}
          alt={`${company}s logo`}
        />
      </a>
    );
  });

  const bottomRowComanpies = showCaseData.companies
    .slice(5, 10)
    .map((company) => {
      return (
        <a
          key={`${company}`}
          className="w-50"
          rel="noreferrer"
          target="_blank"
          href={`https://www.${company}.com`}
        >
          <img
            className="hover:scale-75"
            src={`/assets/company-showcase-component-assets/${company}.png`}
            alt={`${company}s logo`}
          />
        </a>
      );
    });

  return (
    <>
      <div className="grid grid-cols-5 grid-rows-2 gap-x-5 place-content-center items-center w-4/6">
        {topRowComanpies}
      </div>
      <div className="grid grid-cols-4 gap-x-5 place-content-center items-center w-5/6">
        {bottomRowComanpies}
      </div>
    </>
  );
}
export default CompanyDisplay;
