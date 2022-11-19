import React from "react";

function AboutUsComponent() {
  return (
    <div className="  large:space-x-10  medium:space-x-10  pt-8 pb-6 small:pt-6">
      <div className="small:text-center medium:text-center large:text-center small:mb-6 medium:pt-4 medium:mb-4">
        <h1 className="font-semibold text-5xl  ml-56 small:ml-8	medium:ml-8 large:ml-8  text-green-600  ">
          {" "}
          About <span className="text-secondary  ">Us?</span>
        </h1>
      </div>

      <div className="md:flex small:pr-3 small:pl-3  md:p-8 text-center md:text-left space-y-4 pb-12 space-x-19 medium:space-x-19 large:space-x-1     ">
        <img
          className="ml-56 large:ml-36 mx-auto md:w-96 medium:mb-3    small:ml-0	 medium:ml-0 large:ml-0 medium:justify-start"
          src="/aboutus.jpg"
          alt=""
        />

        <p className="w-3/6 medium:pr-3 text-justify small:justify small:w-fit small:ml-3 small:mr-3	medium:justify medium:w-fit medium:ml-3 medium:mr-3 ">
          Our Mission is to build a bridge those who need a job and the ones who
          needs someone to do the job for them this platform makes connections
          easier and faster, in a community where the tech sector is growing
          rapidly the demand for tech professionals is geowing as well we strive
          to put job seekers first giving them free access to search for jobs
          post resumes and research companies. Every day we connect millions of
          people to new opportunities. but of courde this also allows companies
          find the right candidate faster putting themselves out there and
          allowing job seekers to see their open positions.
        </p>
      </div>
    </div>
  );
}

export default AboutUsComponent;
