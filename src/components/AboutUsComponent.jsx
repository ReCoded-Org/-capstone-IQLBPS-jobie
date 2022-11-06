import React from "react";
import aboutus from "./image/aboutus.jpg";

function AboutUsComponent() {
  return (
    <div>
      <h1
        className="font-semibold text-5xl text-center ml-56			  "
        style={{ color: "#16a34a" }}
      >
        {" "}
        About <span className="text-secondary ">Us?</span>
      </h1>
      <div className="md:flex pt-6 md:p-8 text-center md:text-left space-y-4 pb-12  ">
        <img
          className="ml-56    md:w-96 md:h-auto   mx-auto"
          src={aboutus}
          alt=""
        />

        <p className="w-3/6 text-justify ">
          Our Mission is to build a bridge those who need a job and the ones who
          needs someone to do the job for them this platform makes connections
          easierand faster, in a community where the tech sector is growing
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
