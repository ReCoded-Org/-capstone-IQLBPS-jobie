import React from "react";
import AboutHero from "../../components/aboutHero/AboutHero";
import HowItWorks from "../../components/About/HowItWorks/HowItWorks";
import MeetOurTeam from "../../components/MeetOurTeam/MeetOurTeam";
import OurCollaborators from "../../components/OurCollaborators/OurCollaborators";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";
import AboutUsComponent from "../../components/AboutUsComponent"
import { teamMembers } from "../../data/teamData";
import { showCaseData } from "../../data/showCaseData";

function AboutPage() {
  return (
    <div className="bg-gray-500/5">
      <AboutHero
        title="find your job"
        sub="live your dream"
        img="/assets/aboutHero/one1.svg"
      />
      <AboutUsComponent />
      <HowItWorks />
      <WhyChooseUs />
      <MeetOurTeam teamMembers={teamMembers} />
      <OurCollaborators showCaseData={showCaseData} />
    </div>
  );
}

export default AboutPage;