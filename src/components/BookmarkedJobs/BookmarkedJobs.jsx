<<<<<<< HEAD
import { bookmarkedJobsData } from "../../data/bookmarkedJobsData";

function BookmarkedJobs() {
  const closed=   <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="w-5 h-5 fill-red-600 medium:w-4 medium:h-4 small:w-3 small:h-3"
>
  <path
    fillRule="evenodd"
    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
    clipRule="evenodd"
  />
</svg>;
const open=   <svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
className="w-5 h-5 fill-green-600 medium:w-4 medium:h-4 small:w-3 small:h-3"
>
<path
  fillRule="evenodd"
  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
  clipRule="evenodd"
/>
</svg>;
  return (
    <div className=" px-96 py-4 medium:px-24 medium:py-2 small:px-4 small:py-2">
      <h1 className="text-center text-3xl pb-10 font-semibold font-inter medium:text-2xl small:text-xl ">
        Bookmarked Jobs
      </h1>
      {bookmarkedJobsData.map((data)=>{  
        return(
<div key={data.id}className="rounded-md flex shadow-xl px-6 py-2 mb-12 medium:px-4 mb-8 small:px-2 small:mb-6">
        <img
          className=" col-span-2 h-28 medium:h-20 small:h-16"
          src={data.src}
          alt="hiring company logo"
        />
        <div className="pl-6 grow">
          <h1 className="font-bold text-2xl text-dark-gray medium:text-base small:text-sm">{data.position}</h1>
          <h1 className="text-xl text-secondary font-semibold medium:text-sm small:text-xs">{data.employer}</h1>

          <div className="flex pt-6">
            <div className="flex  items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 medium:w-3 medium:h-3 small:w-3 small:h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>{" "}
              <p className="text-base medium:text-sm small:text-xs">{data.jobType}</p>
            </div>
            <div className="flex  pl-12 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 medium:w-3 medium:h-3 small:w-3 small:h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
                <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
              </svg>
              <p className="text-base medium:text-sm small:text-xs">{data.jobModel}</p>{" "}
            </div>
          </div>
        </div>
        <div className="flex items-center pr-4">
          {data.status==="open"?open:closed}
          <p className="font-semibold pl-2 text-dark-gray medium:text-sm small:text-xs">{data.status==="open"?"open":"closed"}</p>
        </div>
      </div>
        );
      })}

    </div>
  );
}
export default BookmarkedJobs;
=======
function BookmarkedJobs() {
  return (
    <div className=" px-96 py-4 medium:px-24 medium:py-2 small:px-4 small:py-2">
      <h1 className="text-center text-3xl pb-10 font-semibold font-inter medium:text-2xl small:text-xl ">
        Bookmarked Jobs
      </h1>
      <div className="rounded-md flex shadow-xl px-6 py-2 mb-12 medium:px-4 mb-8 small:px-2 small:mb-6">
        <img
          className=" col-span-2 h-28 medium:h-20 small:h-16"
          src="/assets/filterResults/Murex.png"
          alt="hiring company logo"
        />
        <div className="pl-6 grow">
          <h1 className="font-bold text-2xl text-dark-gray medium:text-base small:text-sm">
            DevOps Engineer
          </h1>
          <h1 className="text-xl text-secondary font-semibold medium:text-sm small:text-xs">
            Murex
          </h1>

          <div className="flex pt-6">
            <div className="flex  items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 medium:w-3 medium:h-3 small:w-3 small:h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>{" "}
              <p className="text-base medium:text-sm small:text-xs">
                Full-time
              </p>
            </div>
            <div className="flex  pl-12 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 medium:w-3 medium:h-3 small:w-3 small:h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
                <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
              </svg>
              <p className="text-base medium:text-sm small:text-xs">Remote</p>{" "}
            </div>
          </div>
        </div>
        <div className="flex items-center pr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 fill-red-600 medium:w-4 medium:h-4 small:w-3 small:h-3"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>{" "}
          <p className="font-semibold pl-2 text-dark-gray medium:text-sm small:text-xs">
            Closed
          </p>
        </div>
      </div>

      <div className="rounded-md flex shadow-xl px-6 py-2 mb-12 medium:px-4 mb-8 small:px-2 small:mb-6">
        <img
          className=" col-span-2 h-28 medium:h-20 small:h-16"
          src="/assets/filterResults/Murex.png"
          alt="hiring company logo"
        />
        <div className="pl-6 grow">
          <h1 className="font-bold text-2xl text-dark-gray medium:text-base small:text-sm">
            Front-end Developer
          </h1>
          <h1 className="text-xl text-secondary font-semibold medium:text-sm small:text-xs">
            Murex
          </h1>

          <div className="flex  pt-6">
            <div className="flex  items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 medium:w-3 medium:h-3 small:w-3 small:h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>{" "}
              <p className="text-base medium:text-sm small:text-xs">
                Part-time
              </p>
            </div>
            <div className="flex pl-12 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 medium:w-3 medium:h-3 small:w-3 small:h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
                <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
              </svg>
              <p className="text-base medium:text-sm small:text-xs">
                Internship
              </p>{" "}
            </div>
          </div>
        </div>
        <div className="flex  items-center pr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 fill-green-600 medium:w-4 medium:h-4 small:w-3 small:h-3"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clipRule="evenodd"
            />
          </svg>
          <p className="font-semibold pl-2 medium:text-sm small:text-xs">
            Open
          </p>
        </div>
      </div>

      <div className="rounded-md flex shadow-xl px-6 py-2 mb-12 medium:px-4 mb-8 small:px-2 small:mb-6">
        <img
          className=" col-span-2 h-28 medium:h-20 small:h-16"
          src="/assets/filterResults/EAB.png"
          alt="hiring company logo"
        />
        <div className="pl-6 grow">
          <h1 className="font-bold text-2xl text-dark-gray medium:text-base small:text-sm">
            Associate Data Scientist
          </h1>
          <h1 className="text-xl text-secondary font-semibold medium:text-sm small:text-xs">
            EAB
          </h1>

          <div className="flex pt-6">
            <div className="flex  items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 medium:w-3 medium:h-3 small:w-3 small:h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>{" "}
              <p className="text-base medium:text-sm small:text-xs">
                Part-time
              </p>
            </div>
            <div className="flex pl-12 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 medium:w-3 medium:h-3 small:w-3 small:h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
                <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
              </svg>
              <p className="text-base medium:text-sm small:text-xs">Remote</p>{" "}
            </div>
          </div>
        </div>
        <div className=" flex items-center pr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 fill-green-600 medium:w-4 medium:h-4 small:w-3 small:h-3"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clipRule="evenodd"
            />
          </svg>
          <p className="font-semibold pl-2 medium:text-sm small:text-xs">
            Open
          </p>
        </div>
      </div>
    </div>
  );
}
export default BookmarkedJobs;
>>>>>>> 3b980177d9ebcc2351b504b2430808341c94cca4
